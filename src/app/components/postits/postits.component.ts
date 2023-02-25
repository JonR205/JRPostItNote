import { Component} from '@angular/core';
import { PostItData } from 'src/data/postit';

@Component({
  selector: 'app-postits',
  templateUrl: './postits.component.html',
  styleUrls: ['./postits.component.css']
})
export class PostitsComponent {
  public postits : PostItData[]=[
    new PostItData("title1","message1","owner1"),
    new PostItData("title2","message2","owner2")
  ]
  constructor() { }

}
