import { Component } from '@angular/core';
import { environment } from "./../../../environments/environment"
import { TrendingService } from 'src/app/Services/trending.service';
import { ActivatedRoute } from '@angular/router';
import { timeWindow, trendingType } from 'src/app/Models/enums';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent {
  timeWindowType: string = timeWindow.day;

  page: number = 1;
  limit: number = 0;
  count: number = 0;

  trendingType: string = "";
  data: any = {} as any;
  baseImageURL = environment.baseImageURL

  progress: number = 0;
  noOfFiles: number = 13;
  completed: boolean = false;

  isMovie: boolean = false;
  isTv: boolean = false;
  isPeople: boolean = false;

  constructor(private _TrendingService: TrendingService, private _ActivatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap) => {
      this.trendingType = paramMap.get('trendingType')!;
      this.getTrending(1);
    });
  }

  getTrending(numberOfPages: number) {
    console.log(this.trendingType);

    this._TrendingService.getAllTrending(this.trendingType, this.timeWindowType, numberOfPages)
      .pipe()
      .subscribe({
        next: (res) => {
          this.data = res;
          this.page = res.page;
          this.count = res.total_results;
          console.log(this.data.results);

        }
      })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getTrending(this.page);
  }

  choiceTimeWindowType(type: any) {
    this.timeWindowType = type.target.value;
    this.getTrending(this.page);
  }
}

