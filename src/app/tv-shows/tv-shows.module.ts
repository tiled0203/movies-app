import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsAddComponent } from './tv-shows-add/tv-shows-add.component';
import { TvShowsListComponent } from './tv-shows-list/tv-shows-list.component';
import { TvShowsDetailComponent } from './tv-shows-detail/tv-shows-detail.component';
import {TvShowsService} from './tv-shows.service';
import {SharedModule} from '../shared/shared.module';
import {TvShowsRoutingModule} from './tv-shows-routing.module';



@NgModule({
  declarations: [
    TvShowsAddComponent,
    TvShowsListComponent,
    TvShowsDetailComponent],
  imports: [
    SharedModule,
    TvShowsRoutingModule
  ],
  providers: [
    TvShowsService
  ]
})
export class TvShowsModule { }
