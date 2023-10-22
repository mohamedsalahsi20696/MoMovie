import { tvCredit, tvDetails, tvImage, tvRecommendations, tvSimilar } from './../../Models/interfaces';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvService } from 'src/app/Services/tv.service';
import { environment } from "./../../../environments/environment"
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent {

  constructor(private _TvService: TvService, private _ActivatedRoute: ActivatedRoute) { }

  baseImageURL = environment.baseImageURL
  tv: tvDetails = {} as tvDetails;
  tvImages: tvImage = {} as tvImage;
  tvCredit: tvCredit = {} as tvCredit;
  tvRecommendations: tvRecommendations = {} as tvRecommendations;
  tvSimilar: tvSimilar = {} as tvSimilar;

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
      this.tv.id = Number(paramMap.get('id')!);
      this.getTv();
      this.getImages();
      this.getCredits();
      this.getRecommendations();
      this.getSimilar();
    });
  }

  getTv() {
    this._TvService.getTvById(this.tv.id).subscribe({
      next: (res) => {
        this.tv = res;
      }
    })
  }

  getImages() {
    this._TvService.getImagesTvById(this.tv.id).subscribe({
      next: (res) => {
        this.tvImages = res;
      }
    })
  }

  getCredits() {
    this._TvService.getCreditsTvById(this.tv.id).subscribe({
      next: (res) => {
        this.tvCredit = res;
      }
    })
  }

  getRecommendations() {
    this._TvService.getRecommendationsTvById(this.tv.id).subscribe({
      next: (res) => {
        this.tvRecommendations = res;
      }
    })
  }

  getSimilar() {
    this._TvService.getSimilarTvById(this.tv.id).subscribe({
      next: (res) => {
        this.tvSimilar = res;
      }
    })
  }


}
