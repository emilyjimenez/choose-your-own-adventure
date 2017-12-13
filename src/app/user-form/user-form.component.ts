import { Component, OnInit } from '@angular/core';
import { User } from './../user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  createUser(name, animal, color){
    let newUser:User = new User(name, animal, color);
    console.log(newUser);
  }

}
