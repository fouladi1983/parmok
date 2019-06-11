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

  addressUrl = "http://192.168.100.197/CompanyAddressInfo";
  phoneUrl = "http://192.168.100.197/CompanyPhoneInfo";
  tseUrl = "http://192.168.100.197/CompanyUrlInfo";

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
