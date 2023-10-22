import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from 'src/app/Services/people.service';
import { environment } from "./../../../environments/environment"
import { peopleDetails, peopleImage, peopleMovieCredits, peopleTvCredits } from 'src/app/Models/interfaces';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent {

  constructor(private _PeopleService: PeopleService, private _ActivatedRoute: ActivatedRoute) { }

  baseImageURL = environment.baseImageURL
  people: peopleDetails = {} as peopleDetails;
  peopleImages: peopleImage = {} as peopleImage;
  peopleMovieCredit: peopleMovieCredits = {} as peopleMovieCredits;
  peopleTvCredit: peopleTvCredits = {} as peopleTvCredits;

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
      this.people.id = Number(paramMap.get('id')!);
      this.getpeople();
      this.getImages();
      this.getMovieCredits();
      this.getTvCredits();
    });
  }

  getpeople() {
    this._PeopleService.getPeopleById(this.people.id).subscribe({
      next: (res) => {
        this.people = res;
      }
    })
  }

  getImages() {
    this._PeopleService.getImagesPeopleById(this.people.id).subscribe({
      next: (res) => {
        this.peopleImages = res;
      }
    })
  }

  getMovieCredits() {
    this._PeopleService.getMovieCreditsPeopleById(this.people.id).subscribe({
      next: (res) => {
        this.peopleMovieCredit = res;
      }
    })
  }

  getTvCredits() {
    this._PeopleService.getTvCreditsPeopleById(this.people.id).subscribe({
      next: (res) => {
        this.peopleTvCredit = res;
      }
    })
  }
}
