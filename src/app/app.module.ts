import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import {environment} from "../environments/environment";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"personal-finance-742c9","appId":"1:898143746087:web:8e43a39fd69b1d1295f602","storageBucket":"personal-finance-742c9.appspot.com","apiKey":"AIzaSyAGo2gVnqeah5nw12Z8XqhxkE2dcPh7eJ4","authDomain":"personal-finance-742c9.firebaseapp.com","messagingSenderId":"898143746087","measurementId":"G-KF6C9VJ85M"})), provideAuth(() => getAuth())],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 9999999}},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
