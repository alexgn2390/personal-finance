import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"personal-finance-742c9","appId":"1:898143746087:web:8e43a39fd69b1d1295f602","storageBucket":"personal-finance-742c9.appspot.com","apiKey":"AIzaSyAGo2gVnqeah5nw12Z8XqhxkE2dcPh7eJ4","authDomain":"personal-finance-742c9.firebaseapp.com","messagingSenderId":"898143746087","measurementId":"G-KF6C9VJ85M"})), provideAuth(() => getAuth())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
