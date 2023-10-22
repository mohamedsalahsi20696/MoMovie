import { Injectable } from '@angular/core';
import { environment } from "./../../environments/environment"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  private baseURL = environment.baseURL
  private apiKey = environment.apiKey

  constructor(private _HttpClient: HttpClient) {
  }

  getAllTvSeriesLists(urlData: string, numberOfPage?: number): Observable<any> {
    if (numberOfPage == null)
      return this._HttpClient.get(`${this.baseURL}/tv/${urlData}${this.apiKey}`);
    else
      return this._HttpClient.get(`${this.baseURL}/tv/${urlData}${this.apiKey}&page=${numberOfPage}`);
  }

  getTvById(id: number): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/tv/${id}${this.apiKey}`);
  }

  getImagesTvById(id: number): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/tv/${id}/images${this.apiKey}`);
  }

  getCreditsTvById(id: number): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/tv/${id}/credits${this.apiKey}`);
  }

  getRecommendationsTvById(id: number): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/tv/${id}/recommendations${this.apiKey}`);
  }

  getSimilarTvById(id: number): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/tv/${id}/similar${this.apiKey}`);
  }
}
