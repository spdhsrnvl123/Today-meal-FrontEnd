import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule, routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { StartPageComponent } from './pages/start-page/start-page.component';
import {provideRouter} from "@angular/router";
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { KakaoAPIComponent } from './services/kakao-api/kakao-api.component';
import { FormsModule } from "@angular/forms";
import { SearchListComponent } from './components/search-list/search-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    RegisterPageComponent,
    KakaoAPIComponent,
    SearchListComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CardComponent,
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
