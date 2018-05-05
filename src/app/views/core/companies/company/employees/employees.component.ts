import { Component, OnInit } from '@angular/core';
import { EmployeeService, EventService } from '../../../../../services';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  public employees;
  public isLoaded = false;

  constructor(
    private employeeService: EmployeeService,
    private eventService: EventService
  ) { }
  
  getEmployees() {
    this.employeeService.getEmployees()
      .then(data => {
        console.log(data);
        this.employees = data;
        this.isLoaded = true;
      });
  }
  ngOnInit() {
      this.eventService.broadcast('app-header-back', {link: 'companies'});
      this.getEmployees();
      this.eventService.on('employee-list-update').subscribe( () => {
        this.getEmployees();
      });
  }

}
