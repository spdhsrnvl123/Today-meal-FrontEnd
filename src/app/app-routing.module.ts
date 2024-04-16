import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { JoinComponent } from './pages/join/join.component';
import { MyPageComponent } from './pages/my-page/my-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationManagementComponent } from './pages/location-management/location-management.component';
import { NoPageComponent } from './pages/no-page/no-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'join',
    component: JoinComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'location',
    component : LocationManagementComponent
  },
  {
    path: 'mypage',
    component: MyPageComponent,
  },
  { path: '**',
   component: NoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
