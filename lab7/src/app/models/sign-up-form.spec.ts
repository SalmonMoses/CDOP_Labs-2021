import { SignUpForm } from './sign-up-form';

describe('SignUpForm', () => {
  it('should create an instance', () => {
    expect(new SignUpForm()).toBeTruthy();
  });

  it('login should be required', () => {
    const form = new SignUpForm();
    expect(form.loginIsNotEmpty()).toBeFalse();
    form.login = 'Hello';
    expect(form.loginIsNotEmpty()).toBeTruthy();
  });

  it('login can contain only latin letters, numbers and underscore', () => {
    const form = new SignUpForm();
    form.login = 'salmonmoses_2002';
    expect(form.validateLogin()).toBeTruthy();
    form.login = '@salmonmoses';
    expect(form.validateLogin()).toBeFalse();
  });

  it('email should be required', () => {
    const form = new SignUpForm();
    expect(form.emailIsNotEmpty()).toBeFalse();
    form.email = 'email@example.com';
    expect(form.emailIsNotEmpty()).toBeTruthy();
  });

  it('email should be valid email', () => {
    const form = new SignUpForm();
    expect(form.validateEmail()).toBeFalse();
    form.email = 'email';
    expect(form.validateEmail()).toBeFalse();
    form.email = 'email@example';
    expect(form.validateEmail()).toBeFalse();
    form.email = 'email@.com';
    expect(form.validateEmail()).toBeFalse();
    form.email = '@example.com';
    expect(form.validateEmail()).toBeFalse();
    form.email = 'email@example.com';
    expect(form.validateEmail()).toBeTruthy();
  });

  it('password should be required', () => {
    const form = new SignUpForm();
    expect(form.passwordIsNotEmpty()).toBeFalse();
    form.password = 'helloworld12345';
    expect(form.passwordIsNotEmpty()).toBeTruthy();
  });

  it('repeated password should be required', () => {
    const form = new SignUpForm();
    expect(form.repeatedPasswordIsNotEmpty()).toBeFalse();
    form.repeatedPassword = 'helloworld12345';
    expect(form.repeatedPasswordIsNotEmpty()).toBeTruthy();
  });

  it('passwords should be valid only when password and repeated password are equal', () => {
    const form = new SignUpForm();
    expect(form.validatePassword()).toBeFalse();
    form.password = 'hello';
    expect(form.validatePassword()).toBeFalse();
    form.repeatedPassword = 'hell';
    expect(form.validatePassword()).toBeFalse();
    form.repeatedPassword = 'hello';
    expect(form.validatePassword()).toBeTruthy();
  });

  it('phone must be empty or valid Ukrainian phone number', () => {
    const form = new SignUpForm();
    expect(form.validatePhone()).toBeTruthy();
    form.phone = '+380950593703';
    expect(form.validatePhone()).toBeTruthy();
    form.phone = '0950593703';
    expect(form.validatePhone()).toBeTruthy();
    form.phone = '+38095059';
    expect(form.validatePhone()).toBeFalse();
    form.phone = '+381950593703';
    expect(form.validatePhone()).toBeFalse();
    form.phone = '+0950593703';
    expect(form.validatePhone()).toBeFalse();
  });

  it('about me should be required', () => {
    const form = new SignUpForm();
    expect(form.aboutMeIsNotEmpty()).toBeFalse();
    form.aboutMe = 'Hello to all!';
    expect(form.aboutMeIsNotEmpty()).toBeTruthy();
  });
});
