import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack() {
    // this.navCtrl.navigateBack('/signup', {
    //   animationDirection: 'back',
    // });
    this.navCtrl.pop();
  }

  goForward() {
    this.navCtrl.navigateForward('/signup', {
      animationDirection: 'forward',
    });
  }
}
