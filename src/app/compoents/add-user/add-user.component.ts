import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  msg: string | null | undefined;
  isDisplayName = 0;

  constructor(private userService: UserService) {}

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

  addUser() {
    console.log(this.user.value);
    this.userService.registerUser(this.user.value).subscribe((res) => {
      if (res === 'Registered') {
        this.cleanInput();
      }
    });
  }

  cleanInput() {
    this.msg = this.user.get('username')?.value;
    this.isDisplayName = 1;
    this.user.reset();
  }
}
