import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../model/movie.model';
import {environment} from '../../environments/environment';
import {TvShow} from '../model/tvshow.model';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  constructor(private http: HttpClient) { }

  getTvShows(): Observable<TvShow[]> {
    return this.http.get<TvShow[]>(`${environment.apiUrl}/tvshows`);
  }

  getTvShow(id: string): Observable<TvShow> {
    return this.http.get<TvShow>(`${environment.apiUrl}/tvshows/${id}`);
  }

  addTvShow(tvShow: TvShow): Observable<any> {
    return this.http.post(`${environment.apiUrl}/tvshows`, tvShow);
  }

  lookUpTvShow(title: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/tvshows/search`,
      {params: {title, online: 'true', public: 'true'}});
  }

  deleteTvShow(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/tvshows/${id}`);
  }

}
