import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFormComponent } from './sign-up-form.component';

describe('SignUpFormComponent', () => {
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submit button should be disabled only if the form is invalid', () => {
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('#submit-button');
    expect(button.disabled).toBeTruthy();
    component.formModel.login = 'salmonmoses';
    component.formModel.email = 'salmon@google.com';
    component.formModel.password = 'qwerty';
    component.formModel.repeatedPassword = 'qwerty';
    component.formModel.aboutMe = 'About me';
    fixture.detectChanges();
    expect(button.disabled).toBeFalse();
  });

  it('login error should indicate that login is empty', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('#login-error').textContent).toBe('login is required');
    component.formModel.login = '@!';
    fixture.detectChanges();
    expect(nativeElement.querySelector('#login-error').textContent).toBe('login can contain only latin letters, numbers and underscore');
    component.formModel.login = 'salmonmoses';
    fixture.detectChanges();
    expect(nativeElement.querySelector('#login-error')).toBeFalsy();
  });

  it('password error should indicate that password is empty', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('#password-error')).toBeDefined();
    component.formModel.password = 'salmonmoses';
    fixture.detectChanges();
    expect(nativeElement.querySelector('#password-error')).toBeFalsy();
  });

  it('repeated password error should indicate that password and repeated password are different', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('#repeat-password-error')).toBeFalsy();
    component.formModel.password = 'salmonmoses';
    component.formModel.repeatedPassword = 'salmonmoses';
    fixture.detectChanges();
    expect(nativeElement.querySelector('#repeat-password-error')).toBeFalsy();
    component.formModel.repeatedPassword = 'salmon';
    fixture.detectChanges();
    expect(nativeElement.querySelector('#repeat-password-error')).toBeDefined();
  });

  it('email error should indicate that email is empty or invalid', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('#email-error').textContent).toBe('email is required');
    component.formModel.email = 'salmonmoses';
    fixture.detectChanges();
    expect(nativeElement.querySelector('#email-error').textContent).toBe('invalid email');
    component.formModel.email = 'salmonmoses@example.com';
    fixture.detectChanges();
    expect(nativeElement.querySelector('#email-error')).toBeFalsy();
  });

  it('phone error should indicate that phone is invalid', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('#phone-error')).toBeFalsy();
    component.formModel.phone = '+38+095';
    fixture.detectChanges();
    expect(nativeElement.querySelector('#phone-error').textContent).toBe('invalid phone');
    component.formModel.phone = '+380953856489';
    fixture.detectChanges();
    expect(nativeElement.querySelector('#phone-error')).toBeFalsy();
  });

  it('about me error should indicate that about me is empty', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('#about-me-error')).toBeDefined();
    component.formModel.aboutMe = 'About Me';
    fixture.detectChanges();
    expect(nativeElement.querySelector('#about-me-error')).toBeFalsy();
  });

  it('on submit there must be alert from browser', () => {
    const nativeElement = fixture.nativeElement;
    const alertSpy = spyOn(window, 'alert');
    const button = nativeElement.querySelector('#submit-button');
    expect(button.disabled).toBeTruthy();
    component.formModel.login = 'salmonmoses';
    component.formModel.email = 'salmon@google.com';
    component.formModel.password = 'qwerty';
    component.formModel.repeatedPassword = 'qwerty';
    component.formModel.aboutMe = 'About me';
    fixture.detectChanges();
    fixture.componentInstance.handleSubmit();
    expect(alertSpy).toHaveBeenCalledTimes(1);
  })
});
