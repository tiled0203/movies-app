import { Component, OnInit } from '@angular/core';
import {Movie} from '../../model/movie.model';
import {MoviesService} from '../../movies/movies.service';
import {Router} from '@angular/router';
import {TvShow} from '../../model/tvshow.model';
import {TvShowsService} from '../tv-shows.service';

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.css']
})
export class TvShowsListComponent implements OnInit {
  tvShows: TvShow[];
  constructor(private tvShowsService: TvShowsService, private router: Router) { }

  ngOnInit(): void {
    this.tvShowsService.getTvShows().subscribe((tv: TvShow[]) => {
      console.log(tv);
      this.tvShows = tv;
    });
  }
  onClick(id: any): void {
    this.router.navigate(['/tvshows/' + id]);
  }

}
