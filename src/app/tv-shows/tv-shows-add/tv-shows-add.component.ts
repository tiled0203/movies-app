import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TvShow} from '../../model/tvshow.model';
import {TvShowsService} from '../tv-shows.service';

@Component({
  selector: 'app-tv-shows-add',
  templateUrl: './tv-shows-add.component.html',
  styleUrls: ['./tv-shows-add.component.css']
})
export class TvShowsAddComponent implements OnInit {
  tvShows: TvShow[];
  constructor(private route: ActivatedRoute, private tvShowsService: TvShowsService) {
  }

  ngOnInit(): void {
  }

  search(input: string): void {
    console.log(input);
    this.tvShowsService.lookUpTvShow(input).subscribe(res => {
      this.tvShows = res;
    });
  }

  save(tvShow: TvShow): void {
    this.tvShowsService.addTvShow(tvShow).subscribe(res => {
      console.log('movie added!');
      console.log(res);
    });
  }
}
