import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'posts', component: PostsComponent },
  { path: '**', redirectTo: '' }
];
