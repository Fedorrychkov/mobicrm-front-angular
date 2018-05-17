import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../../../../services';
import { ICompany } from '../../../../../../interfaces/company';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-common-info',
  templateUrl: './common-info.component.html',
  styleUrls: ['./common-info.component.scss']
})
export class CommonInfoComponent implements OnInit {
  public isLoaded: boolean = false;
  public isEditMode: boolean = false;
  public company: ICompany;
  public currencyList: any;
  
  public id: number;
  public name: string;
  public description: string;
  public currency: string;
  public tags: any;
  public address: string;

  public updateCompanyForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private companyService: CompanyService
  ) { }

  getCompany() {
    this.companyService.getCompany()
      .then( res => {
        if (!res.body.currency) res.body.currency = 'RUB';
        this.company = res.body;
        return res.body;
      }).then( res => {
        console.log('Get Company', res);
        this.id = res.id
        this.name = res.name;
        this.description = res.description;
        this.address = res.address;
        this.tags = res.tags;
        this.currency = res.currency;
        this.isLoaded = true;
      });
  }
  
  updateCompany(data: ICompany, valid: boolean) {
    if(!valid) return;
    console.log(data);
    if (data.currency) data.currency = 'RUB';
    data.id = this.id;
    this.companyService.updateCompany(data)
      .then( res => {
        console.log(res);
        this.isLoaded = false;
        this.isEditMode = false;
        this.getCompany();
      });
  }

  ngOnInit() {
    this.getCompany();
    this.currencyList = [
      {value: 'RUB', name: 'Рубли'}
    ];
    this.updateCompanyForm = this.fb.group({
      name: [this.name, [Validators.required]],
      description: [this.description, [Validators.required]],
      currency: [this.currency, [Validators.required]],
      address: [this.address ],
      tags: [this.tags ],
      id: [this.id]
    });
  }

}
