import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Dog } from 'app/model/dog.model';
import { DogService } from 'app/service/dogservice.service';
import { AuthService } from 'app/service/auth.service';

@Component({
  selector: 'app-show-dog',
  templateUrl: './show-dog.component.html',
  styleUrl: './show-dog.component.css'
})

export class ShowDogComponent {
  dog: Dog = new Dog()
  user: any;
  constructor(private route: ActivatedRoute, private dogService: DogService, private authService: AuthService) {
    console.log('entered constructor' + this.dog.name)
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = params['id'];
        console.log('Id ' + id);
        this.dogService.getDog(id).subscribe((data: Dog) => { this.dog = data });
      }
    });
  }
  
  logout(): void{
    this.authService.logout();
    location.reload();
  }

}
