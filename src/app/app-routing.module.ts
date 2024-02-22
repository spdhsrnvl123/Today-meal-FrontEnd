import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {LocationDetailComponent} from "./pages/location-detail/location-detail.component";
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {StartPageComponent} from './pages/start-page/start-page.component';
import {MyPageComponent} from './pages/my-page/my-page.component';
import {PageNotComponentComponent} from "./components/page-not-component/page-not-component.component";
import {LoginSuccessComponent} from "./layouts/login-success/login-success.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/start/signin',
    pathMatch: 'full'
  }, // redirect to `first-component`
  {
    path: 'start',
    component: StartPageComponent,
    children: [
      {
        path: 'signin',
        component: SignInComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
      {
        path:'success',
        component : LoginSuccessComponent
      }
    ],
  },
  {
    path: 'main',
    component: MainPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'mypage',
    component: MyPageComponent
  },
  { path: '**', component: PageNotComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
