import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { HttpClientModule } from '@angular/common/http';

var firebaseConfig = {
  apiKey: "AIzaSyDMwQ3gEmm0VuRfVqnsO6LnHaW7zlRKOsU",
  authDomain: "tmrd-c4133.firebaseapp.com",
  databaseURL: "https://tmrd-c4133.firebaseio.com",
  projectId: "tmrd-c4133",
  storageBucket: "tmrd-c4133.appspot.com",
  messagingSenderId: "685877733324",
  appId: "1:685877733324:web:cf342ba6ac102582e01f69",
  measurementId: "G-F60NWN6Q90"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, AngularFireDatabaseModule, AngularFireModule, AngularFireModule.initializeApp(firebaseConfig), IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
