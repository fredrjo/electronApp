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
  private menuItemsArray: any[] = [ 
       {"title":"My users","link":"app-about"},
       {"title": "My buildings","link":"#"},
       {"title":"Messages","link":"#",
       "subItems":[
                   {"title":"Send message","link":"#"},
                   {"title":"Read responses","link":"#"},
                  ]
       },
       {"title":"Setup query","link":"#",
        "subItems":[
                     {"title":"Edit questions","link":"#"},
                     {"title":"Edit users","link":"#"},
                      {"title":"View answers","link":"#"},
                    ]
       },
 ];

  public onMenuClose(){
    console.log("menu closed");
  }
  public onMenuOpen(){
    console.log("menu Opened");
  }
  private onItemSelect(item:any){
    console.log('prepare');
    this.router.navigateByUrl(item.link).then(res => console.log(res, item.link));
  }

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
