import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService) { }

  onSignIn() {
    if (this.authService.signIn(this.email, this.password)) {
      alert('Sign-in Successful!');
    } else {
      this.errorMessage = 'Invalid email or password!';
    }
  }
}
