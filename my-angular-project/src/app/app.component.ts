import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './components/user/user.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, UserListComponent, CapitalizePipe]
})
export class AppComponent {
  title = 'My Angular App';
  userName: string = '';
}
