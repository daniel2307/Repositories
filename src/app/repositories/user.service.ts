import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  avatar_url: string;
  github_url: string;
  name: string;
  nickName: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  dataUrl = 'assets/file/data.json';
  constructor(private http: HttpClient) { }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.dataUrl);
  }
}