import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './user.service';
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

    this.userService.getUsers()
      .subscribe(item => {
        this.listUsers = item;
        console.log(this.listUsers['users']);
      });
      
  }

}
