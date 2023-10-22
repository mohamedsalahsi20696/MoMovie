import { Component, Input } from '@angular/core';
import { environment } from "./../../../environments/environment"
import { peopleList } from 'src/app/Models/interfaces';
import { PeopleService } from 'src/app/Services/people.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-people-carousel',
  templateUrl: './people-carousel.component.html',
  styleUrls: ['./people-carousel.component.scss']
})
export class PeopleCarouselComponent {
  baseImageURL = environment.baseImageURL
  @Input() urlData: string = "";
  @Input() NameData: string = "";
  data: peopleList = {} as peopleList;

  constructor(private _PeopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.getPeople();
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1500,
    mouseDrag: true,
    touchDrag: false,
    autoplayHoverPause: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 5,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 7
      }
    },
    nav: false
  }

  getPeople() {
    this._PeopleService.getAllPeopleLists(this.urlData).subscribe({
      next: (res) => {
        this.data = res;
      }
    })
  }
}
