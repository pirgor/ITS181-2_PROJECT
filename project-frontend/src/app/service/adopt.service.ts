import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adopt } from 'app/model/adopt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdoptService {
  private apiUrl = 'http://localhost:18080/api';
  
  constructor(private http: HttpClient){}

  public createAdoption(dogId: number, userId: number): Observable<Adopt> {
    const adopt = { dogId: dogId, userId: userId };
    return this.http.post<Adopt>(this.apiUrl+ '/adopt/', adopt);
  }

}
