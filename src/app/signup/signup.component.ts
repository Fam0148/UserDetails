import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username!: string;
  password!: string;
  selectedRole!: string;
  roles: string[] = ['Admin', 'User'];

  constructor(private router: Router) {}

  signUp() {
    console.log('Sign up clicked!');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Selected Role:', this.selectedRole);
    this.router.navigate(['login']);
  }

}
