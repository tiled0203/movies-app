import { Component, OnInit } from '@angular/core';
import {Movie} from '../../model/movie.model';
import {MoviesService} from '../movies.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  movie: Movie;

  constructor(private movieService: MoviesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.movieService.getMovie(this.route.snapshot.paramMap.get('id'))
      .subscribe((m: Movie) => {
        this.movie = m;
      });
  }

  deleteMovie(): void {
    this.movieService.deleteMovie(this.movie.id).subscribe(() => {
      console.log(this.movie.id);
      this.router.navigate(['/movies']);
    });
  }

}
