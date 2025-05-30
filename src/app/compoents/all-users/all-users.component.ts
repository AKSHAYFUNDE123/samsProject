import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  constructor(private service: UserService) {}

  users: User[] = [];

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe((res) => {
      this.users = res;
    });
  }

  // Delete Button Works

  isDisplayName = 0;
  msg = '';
  
  deleteUser(username: string) {
   alert("delete heare");

    this.service.deleteUsers(username).subscribe({
      next: (res) => {
        this.getAllUsers();
        this.isDisplayName = 1;
        this.msg = username;
      },
      error: (err) => {
        console.error('Error deleting user:', err);
        alert('Failed to delete user.');
      },
    });
  }

 
}
