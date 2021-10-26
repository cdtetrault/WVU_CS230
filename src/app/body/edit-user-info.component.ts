import { Component } from "@angular/core";
import { UserInfo } from "../header/user-info.model";
import { UserInfoComponent } from "../header/user-info.component";
import { UserInfoService } from "../header/user-info.service";

@Component({
    selector:'edit-user-info',
    templateUrl: 'edit-user-info.component.html',
})

export class EditUserInfoComponent {
 constructor(private infoService:UserInfoService){

 }

 onEditUserInfo(data: UserInfoComponent){
    //  console.log("Submit button clicked");
    // console.log(data);
    this.infoService.getUserInfo().subscribe((data:UserInfo)=>{
        console.log("Data posted successfully");
        console.log(data);
    })
 }
}