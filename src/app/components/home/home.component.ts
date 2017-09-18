import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router';
import { ConnectService} from '../../providers/connect.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = `App works !`;
  items : any;

  constructor(public http:Http, private router:Router, private connect:ConnectService) {
    
   }

  ngOnInit() {
    this.connect.getResource('/api/app').then(response => {
      if (this.items == null) {
        this.items = response.content;
        
      }
    });
  }

}
