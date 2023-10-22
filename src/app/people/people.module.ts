import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people/people.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../Shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    NgxPaginationModule,
    PipesModule,
    SharedModule,
    FormsModule,
  ]
})
export class PeopleModule { }
