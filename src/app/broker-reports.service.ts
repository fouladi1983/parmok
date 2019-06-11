import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IBroker } from './broker';
import { Observable } from 'rxjs';
import { map,filter,tap } from  'rxjs/operators'
import { IBrokerTransaction } from './brokerTransaction';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Injectable({
  providedIn: 'root'
})
export class BrokerReportsService {
  Ibroker: IBrokerTransaction;

  constructor(private _http: HttpClient) { }
  url = "http://192.168.100.197/brokerReports";

  getBrokers(): Observable<IBroker[]>{
    return this._http.get<IBroker[]>(this.url);
  }

  getBrokerTransaction(brokerName): Observable<IBrokerTransaction[]>{
    return this._http.get<IBrokerTransaction[]>(this.url+"/transactions?brokerName="+brokerName);
  }
}
