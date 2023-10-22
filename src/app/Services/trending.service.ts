import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "./../../environments/environment"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  private baseURL = environment.baseURL
  private apiKey = environment.apiKey

  constructor(private _HttpClient: HttpClient) {
  }

  getAllTrending(urlData: string, timeWindow: string, numberOfPage?: number): Observable<any> {
    if (numberOfPage == null) {
      console.log(`${this.baseURL}/trending/${urlData}/${timeWindow}${this.apiKey}`);
      return this._HttpClient.get(`${this.baseURL}/trending/${urlData}/${timeWindow}${this.apiKey}`);

    }
    else {
      console.log(`${this.baseURL}/trending/${urlData}/${timeWindow}${this.apiKey}&page=${numberOfPage}`);
      return this._HttpClient.get(`${this.baseURL}/trending/${urlData}/${timeWindow}${this.apiKey}&page=${numberOfPage}`);

    }
  }
}
