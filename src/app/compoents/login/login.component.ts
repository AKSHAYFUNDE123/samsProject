import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private service: UserService, private route:Router) {}

  LoginRequest = {
    username: '',
    password: '',
  };

  loginUser() {
    this.service.loginUser(this.LoginRequest).subscribe((res) => {
      if (res != null) {
        if (res.role === 'admin') {
          this.route.navigateByUrl("/admin-dashboard");
        } else {
          this.route.navigateByUrl("/facalty-dashboard");
        }
      } else {
        alert('invalid user');
      }
    });
  }
}
