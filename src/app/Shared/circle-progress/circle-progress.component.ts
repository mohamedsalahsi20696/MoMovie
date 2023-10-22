import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss']
})
export class CircleProgressComponent {

  @Input() progress: number = 0;

  ngOnInit(): void {

  }

}
