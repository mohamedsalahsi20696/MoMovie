import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NoDataYetComponent } from './no-data-yet/no-data-yet.component';
import { CircleProgressComponent } from './circle-progress/circle-progress.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PipesModule } from '../pipes/pipes.module';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';


const pipes = [
  NoDataYetComponent,
  CircleProgressComponent,
  MovieDetailsComponent,
  TvDetailsComponent,
  PeopleDetailsComponent

]

@NgModule({
  declarations: [
    ...pipes,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CarouselModule,
    PipesModule,

    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  exports: pipes
})
export class SharedModule { }
