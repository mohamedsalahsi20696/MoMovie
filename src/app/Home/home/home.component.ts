import { Component, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { movieType, peopleType, tvType } from 'src/app/Models/enums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  fontStyleControl = new FormControl('');
  movieType?: string = movieType.now_playing;
  TvType?: string = tvType.airing_today;
  peopleType?: string = peopleType.popular;

  choiceMovieType(type: any) {
    this.movieType = type.target.value
  }

  choiceTvType(type: any) {
    this.TvType = type.target.value
  }

  choicePeopleType(type: any) {
    this.TvType = type.target.value
  }
}
