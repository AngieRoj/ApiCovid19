import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DataCovid19Component } from './data-covid19/data-covid19.component';
import { FooterComponent } from './footer/footer.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [NavbarComponent, DataCovid19Component, FooterComponent],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports:[
    NavbarComponent,
    DataCovid19Component,
    FooterComponent,
    MatPaginatorModule
  ]
})
export class ComponentsModule { }
