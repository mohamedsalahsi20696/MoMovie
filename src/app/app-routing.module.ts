import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { NotFoundComponent } from './Home/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  {
    path: 'movies',
    loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule)
  },
  {
    path: 'tvSeries',
    loadChildren: () => import('./tv/tv.module').then(m => m.TvModule)
  },
  {
    path: 'trendings',
    loadChildren: () => import('./trending/trending.module').then(m => m.TrendingModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./people/people.module').then(m => m.PeopleModule)
  },
  {
    path: 'shared',
    loadChildren: () => import('./Shared/shared.module').then(m => m.SharedModule)
  },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
