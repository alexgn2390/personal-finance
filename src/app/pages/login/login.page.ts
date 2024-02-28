import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private location: Location,
              private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    const previousUrl = this.location.getState() as string;
    this.router.navigateByUrl(previousUrl);
  }
}
