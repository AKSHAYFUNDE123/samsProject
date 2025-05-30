import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/update.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  username = 'akshay';
  editUser: any;
  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') ?? '';
    this.getUser();
  }

  getUser() {
    this.service.getUserByUsername(this.username).subscribe((res) => {
      this.editUser = res;
      if (typeof res === 'string') {
        res = JSON.parse(res);
      }

      this.user.patchValue({
        username: res.username,
        password: res.password,
        email: res.email,
        role: res.role,
        firstName: res.firstName,
        lastName: res.lastName,
      });
    });
  }

  updateUser() {
    alert('call heare');
    this.service.updatingUser(this.user.value).subscribe((res) => {
      if (res != null) {
        alert('success');
        this.routes.navigateByUrl('/show-all-user');
      } else {
        alert('something went wrong');
      }
    });
  }

  user = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),

    email: new FormControl('', [Validators.email, Validators.required]),

    role: new FormControl('', [Validators.required]),

    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });
}
