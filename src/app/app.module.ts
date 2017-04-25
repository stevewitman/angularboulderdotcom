import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { NavComponent } from './nav/nav.component';
import { SplashComponent } from './splash/splash.component';
import { SlackComponent } from './slack/slack.component';
import { InviteService } from './slack/invite.service'
import { EventsComponent } from './events/events.component';
import { ItemFormComponent } from './items/item-form.component';
import { ItemService } from './items/item.service';

export const firebaseConfig = {
    apiKey: "AIzaSyC0CCTog704R5N5wJN7_8I0ncOk168SY9Y",
    authDomain: "abdc-59710.firebaseapp.com",
    databaseURL: "https://abdc-59710.firebaseio.com",
    projectId: "abdc-59710",
    storageBucket: "abdc-59710.appspot.com",
    messagingSenderId: "333731102581"
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SplashComponent,
    SlackComponent,
    EventsComponent,
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [InviteService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
