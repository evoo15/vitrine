import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {Credentials} from '../models/credentials';
import {StorageService} from './storage.service';
import {GenericService} from './generic.service';
import {Config} from './config';


@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService{

  constructor(private http: HttpClient, private storageService: StorageService) {
    super();
  }
  addUser(user: User) {
    const headers = this.headers.set('Authorization', 'Bearer' + this.storageService.read(Config.tokenKey));
    return this.http.post(Config.baseUrl + '/adduser', user);
    }


  loginUser(credentials: Credentials) {
  return this.http.post(Config.baseUrl + '/auth/login', credentials);
  }

  me() {
    const headers = this.headers.set('Authorization', 'Bearer' + this.storageService.read(Config.tokenKey));
    return this.http.get(Config.baseUrl + '/auth/me', {headers});
  }

  isConnected() {
    return this.storageService.isExist(Config.tokenKey);
  }

}
