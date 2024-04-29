import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent {
  hide = true;

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(50),
  ]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20),
  ]);
  confirmPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20),
  ]);

  getErrorMessage() {
    if (
      (this.name.hasError('required'),
      this.email.hasError('required'),
      this.password.hasError('required'),
      this.confirmPassword.hasError('required'))
    ) {
      return 'Campo obrigatório!';
    }

    return this.email.hasError('email') ? 'Digite um e-mail válido' : '';
  }
}
