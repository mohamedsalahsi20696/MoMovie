import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie/movie.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../Shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    NgxPaginationModule,
    PipesModule,
    SharedModule,
    FormsModule,
  ]
})
export class MovieModule { }
