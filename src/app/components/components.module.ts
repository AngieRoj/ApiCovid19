import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DataCovid19Component } from './data-covid19/data-covid19.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [NavbarComponent, DataCovid19Component, FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    DataCovid19Component,
    FooterComponent
  ]
})
export class ComponentsModule { }
