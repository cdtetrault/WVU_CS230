import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { EditNavBarComponent } from './homepage/edit-nav-bar.component';
import { LayoutMainComponent } from './homepage/layout-main.component';
import { PostsComponent } from './homepage/posts.component';
import { SideNavBarComponent } from './homepage/side-nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchPageComponent } from './body/search-page.component';
import { YourLibraryComponent } from './body/your-library.component';
import { LikesComponent } from './body/likes.component';
import { FollowingComponent } from './body/following.component';
import { PostCardComponent } from './body/post-card.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';




@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    LayoutMainComponent,
    PostsComponent,
    EditNavBarComponent,
    SideNavBarComponent,
    SearchPageComponent,
    YourLibraryComponent,
    LikesComponent,
    FollowingComponent,
    PostCardComponent,
<<<<<<< HEAD
    UserInfoComponent,
    UserInfoComponent,
    SearchPageComponent,
    SearchPageComponent
=======
    UserInfoComponent
>>>>>>> 2d27afb653184d103da8dae341da1d6247344f54
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
