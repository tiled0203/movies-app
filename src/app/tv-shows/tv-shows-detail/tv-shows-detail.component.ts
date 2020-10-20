import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TvShow} from '../../model/tvshow.model';
import {TvShowsService} from '../tv-shows.service';

@Component({
  selector: 'app-tv-shows-detail',
  templateUrl: './tv-shows-detail.component.html',
  styleUrls: ['./tv-shows-detail.component.css']
})
export class TvShowsDetailComponent implements OnInit {
  tvShow: TvShow;

  constructor(private tvShowService: TvShowsService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.tvShowService.getTvShow(this.route.snapshot.paramMap.get('id'))
      .subscribe((tv: TvShow) => {
        this.tvShow = tv;
      });
  }

  deleteTvShow(): void {
    this.tvShowService.deleteTvShow(this.tvShow.id).subscribe(() => {
      console.log(this.tvShow.id);
      this.router.navigate(['/tvshows']);
    });
  }
}
