import { Component } from '@angular/core';
import { Dog } from 'app/model/dog.model';
import { DogService } from 'app/service/dogservice.service';

@Component({
  selector: 'app-show-dogs',
  templateUrl: './show-dogs.component.html',
  styleUrl: './show-dogs.component.css'
})
export class ShowDogsComponent {
  dogs: Dog[] = []
  constructor(private dogService: DogService){}
  
  ngOnInit(): void{
    this.dogService.getDogs().subscribe((data: Dog[]) => {this.dogs = data});
  }
}
