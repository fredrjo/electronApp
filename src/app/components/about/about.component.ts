import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = `App works !`;
  myStuff : any = '<p>Hello</p>';

  constructor(public http:Http) {
   }

  ngOnInit() {
  }

}
