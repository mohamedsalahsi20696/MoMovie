import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeMorePipe } from './see-more.pipe';
import { CalcAvaragePipe } from './calc-avarage.pipe';

const pipes = [
  SeeMorePipe,
  CalcAvaragePipe

]

@NgModule({
  declarations: [
    ...pipes,
  ],
  imports: [
    CommonModule
  ],
  exports: pipes
})
export class PipesModule { }
