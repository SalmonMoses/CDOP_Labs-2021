import { FormControl, FormGroup } from '@angular/forms';

export class SignUpForm {
  private loginRegex = /^[a-zA-Z0-9_]+$/;
  private emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  private phoneRegex = /^([+]38)?0[0-9]{9}$/;

  public login = '';
  public password = '';
  public repeatedPassword = '';
  public email = '';
  public phone = '';
  public aboutMe = '';
  public getNewsletter = false;

  public loginIsNotEmpty() {
    return this.login.length > 0;
  }

  public validateLogin(): boolean {
    return this.loginRegex.test(this.login);
  }

  public emailIsNotEmpty() {
    return this.email.length > 0;
  }

  public validateEmail(): boolean {
    return this.emailRegex.test(this.email);
  }

  public passwordIsNotEmpty(): boolean {
    return this.password.length > 0;
  }

  public repeatedPasswordIsNotEmpty(): boolean {
    return this.repeatedPassword.length > 0;
  }

  public validatePassword(): boolean {
    return this.passwordIsNotEmpty() && this.repeatedPasswordIsNotEmpty() && this.password === this.repeatedPassword;
  }

  public validatePhone(): boolean {
    return this.phone.length == 0 || this.phoneRegex.test(this.phone);
  }

  public aboutMeIsNotEmpty(): boolean {
    return this.aboutMe.length > 0;
  }

  public validate(): boolean {
    return this.loginIsNotEmpty()
      && this.validateLogin()
      && this.emailIsNotEmpty()
      && this.validateEmail()
      && this.validatePassword()
      && this.validatePhone()
      && this.aboutMeIsNotEmpty();
  }

  public getReactiveForm(): FormGroup {
    return new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
      repeatPassword: new FormControl(),
      email: new FormControl(''),

    })
  }
}

export class SignUpValidationResults {
  constructor(public login = '',
              public password = '',
              public repeatedPassword = '',
              public email = '',
              public phone = '',
              public aboutMe = '') {
  }
}
