import { Component, OnInit } from '@angular/core';
import { NewOrderFormComponent } from '../../../../shared';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(NewOrderFormComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit() {
  }

}
