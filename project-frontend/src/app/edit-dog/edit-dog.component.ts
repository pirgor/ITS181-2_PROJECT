import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Dog } from 'app/model/dog.model';
import { DogService } from 'app/service/dogservice.service';

@Component({
  selector: 'app-edit-dog',
  templateUrl: './edit-dog.component.html',
  styleUrl: './edit-dog.component.css'
})
export class EditDogComponent implements OnInit {

  oldDog: Dog = new Dog();
  newDog: Dog = new Dog();
  dogs: Dog[] = [];
  selectedDog: Dog | null = null;

  constructor(private dogService: DogService) { }


  ngOnInit(): void {
    this.dogService.getDogs().subscribe((dogs) => this.dogs = dogs);
  }


  set selectedDogId(id: number) {
    console.log('Id' + id);
    this.selectedDogId = id;
    this.selectedDog = this.dogs.find(dog => dog.id === this.selectedDogId) || null;
  }

  editDog() {
    if (this.newDog.name && this.newDog.breed && this.newDog.gender && this.newDog.img && this.newDog.age) {
      this.dogService.editDog(this.newDog).subscribe({
        next: () => {
          console.log('Dog updated successfully');
          //this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error editing dog:', error);
        }
      });
    } else {
      console.log('Dog data is not valid');
    }
  }

  reset() {
    this.newDog = this.oldDog
  }
}
