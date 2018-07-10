import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {Credentials} from '../shared/models/credentials';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute,
              private router: Router) { }

  credentials: Credentials = new Credentials() ;
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.credentials);
    this.userService.loginUser(this.credentials)
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
