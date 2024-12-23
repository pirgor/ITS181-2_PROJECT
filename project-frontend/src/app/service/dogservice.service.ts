import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dog } from 'app/model/dog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  apiUrl: string
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:18080/api';
  }

  public getDog(id: number | string): Observable<Dog> {
    return this.http.get<Dog>(this.apiUrl + '/adopt/' + id.toString());
  }

  public getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiUrl + '/dogs/');
  }

  public addDog(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(this.apiUrl + '/add-dog', dog);
  }

  public editDog(dog: Dog): Observable<Dog> {
    return this.http.put<Dog>(this.apiUrl + '/update/' + dog.id, dog);
  }

  public deleteDog(dog: Dog): Observable<Dog> {
    return this.http.delete<Dog>(this.apiUrl + '/delete/' + dog.id);
  }

}
