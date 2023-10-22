import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: '', redirectTo: 'movie/now_playing', pathMatch: 'full' },
  { path: 'movie/:movieType', component: MovieComponent, title: 'Movie' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
