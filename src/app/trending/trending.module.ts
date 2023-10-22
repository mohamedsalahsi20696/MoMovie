import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingRoutingModule } from './trending-routing.module';
import { TrendingComponent } from './trending/trending.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../Shared/shared.module';


@NgModule({
  declarations: [
    TrendingComponent
  ],
  imports: [
    CommonModule,
    TrendingRoutingModule,
    NgxPaginationModule,
    PipesModule,
    SharedModule,
    FormsModule,
  ]
})
export class TrendingModule { }
