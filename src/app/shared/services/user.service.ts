import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Credentials} from '../models/credentials';
import {StorageService} from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,  private storageService: StorageService) { }
  addUser(user: User) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost/backend/public/api/adduser', user, { headers: headers
    });
}

  loginUser(credentials: Credentials) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost/backend/public/api/auth/login', credentials, { headers: headers
    });
  }

}
