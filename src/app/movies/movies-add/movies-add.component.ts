import { Component, OnInit } from '@angular/core';
import {Movie} from '../../model/movie.model';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {
  movies: Movie[];
  constructor(private route: ActivatedRoute, private movieService: MoviesService) {
  }

  ngOnInit(): void {
  }

  search(input: string): void {
    console.log(input);
    this.movieService.lookUpMovie(input).subscribe(res => {
      this.movies = res;
      console.log(this.movies);
    });
  }

  save(movie: Movie): void {
    this.movieService.addMovie(movie.onlineId).subscribe(res => {
      console.log('movie added!');
      console.log(res);
    });
  }
}
