import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './user.service';
import { Observer, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/User';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
  providers: [UserService]
})
export class RepositoriesComponent implements OnInit {
  
  title = 'Repositories';

  constructor(private http: HttpClient,public userService: UserService) {  }
  
  listUsers: User;
  
  ngOnInit() {
    // this.http.get('assets/data/data.json')
    //  .subscribe(res => {
    //    console.log(res.json());
    //    this.users = res.json(); // Before this.productos = res.json();
    //  });
     
    this.userService.getUsers()
      .subscribe(item => {
        this.listUsers = item;
        console.log(this.listUsers['users']);
      });
      
    // let observador: Observer<User[]> = {
    //   next: (listUser) => {
    //     console.log('mostrando data', listUser);
    //   },
    //   error: (error) => {
    //     console.log('se produjo un error');
    //   },
    //   complete: () => {
    //     console.log('proceso finalizado');
    //   }
    // };

    // this.userService.getUsers().subscribe(observador);
  }

  // showUsers() {
  //   this.userService.getUsers()
  //     .subscribe((data: User[]) => this.users = {
  //         name: data['name'],
  //         nickName: data['nickName'],
  //         github_url: data['github_url'],
  //         avatar_url: data['avatar_url']
  //     });
  // }
  
}
