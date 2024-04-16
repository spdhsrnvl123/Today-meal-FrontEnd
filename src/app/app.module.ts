import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchListComponent } from './components/search-list/search-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './layouts/nav/nav.component';
import { CardComponent } from './components/card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DeleteLoadingListComponent } from './components/delete-loading-list/delete-loading-list.component';
import { KakaoFormComponent } from './components/kakao-form/kakao-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgOptimizedImage } from '@angular/common';
import { SubTitleComponent } from './components/sub-title/sub-title.component';
import { RankCardComponent } from './components/rank-card/rank-card.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { LocationDetailComponent } from './pages/location-detail/location-detail.component';
import { MyPageComponent } from './pages/my-page/my-page.component';
import { TimerComponent } from './components/timer/timer.component';
import { StarComponent } from './components/star/star.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewRegisterComponent } from './components/review-register/review-register.component';
import { RankTopComponent } from './layouts/rank-top/rank-top.component';
import { ScrollEventDirective } from './services/scroll-event.directive';
import { FoodRain2Component } from './components/food-rain2/food-rain2.component';
import { MyReviewListComponent } from './components/my-review-list/my-review-list.component';
import { LoginComponent } from './pages/login/login.component';
import { JoinComponent } from './pages/join/join.component';
import { AsideComponent } from './layouts/aside/aside.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationManagementComponent } from './pages/location-management/location-management.component';
import { NoPageComponent } from './pages/no-page/no-page.component';
import { PwChangeComponent } from './components/pw-change/pw-change.component';
import { KakaoMapComponent } from './components/kakao-map/kakao-map.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchListComponent,
    NavComponent,
    DeleteLoadingListComponent,
    KakaoFormComponent,
    SubTitleComponent,
    RankCardComponent,
    ReviewCardComponent,
    ModalComponent,
    LocationDetailComponent,
    MyPageComponent,
    TimerComponent,
    StarComponent,
    ReviewListComponent,
    ReviewRegisterComponent,
    RankTopComponent,
    ScrollEventDirective,
    CardComponent,
    FoodRain2Component,
    MyReviewListComponent,
    LoginComponent,
    JoinComponent,
    AsideComponent,
    HomeComponent,
    LocationManagementComponent,
    NoPageComponent,
    PwChangeComponent,
    KakaoMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ModalComponent],
})
export class AppModule {}
