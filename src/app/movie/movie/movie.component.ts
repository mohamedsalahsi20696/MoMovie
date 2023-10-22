import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieList } from 'src/app/Models/interfaces';
import { MovieService } from 'src/app/Services/movie.service';
import { environment } from "./../../../environments/environment"

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  page: number = 1;
  limit: number = 0;
  count: number = 0;

  movieType: string = "";
  data: movieList = {} as movieList;
  baseImageURL = environment.baseImageURL

  progress: number = 0;
  noOfFiles: number = 13;
  completed: boolean = false;

  constructor(private _MovieService: MovieService, private _ActivatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap) => {
      this.movieType = paramMap.get('movieType')!;
      this.getMovie(1);
    });
  }

  getMovie(numberOfPages: number) {
    this._MovieService.getAllMovieLists(this.movieType, numberOfPages)
      .pipe()
      .subscribe({
        next: (res) => {
          this.data = res;
          this.page = res.page;
          this.count = res.total_results;
        }
      })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getMovie(this.page);
  }
}
