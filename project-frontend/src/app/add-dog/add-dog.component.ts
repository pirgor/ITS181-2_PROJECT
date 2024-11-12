import { Component } from '@angular/core';
import { Dog } from 'app/model/dog.model';
import { DogService } from 'app/service/dogservice.service';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth.service';

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
  user: any;

  constructor(private dogService: DogService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  addDog() {
    this.dogService.addDog(this.newDog).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => console.error('Error adding dog:', error)
    });
  }

  logout(): void{
    this.authService.logout();
    location.reload();
  }
}
