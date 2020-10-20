import {Component, OnInit} from '@angular/core';
import {Movie} from '../../model/movie.model';
import {MoviesService} from '../movies.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];
  isPublic = false;

  constructor(private movieService: MoviesService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  onClick(id: any): void {
    this.router.navigate(['/movies/' + id]);
  }

  // load movies when pub/priv switch changes
  loadMovies(): void {
    this.movieService.getMovies(this.isPublic).subscribe((m: Movie[]) => {
      this.movies = m;
    });
  }
}
