import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewCustomerFormComponent } from '../../../../shared';
import { CompanyService } from '../../../../services';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  private companyId: string;

  constructor(
    public dialog: MatDialog,
    private companyService: CompanyService,
  ) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(NewCustomerFormComponent, {
      width: '600px',
      data: {company_id: this.companyId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.companyId = this.companyService.companyId;
  }


}
