import { Component } from "@angular/core";
import { UserInfo } from "../header/user-info.model";
import { UserInfoComponent } from "../header/user-info.component";
import { UserInfoService } from "../header/user-info.service";
import { DatabaseService } from "./database.service";

@Component({
    selector:'edit-user-info',
    templateUrl: 'edit-user-info.component.html',
})

export class EditUserInfoComponent {
 constructor(private infoService:UserInfoService, private dbService:DatabaseService){
    this.dbService.showData();
 }

 onEditUserInfo(data: UserInfo){
    //  console.log("Submit button clicked");
    // console.log(data);
    this.infoService.editUserInfo(data).subscribe((data)=>{
        console.log("Data posted successfully");
        console.log(data);
    })
 }
}