import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "./../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseURL = environment.baseURL
  private apiKey = environment.apiKey

  constructor(private _HttpClient: HttpClient) {
  }

  getAllPeopleLists(urlData: string, numberOfPage?: number): Observable<any> {
    if (numberOfPage == null)
      return this._HttpClient.get(`${this.baseURL}/person/${urlData}${this.apiKey}`);
    else
      return this._HttpClient.get(`${this.baseURL}/person/${urlData}${this.apiKey}&page=${numberOfPage}`);
  }

  getPeopleById(id: number): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/person/${id}${this.apiKey}`);
  }

  getImagesPeopleById(id: number): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/person/${id}/images${this.apiKey}`);
  }

  getMovieCreditsPeopleById(id: number): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/person/${id}/movie_credits${this.apiKey}`);
  }

  getTvCreditsPeopleById(id: number): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/person/${id}/tv_credits${this.apiKey}`);
  }

}
