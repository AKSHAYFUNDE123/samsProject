import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compoents/home/home.component';
import { LoginComponent } from './compoents/login/login.component';
import { FooterComponent } from './compoents/footer/footer.component';
import { AllSubjectComponent } from './compoents/all-subject/all-subject.component';
import { AdminDashboardComponent } from './compoents/admin-dashboard/admin-dashboard.component';
import { AdminMenuComponent } from './compoents/admin-menu/admin-menu.component';
import { AddUserComponent } from './compoents/add-user/add-user.component';
import { AllUsersComponent } from './compoents/all-users/all-users.component';
import { EditUserComponent } from './compoents/edit-user/edit-user.component';
import { AddSubjectComponent } from './compoents/add-subject/add-subject.component';
import { EditSubjectComponent } from './compoents/edit-subject/edit-subject.component';
import { ViewAllAttendanceComponent } from './compoents/view-all-attendance/view-all-attendance.component';
import { FacultyDashboardComponent } from './compoents/faculty-dashboard/faculty-dashboard.component';
import { FacultyMenuComponent } from './compoents/faculty-menu/faculty-menu.component';
import { AddStudentComponent } from './compoents/add-student/add-student.component';
import { AllStudentComponent } from './compoents/all-student/all-student.component';
import { EditStudentComponent } from './compoents/edit-student/edit-student.component';
import { TakeAttendanceComponent } from './compoents/take-attendance/take-attendance.component';
import { ViewAttendanceComponent } from './compoents/view-attendance/view-attendance.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    AllSubjectComponent,
    AdminDashboardComponent,
    AdminMenuComponent,
    AddUserComponent,
    AllUsersComponent,
    EditUserComponent,
    AddSubjectComponent,
    EditSubjectComponent,
    ViewAllAttendanceComponent,
    FacultyDashboardComponent,
    FacultyMenuComponent,
    AddStudentComponent,
    AllStudentComponent,
    EditStudentComponent,
    TakeAttendanceComponent,
    ViewAttendanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  user = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
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
