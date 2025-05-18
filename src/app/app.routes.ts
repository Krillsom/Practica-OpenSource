import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';
import {RatingComponent} from './public/pages/rating/rating.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'rating', component: RatingComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'}
];
