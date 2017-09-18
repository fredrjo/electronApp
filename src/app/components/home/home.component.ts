import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = `App works !`;
  myStuff : any = '<p>Hello</p>';

  constructor(public http:Http, private router:Router) {
    http.get('package.json').map(res => {
      this.myStuff = res.json();
      this.title = this.myStuff.description;
    }).subscribe(stuff =>this.myStuff = stuff);
    console.log('Yes, I am here', this.myStuff);
   }

  ngOnInit() {
  }

}
