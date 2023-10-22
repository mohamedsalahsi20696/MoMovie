import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcAvarage'
})
export class CalcAvaragePipe implements PipeTransform {

  transform(avg: number, limit: number): unknown {
    return avg * limit;
  }

}
