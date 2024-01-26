import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from "./pages/start-page/start-page.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {LocationDetailComponent} from "./pages/location-detail/location-detail.component";

export const routes: Routes = [
  {
    path: 'start',
    component: StartPageComponent,

  },
  {path: 'main', component:MainPageComponent},
  {path: 'location/:id', component:LocationDetailComponent},
  {path: 'register', component:RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
