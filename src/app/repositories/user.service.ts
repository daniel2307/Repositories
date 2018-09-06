import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  dataUrl = 'assets/file/data.json';
  
  constructor(private http: HttpClient) { }

  // getUsers (): Observable<User[]> {
  //   return this.http.get<User[]>(this.dataUrl);
  // }
  getUsers(): Observable<User> {
    return <Observable<User>> this.http.get(this.dataUrl);
  }
}