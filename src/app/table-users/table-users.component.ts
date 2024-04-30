import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { listUsers } from '../models/users';
import { UsuarioService } from './../services/usuario.service';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css'],
})
export class TableUsersComponent implements OnInit {
  listAllUsers: Observable<listUsers> | any;

  displayedColumns: string[] = ['id', 'nome', 'email', 'actions'];

  horizontalPositionMessage: MatSnackBarHorizontalPosition = 'center';
  verticalPositionMessage: MatSnackBarVerticalPosition = 'top';

  constructor(
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.searchUsers();
  }

  searchUsers() {
    this.usuarioService.getFindAllUsers().subscribe(
      (res) => {
        this.listAllUsers = res;
        console.log('listAllUsers', this.listAllUsers);
      },
      (error) => {
        this.OnErrorMessage(error);
      }
    );
  }

  deleteUsers(id: number) {
    return this.usuarioService.getDeleteUsers(id).subscribe(
      (res) => {
        this.listAllUsers = this.listAllUsers.filter((item: { id: number }) => {
          this.OnSuccessMessage('Usuário deletado com sucesso!');
          return id !== item.id;
        });
      },
      (error) => {
        this.OnErrorMessage(error);
      }
    );
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
