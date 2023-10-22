import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvRoutingModule } from './tv-routing.module';
import { TvComponent } from './tv/tv.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../Shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    TvComponent
  ],
  imports: [
    CommonModule,
    TvRoutingModule,
    NgxPaginationModule,
    PipesModule,
    SharedModule,
    FormsModule,
  ]
})
export class TvModule { }
