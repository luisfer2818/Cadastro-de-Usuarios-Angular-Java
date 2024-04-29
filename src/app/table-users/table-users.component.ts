import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  name: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', email: 'teste@email.com' },
  { id: 2, name: 'Helium', email: 'teste1@gmail.com' },
  { id: 3, name: 'Lithium', email: 'teste2@hotmail.com' },
  { id: 4, name: 'Beryllium', email: 'teste3@hotmail.com' },
  { id: 5, name: 'Boron', email: 'teste4@hotmail.com' },
  { id: 6, name: 'Carbon', email: 'teste@hotmail.com' },
  { id: 7, name: 'Nitrogen', email: 'teste@hotmail.com' },
  { id: 8, name: 'Oxygen', email: 'teste@hotmail.com' },
  { id: 9, name: 'Fluorine', email: 'teste@hotmail.com' },
];

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css'],
})
export class TableUsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
