import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "./../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseURL = environment.baseURL
  private apiKey = environment.apiKey

  constructor(private _HttpClient: HttpClient) {
  }

  getAllMovieLists(urlData: string, numberOfPage?: number): Observable<any> {
    if (numberOfPage == null)
      return this._HttpClient.get(`${this.baseURL}/movie/${urlData}${this.apiKey}`);
    else
      return this._HttpClient.get(`${this.baseURL}/movie/${urlData}${this.apiKey}&page=${numberOfPage}`);
  }

  getMovieById(id: number): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/movie/${id}${this.apiKey}`);
  }

  getImagesMovieById(id: number): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/movie/${id}/images${this.apiKey}`);
  }

  getCreditsMovieById(id: number): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/movie/${id}/credits${this.apiKey}`);
  }

  getRecommendationsMovieById(id: number): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/movie/${id}/recommendations${this.apiKey}`);
  }

  getSimilarMovieById(id: number): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/movie/${id}/similar${this.apiKey}`);
  }
}
