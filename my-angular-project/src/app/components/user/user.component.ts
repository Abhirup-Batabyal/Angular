import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class UserListComponent implements OnInit, OnChanges {
  @Input() userName: string = '';

  constructor() {}

  ngOnInit() {
    console.log('UserListComponent Initialized');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('UserListComponent Input Changed:', changes);
  }
}
