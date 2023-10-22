import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  { path: '', redirectTo: 'tv/airing_today', pathMatch: 'full' },
  { path: 'tv/:tvType', component: TvComponent, title: 'Tv Series' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvRoutingModule { }
