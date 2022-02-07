import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  //#region "CreaLoginForm"
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email])
    ),
    pass: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(5)])
    ),
    remind: new FormControl(false)
  },
  {
    updateOn: 'submit'
  }
  );
  //#endregion "CreaLoginForm"

  submitted = false;

  submitLogin() {
    this.submitted = true;
    this.loginForm.controls.email.markAsTouched();
    this.loginForm.controls.pass.markAsTouched();
    if(this.loginForm.valid) {
      console.log('OK');
    }
  }

  isFieldinValid(field: string) {
    return !this.loginForm.get(field).valid && this.submitted;
  }

}
