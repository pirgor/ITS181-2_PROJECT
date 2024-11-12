import { Component } from '@angular/core';
import { AuthService } from 'app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user: any; 
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUser(); 
  }

  logout(): void{
    this.authService.logout();
    location.reload();
  }
}
