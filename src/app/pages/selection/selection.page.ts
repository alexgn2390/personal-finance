import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {AuthService} from "../../service/auth.service";
import {Router, RouterOutlet} from "@angular/router";
import { slideInAnimation } from './animation';
import {animate, style, transition, trigger} from "@angular/animations";
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],

})
export class SelectionPage implements OnInit {

  user = null

  constructor(private authService: AuthService,
              private location: Location,
              private router: Router,
              private navCtrl: NavController) {

  }

  ngOnInit() {

  }

  goBack() {
    this.navCtrl.navigateBack('/landing', {
      animationDirection: 'back',
    });
    // this.navCtrl.pop();
  }

  goForward() {
    this.navCtrl.navigateForward('/signup', {
      animationDirection: 'forward',
    });
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
  }


}
