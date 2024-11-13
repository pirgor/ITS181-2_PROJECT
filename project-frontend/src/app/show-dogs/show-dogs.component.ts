import { Component } from '@angular/core';
import { Dog } from 'app/model/dog.model';
import { AuthService } from 'app/service/auth.service';
import { DogService } from 'app/service/dogservice.service';

@Component({
  selector: 'app-show-dogs',
  templateUrl: './show-dogs.component.html',
  styleUrl: './show-dogs.component.css'
})
export class ShowDogsComponent {
  dogs: Dog[] = []
  user: any;
  constructor(private dogService: DogService, private authService: AuthService) { }

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((data: Dog[]) => { this.dogs = data });
    this.user=this.authService.getUser();
  }

  logout(): void{
    this.authService.logout();
    location.reload();
  }

}
