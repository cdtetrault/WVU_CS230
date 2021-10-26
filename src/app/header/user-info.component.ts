//import { HttpClient } from "@angular/common/http";
import { Component,Injectable, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.service";
@Injectable()


@Component({
    selector:'user-info',
    templateUrl: 'user-info.component.html'
})

export class UserInfoComponent implements OnInit{
    myInfo:UserInfo | undefined;


    // constructor(private http:HttpClient){
    // }
    constructor(private infoService:UserInfoService){
    }
    ngOnInit(): void {
        //console.log("Sending get request to server");
        //this.getUserInfo();

        console.log("Showing data");
        this.showUserInfo();
        // this.infoService.editUserInfo().subscribe(data => {
        //     console.log(data);
        // })

        
    }

    // getUserInfo(){
    //     return this.http.get<UserInfo>("https://tumblr-3a8a4-default-rtdb.firebaseio.com/my-info.json");
    // }
 
    showUserInfo(){
        this.infoService.getUserInfo().subscribe((data:UserInfo)=>{
            console.log(data);
            this.myInfo=data;
        })
    }
}