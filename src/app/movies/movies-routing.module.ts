import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesListComponent} from './movies-list/movies-list.component';
import {MoviesAddComponent} from './movies-add/movies-add.component';
import {MoviesDetailComponent} from './movies-detail/movies-detail.component';

const routes: Routes = [
  {path: '', component: MoviesListComponent},
  {path: 'add', component: MoviesAddComponent},
  {path: ':id', component: MoviesDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {
}
