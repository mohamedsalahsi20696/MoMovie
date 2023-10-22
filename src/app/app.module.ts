import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './Home/nav-bar/nav-bar.component';
import { FooterComponent } from './Home/footer/footer.component';
import { HomeComponent } from './Home/home/home.component';
import { SpinnerComponent } from './Home/spinner/spinner.component';
import { NotFoundComponent } from './Home/not-found/not-found.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MovieCarouselComponent } from './Home/movie-carousel/movie-carousel.component';
import { TvCarouselComponent } from './Home/tv-carousel/tv-carousel.component';
import { PeopleCarouselComponent } from './Home/people-carousel/people-carousel.component';
import { CompanyCarouselComponent } from './Home/company-carousel/company-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './Interceptors/loading.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PipesModule } from './pipes/pipes.module';
import { SharedModule } from './Shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    SpinnerComponent,
    NotFoundComponent,
    MovieCarouselComponent,
    TvCarouselComponent,
    PeopleCarouselComponent,
    CompanyCarouselComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    PipesModule,
    SharedModule,
    MatCommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
