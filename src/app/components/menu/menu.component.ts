	
import { Component, ViewChild, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
     selector: 'app-menu',
    template: `
        <md-sidenav-container>
            <md-sidenav #sidenav mode="side" opened="false"></md-sidenav>
        </md-sidenav-container>
       `
})

export class MenuComponent implements OnInit {
    @ViewChild('sidenav') sidenav: MdSidenav;

    constructor() {}

    ngOnInit() {
        this.sidenav.onOpen.subscribe(() => {
            console.log("Sidenav opened");
        });

        setTimeout(this.openSidenav.bind(this), 5000);
    }

    openSidenav() {
        this.sidenav.open();
    }
 }