import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compoents/home/home.component';
import { LoginComponent } from './compoents/login/login.component';
import { AdminDashboardComponent } from './compoents/admin-dashboard/admin-dashboard.component';
import { FacultyDashboardComponent } from './compoents/faculty-dashboard/faculty-dashboard.component';
import { AddUserComponent } from './compoents/add-user/add-user.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
