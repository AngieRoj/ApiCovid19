import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DataCovid19Component } from './data-covid19/data-covid19.component';



@NgModule({
  declarations: [NavbarComponent, DataCovid19Component],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    DataCovid19Component
  ]
})
export class ComponentsModule { }
