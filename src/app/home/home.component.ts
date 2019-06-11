import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommoditiesService } from '../commodities.service';
import { ICommoditiesPrice } from '../commoditiesPrice';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';

export interface PeriodicElement {
  name: string;
  last: string;
  high: string;
  low: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  goldPrice = [];
  brentPrice = [];
  crudeOilPrice = [];
  priceData: ICommoditiesPrice[] = [];
  displayedColumns: string[] = [ 'symbol', 'last', 'high', 'low', 'change'];

  constructor(private authService: AuthService, private commoditiesService: CommoditiesService) { }

  energyDataSource = [];
  metalDataSource = [];
  agriculturalDataSource = [];

  showSpinner = true;
  homeClass = "homeWrapper";


  ngOnInit() {
    //get latest commodities prices
    this.commoditiesService.getCommoditiesPrices().subscribe(singleData=>{
      this.commoditiesService.getSelectedEnergy().subscribe(energy=>{
        this.commoditiesService.getSelectedMetal().subscribe(metal=>{
          this.commoditiesService.getSelectedAgriculture().subscribe(agriculture=>{
            this.energyDataSource = energy;
            this.metalDataSource = metal;
            this.agriculturalDataSource = agriculture;

            this.priceData = singleData;
            this.goldPrice.push(this.priceData.filter(item => item.symbol === 'طلای جهانی')[0]);
            this.brentPrice.push(this.priceData.filter(item => item.symbol === 'نفت برنت')[0]);
            this.crudeOilPrice.push(this.priceData.filter(item => item.symbol === 'نفت خام')[0]);
            console.log(this.goldPrice);
            
            this.showSpinner = false;
            this.homeClass = "";
          })
        })
      })
    });
  }
}
