import { Component } from '@angular/core';
import { Dog } from 'app/model/dog.model';
import { DogService } from 'app/service/dogservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrl: './add-dog.component.css'
})
export class AddDogComponent {
  newDog: Dog = {
    name: '',
    breed: '',
    gender: '',
    img: '',
    age: 0
  };

  constructor(private dogService: DogService, private router: Router) {}

  addDog() {
    this.dogService.addDog(this.newDog).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => console.error('Error adding dog:', error)
    });
  }
}
