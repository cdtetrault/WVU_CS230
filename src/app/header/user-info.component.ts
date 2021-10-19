import { HttpClient } from "@angular/common/http";
<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.service";

=======
import { Component,Injectable, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";
@Injectable()
>>>>>>> 2d27afb653184d103da8dae341da1d6247344f54

@Component({
    selector:'user-info',
    templateUrl: 'user-info.component.html'
})

export class UserInfoComponent implements OnInit{
    myInfo:UserInfo | undefined;


    constructor(private http:HttpClient){
    }
    ngOnInit(): void {
        console.log("Sending get request to server");
        //this.getUserInfo();

        console.log("Showing data");
        this.showUserInfo();
    }

    getUserInfo(){
        return this.http.get<UserInfo>("https://tumblr-3a8a4-default-rtdb.firebaseio.com/my-info.json");
    }
 
    showUserInfo(){
        this.getUserInfo().subscribe((data:UserInfo)=>{
            console.log(data);
            this.myInfo=data;
        })
    }
}