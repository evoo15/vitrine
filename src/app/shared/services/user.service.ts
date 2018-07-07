import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  addUser(user: User) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost/backend/public/api/adduser', user, { headers: headers
    });
}
}
