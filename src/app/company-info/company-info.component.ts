import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CompanyInfoService } from '../company-info.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { ICommandName } from 'selenium-webdriver';
import { ICompanies } from '../companies';


@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})


export class CompanyInfoComponent implements OnInit {
  

  constructor(private authService: AuthService, private companyInfoService: CompanyInfoService) { }

  myControl = new FormControl();
  filteredCompanies: Observable<string[]>;
  companies = [];
  companyAddress;
  companyPhoneInfo;
  comPhoneType = 'دفتر';

  ngOnInit() {
    //this.authService.login().subscribe(data => localStorage.setItem('token',data['token']));
    this.companyInfoService.getCompanyNames().subscribe(data=> {
      this.companies = data;
    });

    //making dynamic filter by every input character
    this.filteredCompanies = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value=> this._filter(value))
    );

  }

  //to make autocomplete display object items like not showing [object.object] 
  displayFn(companies): string | undefined {
    return companies ? companies.symbol + ' / ' + companies.companyName : undefined;
  }

  //filter input characters
  private _filter(value: string): string[]{
    const filterValue = value;
    return this.companies.filter(option=>option.symbol.toLowerCase().includes(filterValue) || option.companyName.toLowerCase().includes(filterValue));
  }

  optionChange(symbol){
    this.companyInfoService.getCompanyAddress(symbol).subscribe(data=>{
      this.companyAddress = data;
      this.companyInfoService.getCompanyPhoneInfo(symbol).subscribe(phoneData=>{
        this.companyPhoneInfo = phoneData;
      })
    });
  }

}
