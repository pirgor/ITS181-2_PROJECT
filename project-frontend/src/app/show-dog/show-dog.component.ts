import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Dog } from 'app/model/dog.model';
import { DogService } from 'app/service/dogservice.service';

@Component({
  selector: 'app-show-dog',
  templateUrl: './show-dog.component.html',
  styleUrl: './show-dog.component.css'
})
export class ShowDogComponent {
  dog: Dog = new Dog()

  constructor(private route: ActivatedRoute, private dogService: DogService) {
    console.log('entered constructor' + this.dog.name)
  }

  ngOnInit(): void {
    console.log('entered oninit' + this.dog.name)
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = params['id'];
        console.log('Id ' + id)
        this.dogService.getDog(id).subscribe((data: Dog) => { this.dog = data });
      } else {

      }
    });

  }
}
