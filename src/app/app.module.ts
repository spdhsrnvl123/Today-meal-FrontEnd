import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { KakaoAPIComponent } from './services/kakao-api/kakao-api.component';
import { FormsModule } from '@angular/forms';
import { SearchListComponent } from './components/search-list/search-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './layouts/nav/nav.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CardComponent } from './components/card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DeleteLoadingListComponent } from './components/delete-loading-list/delete-loading-list.component';
import { KakaoFormComponent } from './components/kakao-form/kakao-form.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FoodRainComponent } from './components/food-rain/food-rain.component';
import { NgOptimizedImage } from '@angular/common';
import { SubTitleComponent } from './components/sub-title/sub-title.component';
import { RankCardComponent } from './components/rank-card/rank-card.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { LocationDetailComponent } from './pages/location-detail/location-detail.component';
import {MyPageComponent} from "./pages/my-page/my-page.component";
import { PwChangeComponent } from './layouts/pw-change/pw-change.component';
import { TimerComponent } from './components/timer/timer.component';
import { StarComponent } from './components/star/star.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewRegisterComponent } from './components/review-register/review-register.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    RegisterPageComponent,
    KakaoAPIComponent,
    SearchListComponent,
    NavComponent,
    MainPageComponent,
    DeleteLoadingListComponent,
    KakaoFormComponent,
    SignInComponent,
    SignUpComponent,
    FoodRainComponent,
    SubTitleComponent,
    RankCardComponent,
    ReviewCardComponent,
    ModalComponent,
    LocationDetailComponent,
    MyPageComponent,
    PwChangeComponent,
    TimerComponent,
    StarComponent,
    ReviewListComponent,
    ReviewRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CardComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
