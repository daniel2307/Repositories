import { Component, OnInit } from '@angular/core';
import { UserService, User } from './user.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
  providers: [UserService]
})
export class RepositoriesComponent implements OnInit {
  title = 'Repositories';

  constructor(public userService: UserService) {  }

  ngOnInit() {
    let observador: Observer<User[]> = {
      next: (listUser) => {
        console.log('mostrando data', listUser);
      },
      error: (error) => {
        console.log('se produjo un error');
      },
      complete: () => {
        console.log('proceso finalizado');
      }
    };
    this.userService.getUsers()
    .subscribe(observador);
  }
  
}
