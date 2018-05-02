import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../../services';
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
    private directorService: DirectorService
  ) { }
  
  getUser() {
    this.directorService.getDirector()
      .then( user => {
        this.user = user.body;
        console.log(user);
        this.isLoaded = true;
      });
  }

  ngOnInit() {
    this.getUser();  
  }

}
