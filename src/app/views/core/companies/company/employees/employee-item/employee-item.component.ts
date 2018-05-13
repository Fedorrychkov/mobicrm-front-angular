import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService, EmployeeService, CompanyService } from '../../../../../../services';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {
  private navigation: any[];
  private id: string;
  
  public isLoaded = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventService,
    private employeeService: EmployeeService,
    private companyService: CompanyService
  ) { }

  getEmployee() {
    this.employeeService.getEmployee(this.id)
      .then( res => {
        this.isLoaded = true;
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.employeeService.employeeId = params['id'];
    });
    // this.getEmployee();
    this.eventService.broadcast('app-header-back', {link: `companies/${this.companyService.companyId}/employees`});
    this.navigation = [
      {
          link: `profile`,
          name: 'Профиль'
      },
      {
          link: `orders`,
          name: 'Заказы'
      },
      {
          link: `settings`,
          name: 'Настройки'
      },
    ];
  }

}
