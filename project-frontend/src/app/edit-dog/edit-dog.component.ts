import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Dog } from 'app/model/dog.model';
import { AuthService } from 'app/service/auth.service';
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

  user: any;

  constructor(private authService: AuthService, private dogService: DogService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.dogService.getDogs().subscribe((dogs) => this.dogs = dogs);
  }


  set selectedDogId(id: number) {
    let dog = this.dogs.find(dog => { return dog.id == id; }) || null;
    if (dog) { this.selectedDog = {...dog} };
    this.oldDog = this.selectedDog ? {...this.selectedDog} : this.oldDog;
  }

  editDog() {
    this.newDog = this.selectedDog ? {...this.selectedDog} : this.newDog;
    if (this.newDog.name && this.newDog.breed && this.newDog.gender && this.newDog.img && this.newDog.age) {
      this.dogService.editDog(this.newDog).subscribe({
        next: () => {
          console.log(`${this.newDog.name} updated successfully`);
          this.dogService.getDogs().subscribe((dogs) => this.dogs = dogs);
          this.oldDog = {...this.newDog};
          //this.router.navigate(['/']);
        },
        error: (error) => {
          console.error(`Error editing ${this.newDog.name}:`, error);
        }
      });
    } else {
      console.log('Dog data is not valid');
    }
  }

  deleteDog() {
    if (this.oldDog) {
      this.dogService.deleteDog(this.oldDog).subscribe({
        next: () => {
          console.log('Dog deleted successfully');
          this.selectedDog = null;
          this.dogService.getDogs().subscribe((dogs) => this.dogs = dogs);
        },
        error: (error) => {
          console.error('Error deleting dog', error);
        }
      });
    }
  }

  reset() {
    this.selectedDog = {...this.oldDog};
    let dog = this.dogs.find(dog => dog.id == this.oldDog.id);
    if (dog) { dog.name = this.oldDog.name };
  }

  logout(): void{
    this.authService.logout();
    location.reload();
  }
}
