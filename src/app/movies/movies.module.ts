import { NgModule } from '@angular/core';
import {MoviesDetailComponent} from './movies-detail/movies-detail.component';
import {MoviesAddComponent} from './movies-add/movies-add.component';
import {MoviesService} from './movies.service';
import {SharedModule} from '../shared/shared.module';
import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesListComponent} from './movies-list/movies-list.component';

@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesDetailComponent,
    MoviesAddComponent,
  ],
  imports: [
    MoviesRoutingModule,
    SharedModule
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesModule { }
