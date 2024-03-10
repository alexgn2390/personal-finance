import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoadingController, NavController} from "@ionic/angular";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  regForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required, Validators.pattern(/[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)]]
  })

  constructor(private fb: FormBuilder,
              private loadingCtrl: LoadingController,
              private authService: AuthService,
              private router: Router,
              private _snackBar: MatSnackBar,
              private navCtrl: NavController,
              private location: Location) {
  }

  ngOnInit() {

  }

  goBack() {
    this.navCtrl.pop();
  }

  goForward() {
    this.navCtrl.navigateForward('/login', {
      animationDirection: 'forward',
    });
  }

  get errorControl() {
    return this.regForm?.controls;
  }

  signUp() {
    if (this.regForm.valid && this.regForm.value.fullName && this.regForm.value.email && this.regForm.value.password) {
      this.authService.registerUser(this.regForm.value.email, this.regForm.value.password)
        .subscribe({
          next: (data) => {
            this._snackBar.open('Вы успешно зарегистрировались');
            this.router.navigate(['/home'])
          },
          error: (errorResponse) => {
            if (errorResponse.error && errorResponse.error.message) {
              this._snackBar.open(errorResponse.error.message)
            } else {
              this._snackBar.open('Ошибка регистрации')
            }
          }
        })
    }  else {
      // В случае невалидной формы, открываем Snackbar с сообщением
      this._snackBar.open('Пожалуйста, заполните все обязательные поля корректно');
    }
  }


  // async signUp() {
  //   const loading = await this.loadingCtrl.create();
  //   await loading.present();
  //   if (this.regForm.valid && this.regForm.value.email && this.regForm.value.password) {
  //     const user = await this.authService.registerUser(this.regForm.value.email, this.regForm.value.password).catch((error) => {
  //       console.log(error);
  //       loading.dismiss()
  //     })
  //
  //     if (user) {
  //       loading.dismiss()
  //       this.router.navigate(['/home'])
  //     } else {
  //       console.log('provide correct value')
  //     }
  //   }
  // }

}
