import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../shared/services/user.service';
import {StorageService} from '../shared/services/storage.service';
import {Config} from '../shared/services/config';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private storageService: StorageService) {}
  ngOnInit() {
  }

  logout() {
    this.storageService.remove(Config.tokenKey);
  }

  isConnected() {
    return (this.userService.isConnected());
  }

}
