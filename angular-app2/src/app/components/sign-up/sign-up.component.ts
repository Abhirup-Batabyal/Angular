import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  email = '';
  password = '';
  successMessage = '';

  constructor(private authService: AuthService) { }

  onSignUp() {
    if (this.authService.signUp(this.email, this.password)) {
      this.successMessage = 'Sign-up Successful! Please sign in.';
    }
  }
}
