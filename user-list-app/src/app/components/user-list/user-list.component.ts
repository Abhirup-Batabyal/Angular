import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    { name: 'John Doe', age: 25, email: 'john@example.com' },
    { name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    { name: 'David Johnson', age: 28, email: 'david@example.com' }
  ];

  newUser = { name: '', age: 0, email: '' }; // ✅ Changed null to 0

  addUser() {
    if (this.newUser.name && this.newUser.age > 0 && this.newUser.email) { // ✅ Check if age > 0
      this.users.push({ ...this.newUser });
      this.newUser = { name: '', age: 0, email: '' }; // ✅ Reset with 0
    }
  }
}
