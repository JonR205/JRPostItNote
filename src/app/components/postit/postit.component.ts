import { Component, OnInit, Input } from '@angular/core';
import { PostItData } from 'src/data/postit';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.css']
})
export class PostitComponent {
 @Input() postit: PostItData|null = null
  constructor() {}
  

}
