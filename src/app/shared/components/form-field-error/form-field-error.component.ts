import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  template: `<mat-error>{{ errorMessage }}</mat-error>`,
  styleUrls: ['./form-field-error.component.css'],
})
export class FormFieldErrorComponent implements OnInit {
  @Input('formControl')
  formControl!: FormControl;

  constructor() {}

  ngOnInit(): void {}

  public get errorMessage(): string | null {
    if (this.mustShowErrorMesssage()) return this.getErrorMessage();
    else return null;
  }

  private mustShowErrorMesssage(): boolean {
    return this.formControl.invalid && this.formControl.touched;
  }

  private getErrorMessage(): string | null {
    if (this.formControl.errors?.['required']) return 'campo obrigatório';
    else if (this.formControl.errors?.['email']) {
      return 'formato de e-mail inválido';
    } else if (this.formControl.errors?.['minLength']) {
      const requiredMinLength =
        this.formControl.errors?.['minLength'].requiredMinLength;
      return `deve ter no minimo ${requiredMinLength} caracteres`;
    } else if (this.formControl.errors?.['maxLength']) {
      const requiredMaxLength =
        this.formControl.errors?.['maxLength'].requiredMaxLength;
      return `deve ter no minimo ${requiredMaxLength} caracteres`;
    } else {
      return null;
    }
  }
}
