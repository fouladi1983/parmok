import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, observable } from 'rxjs';
import { ICommodities } from './commodities';
import { ICommoditiesPrice } from './commoditiesPrice'
import { share, map, shareReplay, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommoditiesService {

  constructor(private _http: HttpClient) { }
  commoditiesUrl = "http://192.168.100.197/commodities";
  indeciesUrl = "http://192.168.100.197/indecies";
  commoditiesBySymbolUrl = "http://192.168.100.197/commodities/getBySymbol?symbol=";
  selectedCommodiditesUrl = "http://192.168.100.197/selectedCommodities";
  energyResponse;metalResponse;agricultureResponse;

  getCommodities(): Observable<ICommodities[]>{
    return this._http.get<ICommodities[]>(this.commoditiesUrl);
  }

  getCommoditiesPrices(): Observable<ICommoditiesPrice[]>{
    return this._http.get<ICommoditiesPrice[]>(this.commoditiesUrl+'/getCommoditiesPrices');
  }

  getBaseMetals(): Observable<ICommoditiesPrice[]>{
    return this._http.get<ICommoditiesPrice[]>(this.commoditiesUrl+'/getBaseMetals');
  }

  getPreciousMetals(): Observable<ICommoditiesPrice[]>{
    return this._http.get<ICommoditiesPrice[]>(this.commoditiesUrl+'/getPreciousMetals');
  }

  getAgriculturals(): Observable<ICommoditiesPrice[]>{
    return this._http.get<ICommoditiesPrice[]>(this.commoditiesUrl+'/getAgriculturals');
  }

  getAmericaIndecies(): Observable<ICommoditiesPrice[]>{
    return this._http.get<ICommoditiesPrice[]>(this.indeciesUrl+'/americas');
  }

  getEuropeIndecies(): Observable<ICommoditiesPrice[]>{
    return this._http.get<ICommoditiesPrice[]>(this.indeciesUrl+'/europe');
  }

  getAsiaPacificIndecies(): Observable<ICommoditiesPrice[]>{
    return this._http.get<ICommoditiesPrice[]>(this.indeciesUrl+'/asia-pacific');
  }

  getSelectedMetal(): Observable<ICommoditiesPrice[]>{
    return this._http.get<ICommoditiesPrice[]>(this.selectedCommodiditesUrl+'/metal');
  }

  getSelectedEnergy():  Observable<ICommoditiesPrice[]>{
    return this._http.get<ICommoditiesPrice[]>(this.selectedCommodiditesUrl+'/energy');
  }

  getSelectedAgriculture(): Observable<ICommoditiesPrice[]>{
    return this._http.get<ICommoditiesPrice[]>(this.selectedCommodiditesUrl+'/agriculture');
  }
}
