import { MoedaService,ConversorService } from './services';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { NumeroDirective } from './directives';

@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective
=======

@NgModule({
  declarations: [
    ConversorComponent
>>>>>>> 9367283d41622cabdbb8f00e1f1954315bb0dc80
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ConversorComponent
  ],
  providers:[
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
