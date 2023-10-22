import { Component, OnInit } from '@angular/core';
import { peopleList } from 'src/app/Models/interfaces';
import { environment } from "./../../../environments/environment"
import { PeopleService } from 'src/app/Services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  page: number = 1;
  limit: number = 0;
  count: number = 0;

  peopleType: string = "";
  data: peopleList = {} as peopleList;
  baseImageURL = environment.baseImageURL

  progress: number = 0;
  noOfFiles: number = 13;
  completed: boolean = false;

  constructor(private _PeopleService: PeopleService, private _ActivatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap) => {
      this.peopleType = paramMap.get('peopleType')!;
      this.getPeople(1);
    });
  }

  getPeople(numberOfPages: number) {
    this._PeopleService.getAllPeopleLists(this.peopleType, numberOfPages)
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
    this.getPeople(this.page);
  }
}
