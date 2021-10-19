import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SearchPage } from "./search-page.model";

@Injectable({providedIn:'root'})
export class SearchPageService {
    private baseUrl: string ="https://tumblr-3a8a4-default-rtdb.firebaseio.com/my-info.json";
    private myInfoEndpoint:string = 'my-info.json';
    getSearchPage: any;
    constructor(private http: HttpClient){

    }

    getUserInfo(){
        console.log(this.baseUrl= this.myInfoEndpoint);
        return this.http.get<SearchPage []>(this.baseUrl + this.myInfoEndpoint);
     }
    
}