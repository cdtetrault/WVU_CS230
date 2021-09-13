import { Component, Input } from "@angular/core";


@Component({
    selector:'post-card',
    templateUrl: 'post-card.component.html',
    styleUrls: ['post-card.component.css']
})

export class PostCardComponent {
    @Input()
    username! :string;
    @Input()
    ProfilePic! :string;
    @Input()
    ImagePath! :string;
    @Input()
    caption! :string;
    @Input()
    mediaBar! :string;
}