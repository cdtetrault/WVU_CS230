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
    FollowingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
