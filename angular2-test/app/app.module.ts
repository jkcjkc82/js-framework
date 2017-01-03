import { NgModule }      from '@angular/core';
import { APP_BASE_HREF, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MasterComponent }  from './master.component';
import { DetailComponent }  from './detail.component';

import {AuthService} from './auth.service';
import {DropboxService} from './dropbox.service';

const routes: Routes = [];

@NgModule({
  providers: [
      AuthService,
      DropboxService,
      {provide: APP_BASE_HREF, useValue: '/'},
      HashLocationStrategy
  ],
  imports:      [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(routes, { useHash: false }),
      HttpModule
  ],
  declarations: [ AppComponent, MasterComponent, DetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
