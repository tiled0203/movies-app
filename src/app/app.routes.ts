import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './core/auth.guard';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'movies', loadChildren: () => import('./movies/movies.module')
      .then(m => m.MoviesModule), canActivate: [AuthGuard]},
  {path: 'tvshows', loadChildren: () => import('./tv-shows/tv-shows.module')
      .then(m => m.TvShowsModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutes{}
