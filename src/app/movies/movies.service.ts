import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../model/movie.model';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiUrl}/movies`);
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${environment.apiUrl}/movies/${id}`);
  }

  addMovie(onlineId: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/movies`, {appId: onlineId});
  }

  lookUpMovie(title: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/movies/search`,
      {params: {title, online: 'true', public: 'true'}});
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/movies/${id}`);
  }

}
