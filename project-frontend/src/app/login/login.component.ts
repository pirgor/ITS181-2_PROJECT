import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/model/user';
import { AuthService } from 'app/service/auth.service';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = {
    email: '',
    password: '',
    name: '',
    usertype: ''
  }; 

  constructor(private loginService: UserService, private router: Router, private authService: AuthService) {}
  onLogin(): void {
    this.loginService.login(this.user).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.authService.setUser(response); 
        this.router.navigate(['/']);
      },
      error: (error) => {
        alert('Invalid email or password');
        console.error(error);
      }
    });
  }

}
