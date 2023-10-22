import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { movieCredit, movieDetails, movieImage, movieRecommendations, movieSimilar } from 'src/app/Models/interfaces';
import { MovieService } from 'src/app/Services/movie.service';
import { environment } from "./../../../environments/environment"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  constructor(private _MovieService: MovieService, private _ActivatedRoute: ActivatedRoute) { }

  baseImageURL = environment.baseImageURL
  movie: movieDetails = {} as movieDetails;
  movieImages: movieImage = {} as movieImage;
  movieCredit: movieCredit = {} as movieCredit;
  movieRecommendations: movieRecommendations = {} as movieRecommendations;
  movieSimilar: movieSimilar = {} as movieSimilar;

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

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap) => {
      this.movie.id = Number(paramMap.get('id')!);
      this.getMovie();
      this.getImages();
      this.getCredits();
      this.getRecommendations();
      this.getSimilar();
    });
  }

  getMovie() {
    this._MovieService.getMovieById(this.movie.id).subscribe({
      next: (res) => {
        this.movie = res;
      }
    })
  }

  getImages() {
    this._MovieService.getImagesMovieById(this.movie.id).subscribe({
      next: (res) => {
        this.movieImages = res;
      }
    })
  }

  getCredits() {
    this._MovieService.getCreditsMovieById(this.movie.id).subscribe({
      next: (res) => {
        this.movieCredit = res;
      }
    })
  }

  getRecommendations() {
    this._MovieService.getRecommendationsMovieById(this.movie.id).subscribe({
      next: (res) => {
        this.movieRecommendations = res;
      }
    })
  }

  getSimilar() {
    this._MovieService.getSimilarMovieById(this.movie.id).subscribe({
      next: (res) => {
        this.movieSimilar = res;
      }
    })
  }




}
