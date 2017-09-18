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
  private menuItemsArray: any[] = [ 
       {"title":"My users","link":"about.component.html"},
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
    console.log(item);
  }

  constructor(public http:Http) {
    http.get('package.json').map(res => {
      this.myStuff = res.json();
      this.title = this.myStuff.description;
    }).subscribe(stuff =>this.myStuff = stuff);
    console.log('Yes, I am here', this.myStuff);
   }

  ngOnInit() {
  }

}
