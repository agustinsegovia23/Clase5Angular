import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users : User[] = [];

  constructor() {
    this.users.push(new User(1, "Carlos Alberto", "Garcia", 58));
    this.users.push(new User(2, "Alberto Ernesto", "Lucero", 69));
    this.users.push(new User(3, "Ramiro Daniel", "Diaz", 36));
    this.users.push(new User(4, "Sabrina Lucia", "Ortiz", 29));
  }

  ngOnInit(): void {
  }

}
