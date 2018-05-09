import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../../../../../services';
import { IUser } from '../../../../../../../interfaces/user';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {
  public isLoaded = false;
  public profile: IUser;
  public roleList: any[];
  
  constructor(
    private employeeService: EmployeeService
  ) { }
  
  getEmployee(id: string) {
    this.employeeService.getEmployee(id)
      .then( res => {
        console.log(res);
        this.profile = res.body;
        this.isLoaded = true;
      });
  }

  ngOnInit() {
    this.getEmployee(this.employeeService.employeeId);
    this.roleList = [
      {id: 2, name: 'Ст. менеджер'},
      {id: 3, name: 'Менеджер'},
      {id: 4, name: 'Монтажник'},
    ];
  }

}
