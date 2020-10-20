import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../model/movie.model';
import { TvShow } from '../../model/tvshow.model';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  @Input() media: Movie | TvShow;

  @Output() selected = new EventEmitter<Movie | TvShow>();
  constructor() {
    console.log('test)');
  }

  ngOnInit(): void {
  }
}
