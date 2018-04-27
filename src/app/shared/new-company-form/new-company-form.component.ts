import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventService, AuthService, CompanyService } from '../../services';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-company-form',
  templateUrl: './new-company-form.component.html',
  styleUrls: ['./new-company-form.component.scss']
})
export class NewCompanyFormComponent implements OnInit{
  public newCompanyForm: FormGroup;
  public name: string;
  public address: string;
  public description: string;
  public tags: string[];
  public errorMessage: string;
  public isLoading = false;
  public id: string;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public eventService: EventService,
    public companyService: CompanyService,
    public router: Router,
    public dialogRef: MatDialogRef<NewCompanyFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  onClose(): void {
    this.dialogRef.close();
  }

  createCompany(data) {
    console.log(data);
    this.companyService.createCompany(data)
      .then( (data) => {
        this.router.navigate([`companies/${data.id}`]);
        this.dialogRef.close();
      });
  }
  ngOnInit() {
    this.newCompanyForm = this.fb.group({
      name: [this.name],
      description: [this.description],
      address: [this.address],
      tags: [this.tags]
    });
  }

}
