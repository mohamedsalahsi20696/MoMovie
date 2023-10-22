import { Component, Input } from '@angular/core';
import { environment } from "./../../../environments/environment"
import { tvList } from 'src/app/Models/interfaces';
import { TvService } from 'src/app/Services/tv.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tv-carousel',
  templateUrl: './tv-carousel.component.html',
  styleUrls: ['./tv-carousel.component.scss']
})
export class TvCarouselComponent {
  baseImageURL = environment.baseImageURL
  @Input() urlData: string = "";
  @Input() NameData: string = "";
  data: tvList = {} as tvList;

  constructor(private _TvService: TvService) {
  }

  ngOnInit(): void {
    this.getTv();
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

  getTv() {
    this._TvService.getAllTvSeriesLists(this.urlData).subscribe({
      next: (res) => {
        this.data = res;
      }
    })
  }
}
