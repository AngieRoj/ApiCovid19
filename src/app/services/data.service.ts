import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  urlApi = 'https://api.covid19api.com/summary';

  //Inject module
  constructor(private http: HttpClient) { }

  getAllInfectedCountries(){
    let header = new HttpHeaders().set('Type-content', 'aplicacion/json');

    //set and retur the data
    return this.http.get(this.urlApi, {
      headers: header
    })
  }
}
