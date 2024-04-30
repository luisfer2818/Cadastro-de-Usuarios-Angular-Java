import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

// Components
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';

@NgModule({
  declarations: [FormFieldErrorComponent],
  exports: [FormFieldErrorComponent],
  imports: [CommonModule, MatFormFieldModule],
})
export class SharedModule {}
