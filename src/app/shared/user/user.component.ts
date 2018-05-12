import { Component, OnInit } from '@angular/core';
import { DirectorService, AuthService, UserService } from '../../services';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user: IUser;
  public isLoaded = false;

  constructor(
    private directorService: DirectorService,
    private authService: AuthService,
    private userService: UserService,
  ) { }
  
  getUser() {
    this.userService.getUser()
      .then( user => {
        this.user = user.body;
        console.log(user);
        this.isLoaded = true;
      });
  }
  
  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.getUser();  
  }

}
