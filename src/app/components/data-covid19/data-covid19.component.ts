import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-covid19',
  templateUrl: './data-covid19.component.html',
  styleUrls: ['./data-covid19.component.css']
})
export class DataCovid19Component implements OnInit {
  public countries:Array<any>=[];

  constructor(private information: DataService) { }

  ngOnInit(): void {
                                //obtain values for to be published
    this.information.getAllInfectedCountries().subscribe((resp:any) => 
    this.countries=resp.Countries)
  }

}
