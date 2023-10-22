import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { movieList } from 'src/app/Models/interfaces';
import { MovieService } from 'src/app/Services/movie.service';
import { environment } from "./../../../environments/environment"

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
})
export class MovieCarouselComponent {

  baseImageURL = environment.baseImageURL
  @Input() urlData: string = "";
  @Input() NameData: string = "";
  data: movieList = {} as movieList;

  constructor(private _MovieService: MovieService) { }

  ngOnInit(): void {
    this.getMovie();
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

  getMovie() {
    this._MovieService.getAllMovieLists(this.urlData).subscribe({
      next: (res) => {
        this.data = res;
      }
    })
  }
}
