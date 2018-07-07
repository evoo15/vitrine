import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user.model';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  constructor( private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.userService.addUser(this.user)
      .subscribe(data => {
          console.log(data);
          console.log('success');
        },
        error => {
          console.log(error);
        });
  }


}
