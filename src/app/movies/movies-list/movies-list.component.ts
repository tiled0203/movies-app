import { Component, OnInit } from '@angular/core';
import {Movie} from '../../model/movie.model';
import {MoviesService} from '../movies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];
  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((m: Movie[]) => {
      this.movies = m;
      console.log(m);
    });
  }
  onClick(id: any): void {
    this.router.navigate(['/movies/' + id]);
  }
}
