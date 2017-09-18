import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';
import { ConnectService } from './providers/connect.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdSidenavModule, MdMenuModule, MdButtonModule, MdCardModule, MdIconModule, MdToolbarModule, MdListModule, MdGridListModule} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ToolbarComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdSidenavModule, 
    MdMenuModule, 
    MdButtonModule,
    MdCardModule, 
    MdIconModule,
    MdToolbarModule,
    MdListModule,
    MdGridListModule
  ],
  providers: [ElectronService, ConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
