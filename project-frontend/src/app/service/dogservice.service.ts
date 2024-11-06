import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dog } from 'app/model/dog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogserviceService {
  countriesUrl: string
  constructor(private http: HttpClient){
      this.countriesUrl = 'http://localhost:18080/api';
  }

  public getCountry(id: number): Observable<Dog>{
      return this.http.get<Dog>(this.countriesUrl + '/show-country/' + id.toString());     
  }
  
  public getCountries(): Observable<Dog[]>{
      return this.http.get<Dog[]>(this.countriesUrl + '/countries/');
  }
}
