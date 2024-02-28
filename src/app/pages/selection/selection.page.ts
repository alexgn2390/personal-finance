import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})
export class SelectionPage implements OnInit {

  user = null

  constructor(private authService: AuthService,
              private location: Location,
              private router: Router) {

  }

  ngOnInit() {

  }
  goBack() {
    const previousUrl = this.location.getState() as string;
    this.router.navigateByUrl(previousUrl);
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
  }
}
