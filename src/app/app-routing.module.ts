import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FollowingComponent } from './body/following.component';
import { LikesComponent } from './body/likes.component';
import { SearchPageComponent } from './body/search-page.component';
import { YourLibraryComponent } from './body/your-library.component';
import { LayoutMainComponent } from './homepage/layout-main.component';


const routes: Routes = [
  {path: 'home', component: LayoutMainComponent},
  {path: 'search-page', component: SearchPageComponent},
  {path: 'your-library', component: YourLibraryComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'likes', component: LikesComponent},
  {path: 'following', component: FollowingComponent}
];

@NgModule({
  imports: [[RouterModule.forRoot(routes)]],
  exports: [RouterModule]
})
export class AppRoutingModule { }
