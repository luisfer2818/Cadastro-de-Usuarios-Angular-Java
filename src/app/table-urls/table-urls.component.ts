import { Component, Input, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { UrlService } from './../services/url.service';

@Component({
  selector: 'app-table-urls',
  templateUrl: './table-urls.component.html',
  styleUrls: ['./table-urls.component.css'],
})
export class TableUrlsComponent implements OnInit {
  listAllUrls!: Observable<any>;
  @Input() recarregarListaUrls: boolean = false;

  displayedColumns: string[] = [
    'id',
    'url_curta',
    'url_original',
    'hash',
    'createdAt',
    'acoes',
  ];

  horizontalPositionMessage: MatSnackBarHorizontalPosition = 'center';
  verticalPositionMessage: MatSnackBarVerticalPosition = 'top';

  constructor(private urlService: UrlService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    if (this.recarregarListaUrls) {
      this.searchUrls();
    }
  }

  searchUrls() {
    this.urlService.getFindAllUrls().subscribe(
      (res) => {
        this.listAllUrls = res;
        console.log('listAllUrls', this.listAllUrls);
      },
      (error) => {
        this.OnErrorMessage(error);
      }
    );
  }

  deletarUrl(hash: string) {
    console.log('hash', hash);
    return this.urlService.getDeleteUrl(hash).subscribe(
      (res) => {
        console.log('res', res);
        this.OnSuccessMessage('Url deletada com sucesso!');
        this.searchUrls();
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
