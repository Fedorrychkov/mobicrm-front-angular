import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewCompanyFormComponent } from '../../../../shared';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.scss']
})
export class NewCompanyComponent implements OnInit {
  public name: string;
  public address: string;
  public description: string;
  public tags: string[];
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(NewCompanyFormComponent, {
      width: '600px',
      data: { 
        name: this.name,
        description: this.description,
        address: this.address,
        tags: this.tags
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
  }

}
