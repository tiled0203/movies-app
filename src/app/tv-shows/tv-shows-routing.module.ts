import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TvShowsListComponent} from './tv-shows-list/tv-shows-list.component';
import {TvShowsAddComponent} from './tv-shows-add/tv-shows-add.component';
import {TvShowsDetailComponent} from './tv-shows-detail/tv-shows-detail.component';

const routes: Routes = [
  {path: '', component: TvShowsListComponent},
  {path: 'add', component: TvShowsAddComponent},
  {path: ':id', component: TvShowsDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvShowsRoutingModule {
}
