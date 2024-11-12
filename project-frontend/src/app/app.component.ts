import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';

  user: any; 
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUser(); 
  }

  logout(): void {
    this.authService.logout();
  }
  
}
