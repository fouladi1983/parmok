import { Injectable, Injector } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICommodities } from './commodities';
import { ICompanies } from './companies';

@Injectable({
  providedIn: 'root'
})
export class CompanyInfoService {

  constructor(private _http: HttpClient, private injector: Injector) { }
  companyNames = [];

  addressUrl = "http://api.parmok.com/CompanyAddressInfo";
  phoneUrl = "http://api.parmok.com/CompanyPhoneInfo";
  tseUrl = "http://api.parmok.com/CompanyUrlInfo";

  getCompanyNames(): Observable<ICompanies[]>{
    return this._http.get<ICompanies[]>(this.addressUrl);
  }

  getCompanyAddress(symbol){
    return this._http.get<any>(this.addressUrl+'/getByName?name='+symbol);
  }

  getCompanyPhoneInfo(symbol): Observable<any>{
    return this._http.get<any>(this.phoneUrl+'/getByName?name='+symbol);
  }
  
}
