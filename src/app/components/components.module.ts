import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DataCovid19Component } from './data-covid19/data-covid19.component';
import { FooterComponent } from './footer/footer.component';
import { PaginatePipe } from './data-covid19/paginate.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [NavbarComponent, DataCovid19Component, FooterComponent, PaginatePipe],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    DataCovid19Component,
    FooterComponent,
    PaginatePipe,
    MatPaginatorModule
  ]
})
export class ComponentsModule { }
