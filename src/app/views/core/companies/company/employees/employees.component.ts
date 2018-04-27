import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../../../services';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeService.getEmployees()
      .then(data => {
        console.log(data);
      });
  }

}
