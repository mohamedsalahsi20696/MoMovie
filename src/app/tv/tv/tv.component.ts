import { Component } from '@angular/core';
import { environment } from "./../../../environments/environment"
import { TvService } from 'src/app/Services/tv.service';
import { ActivatedRoute } from '@angular/router';
import { tvList } from 'src/app/Models/interfaces';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {
  page: number = 1;
  limit: number = 0;
  count: number = 0;

  tvType: string = "";
  data: tvList = {} as tvList;
  baseImageURL = environment.baseImageURL

  progress: number = 0;
  noOfFiles: number = 13;
  completed: boolean = false;

  constructor(private _TvService: TvService, private _ActivatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap) => {
      this.tvType = paramMap.get('tvType')!;
      this.getTv(1);
    });
  }


  getTv(numberOfPages: number) {
    this._TvService.getAllTvSeriesLists(this.tvType, numberOfPages)
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
    this.getTv(this.page);
  }
}
