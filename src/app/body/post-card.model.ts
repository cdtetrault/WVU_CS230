export class PostCard{
username:string;
ProfilePic:string;
ImagePath:string;
caption:string;
mediaBar:string;

    constructor({username, ProfilePic, ImagePath, caption, mediaBar}:
        {username:string,ProfilePic:string,ImagePath:string, caption:string, mediaBar:string}
        ){
        this.username= username;
        this.ProfilePic=ProfilePic;
        this.ImagePath=ImagePath;
        this.caption=caption;
        this.mediaBar=mediaBar;

    }
}