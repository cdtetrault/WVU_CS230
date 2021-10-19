import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { mock_post } from "./mock_post";
import { SearchPageService } from "./search-page.service";
import { PostCard } from "./post-card.model";
import { SearchPage } from "./search-page.model";

var data = {
    post1:{
        username:"tumblrPosts",
        ProfilePic:"profilePic",
        ImagePath:"./assets/flowers.jpg",
        caption:"whatever caption you want",
        mediaBar:"bar on the bottom with icons"
    },
    post2:{
        username:"tumblrPosts",
        ProfilePic:"profilePic",
        ImagePath:"./assets/flowers.jpg",
        caption:"whatever caption you want",
        mediaBar:"bar on the bottom with icons"
    }
}

@Component({
    selector:'search-page',
    templateUrl: 'search-page.component.html',
    styleUrls: ['search-page.component.css']
})

export class SearchPageComponent implements OnInit{
    title = "For you";
    trending= "Trending"
    picks= "Staff Picks"
    more="More"

    postCard: PostCard[]=[];
    posts:SearchPage | undefined;

    constructor(private SearchPageService:SearchPageService){
        console.log(data);
        for(var item in data){
            console.log(item);
        }

        for (var username of mock_post)
        this.postCard.push(new PostCard(username));
        
    }
    ngOnInit(): void {
        console.log("Showing data");
        this.showUserInfo;
        this.SearchPageService.editUserInfo().subscribe(data =>{
            console.log(data);
        })
       // this.showSearchPage();
    }
    showUserInfo(){
        this.SearchPageService.getSearchPage().subscribe((data:SearchPage)=>{
            console.log(data);
            this.posts=data;
            for(var item in data){
                console.log(data);
            }
            //this.myInfo=data;
        })
    }
    
}