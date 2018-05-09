import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService, EmployeeService, CompanyService } from '../../../../../../services';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {
  private headerNav: any[];
  private id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventService,
    private employeeService: EmployeeService,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.employeeService.getEmployee(this.id)
      .then( res => {
        console.log(res);
      });
    this.eventService.broadcast('app-header-back', {link: `companies/${this.companyService.companyId}/employees`});
  }

}
