import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFieldComponent } from './form-field/form-field.component';
import { HomeComponent } from './home/home.component';
import { TableUsersComponent } from './table-users/table-users.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'form',
    component: FormFieldComponent,
  },
  {
    path: 'table',
    component: TableUsersComponent,
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
