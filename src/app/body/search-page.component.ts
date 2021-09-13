import { Component } from "@angular/core";
import { mock_post } from "./mock_post";
import { PostCard } from "./post-card.model";

@Component({
    selector:'search-page',
    templateUrl: 'search-page.component.html',
    styleUrls: ['search-page.component.css']
})

export class SearchPageComponent {
    title = "For you";
    trending= "Trending"
    picks= "Staff Picks"
    more="More"
    postCard: PostCard[]=[];
    constructor(){
        for (var username of mock_post)
        this.postCard.push(new PostCard(username));
        
    }
}