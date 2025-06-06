import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compoents/home/home.component';
import { LoginComponent } from './compoents/login/login.component';
import { AdminDashboardComponent } from './compoents/admin-dashboard/admin-dashboard.component';
import { FacultyDashboardComponent } from './compoents/faculty-dashboard/faculty-dashboard.component';
import { AddUserComponent } from './compoents/add-user/add-user.component';
import { AllUsersComponent } from './compoents/all-users/all-users.component';
import { EditUserComponent } from './compoents/edit-user/edit-user.component';
import { AddSubjectComponent } from './compoents/add-subject/add-subject.component';
import { AllSubjectComponent } from './compoents/all-subject/all-subject.component';
import { EditSubjectComponent } from './compoents/edit-subject/edit-subject.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'facalty-dashboard',
    component: FacultyDashboardComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent,
  },
  {
    path: 'show-all-user',
    component: AllUsersComponent,
  },
  {
    path: 'edit-user/:username',
    component: EditUserComponent,
  },
  {
    path: 'add-subject',
    component: AddSubjectComponent,
  },
  {
    path: 'show-all-subject',
    component: AllSubjectComponent,
  },
  {
    path: 'edit-subject/:id',
    component: EditSubjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
