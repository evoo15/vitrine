import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {Credentials} from '../shared/models/credentials';
import {ActivatedRoute, Router} from '@angular/router';
import {StorageService} from '../shared/services/storage.service';
import {Config} from '../shared/services/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute,
              private router: Router, private storageService: StorageService) { }

  credentials: Credentials = new Credentials() ;
  ngOnInit() {
    if (this.userService.isConnected()) {
      this.router.navigate(['']); }
  }

  onSubmit() {
    console.log(this.credentials);
    this.userService.loginUser(this.credentials)
      .subscribe((data: any) => {
          console.log(data);
          console.log('success');
          this.router.navigate(['']);
          this.storageService.write(Config.tokenKey, data.access_token);
        },
        error => {
          console.log(error);
        });
  }
}
