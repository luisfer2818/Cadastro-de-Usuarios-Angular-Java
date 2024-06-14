import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Url } from '../models/url';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-encurtar-url',
  templateUrl: './encurtar-url.component.html',
  styleUrls: ['./encurtar-url.component.css'],
})
export class EncurtarUrlComponent {
  listUrls!: Observable<Url>;
  listPessoas!: Observable<any>;
  urlOriginal!: string;

  horizontalPositionMessage: MatSnackBarHorizontalPosition = 'center';
  verticalPositionMessage: MatSnackBarVerticalPosition = 'top';

  constructor(private urlService: UrlService, private snackBar: MatSnackBar) {}

  formUrl = new FormGroup({
    originalUrl: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  ngOnInit(): void {
    // this.searchListPessoas();
  }

  searchUrls() {
    this.urlService.getFindAllUrls().subscribe(
      (res) => {
        this.listUrls = res;
        console.log('listAllUrls', this.listUrls);
      },
      (error) => {
        this.OnErrorMessage(error);
      }
    );
  }

  encurtarUrl() {
    console.log('value URL', this.formUrl.value);
    this.urlService.getEncurtarUrl(this.formUrl.value).subscribe(
      (res) => {
        console.log('ADDURL', res);
        this.OnSuccessMessage('Url encurtada com sucesso! --- ' + res.newURL);
        this.searchUrls();
      },
      (error) => {
        this.OnErrorMessage(error);
      }
    );
  }

  searchListPessoas() {
    this.urlService.getFindAllPessoas().subscribe(
      (res) => {
        this.listPessoas = res;
        console.log('listAllUrls', this.listPessoas);
        this.OnSuccessMessage('Pessoas listadas com sucesso!');
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
