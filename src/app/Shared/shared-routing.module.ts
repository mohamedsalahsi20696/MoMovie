import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';

const routes: Routes = [
  { path: 'MovieDetails/:id', component: MovieDetailsComponent, title: 'Movie Details' },
  { path: 'TvDetails/:id', component: TvDetailsComponent, title: 'TV Details' },
  { path: 'PeopleDetails/:id', component: PeopleDetailsComponent, title: 'People Details' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
