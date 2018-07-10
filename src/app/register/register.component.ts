import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user.model';
import {UserService} from '../shared/services/user.service';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  constructor( private userService: UserService , private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.userService.addUser(this.user)
      .subscribe(data => {
          console.log(data);
          console.log('success');
          this.router.navigate(['']);
        },
        error => {
          console.log(error);
        });
  }


}
