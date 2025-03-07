import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: { email: string, password: string }[] = [];

  constructor() { }

  signUp(email: string, password: string) {
    this.users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(this.users));
    return true;
  }

  signIn(email: string, password: string): boolean {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    return storedUsers.some((user: any) => user.email === email && user.password === password);
  }
}
