import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent {
  hide = true;

  formUser = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
  });

  onSubmit() {}

  getErrorMessage() {
    if (
      this.formUser.hasError('required')
      // this.email.hasError('required'),
      // this.password.hasError('required'),
      // this.confirmPassword.hasError('required'))
    ) {
      return 'Campo obrigatório!';
    }

    return this.formUser.hasError('email') ? 'Digite um e-mail válido' : '';
  }
}
