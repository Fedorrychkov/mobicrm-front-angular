import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewEmployeeFormComponent } from '../../../../../../shared';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(NewEmployeeFormComponent, {
      width: '600px',
      data: {}
    });
    console.log('log');

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}
