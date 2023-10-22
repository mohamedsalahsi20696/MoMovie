import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  { path: '', redirectTo: 'trending/movie', pathMatch: 'full' },
  { path: 'trending/:trendingType', component: TrendingComponent, title: 'Trending' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingRoutingModule { }
