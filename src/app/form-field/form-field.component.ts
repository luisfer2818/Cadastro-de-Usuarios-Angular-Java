import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { UsuarioService } from './../services/usuario.service';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent {
  hide = true;
  horizontalPositionMessage: MatSnackBarHorizontalPosition = 'center';
  verticalPositionMessage: MatSnackBarVerticalPosition = 'top';

  constructor(
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar
  ) {}

  formUser = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
    confirmacaoSenha: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
  });

  submitForm() {
    if (this.formUser.valid) {
      console.log('formUser', this.formUser.value);
      this.usuarioService.getSaveUsers(this.formUser.value).subscribe(
        (res) => {
          this.OnSuccessMessage('Usuário salvo com sucesso!');
        },
        (error) => {
          this.OnErrorMessage(error);
        }
      );
    }
  }

  private OnErrorMessage(error: any) {
    console.log('error', error);
    this.snackBar.open(error.error.error, '', {
      duration: 5000,
      horizontalPosition: this.horizontalPositionMessage,
      verticalPosition: this.verticalPositionMessage,
    });
  }

  private OnSuccessMessage(message: string) {
    this.snackBar.open(message, '', {
      duration: 5000,
      horizontalPosition: this.horizontalPositionMessage,
      verticalPosition: this.verticalPositionMessage,
    });
  }
}
