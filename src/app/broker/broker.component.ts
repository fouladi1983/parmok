import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map,startWith} from 'rxjs/operators';
import { BrokerReportsService } from '../broker-reports.service';
import {IBrokerTransaction} from '../brokerTransaction';
import { AuthService } from '../auth.service';
import { Title } from '@angular/platform-browser';
/*import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';
import { isBoolean } from 'util';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { Chart } from 'chart.js';*/

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss']
})
export class BrokerComponent implements OnInit {

  constructor(
    private _brokerService: BrokerReportsService,
    private authService: AuthService,
    private titleService: Title
    ) { }


  public setTitle(newTitle: string){
    this.titleService.setTitle(newTitle)
  }

  brokers = [];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  brokerTransaction = [];

  ngOnInit() {
      this.setTitle("آمار معاملات کارگزاری ها");

      this._brokerService.getBrokers().subscribe(data=> this.brokers = data);

      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string>(''),
        map(name => name ? this._filter(name) : this.brokers.slice())
      );
  }

  displayFn(brokers): string | undefined {
    return brokers ? brokers.broker : undefined;
  }

  private _filter(name: string) {
    const filterValue = name;

    return this.brokers.filter(option => option.broker.toLowerCase().indexOf(filterValue) === 0);
  }
  
//================broker transactions=============//
chartOptions;
chartData = [];
btData: number[] = [];
imeData: number[] = [];
ifbData: number[] = [];
yearData: string[] = [];
chartLabels: string[] = [];
public brokerName: string;

brokerChose = false;
Ibroker: IBrokerTransaction[] = [];

  optionChange(value){
      this._brokerService.getBrokerTransaction(value).subscribe((data)=>{
        this.Ibroker = data,
        this.btData = [],this.imeData = [],this.ifbData = [],this.yearData = [];
      if(this.btData.length < 1 && this.imeData.length < 1 && this.ifbData.length < 1 && this.yearData.length < 1){
        this.Ibroker.forEach((item,index)=>{
          this.btData.push(+item.TotalTehranBourseStockTrade);
          this.imeData.push(+item.TotalImeTrade);
          this.ifbData.push(+item.TotalIfbTrade);
          this.yearData.push(item.yearData);
          console.log("index: "+index+" | item: "+item.yearData);
        });
      }
      this.brokerChose = true;
      this.chartOptions = {
        responsive: true
      };
    
      this.chartData = [
        { data: this.btData, label: 'بورس اوراق بهادار تهران' },
        { data: this.ifbData, label: 'فرابورس' },
        { data: this.imeData, label: 'بورس کالا' }
      ];
    
      this.chartLabels = this.yearData;
    });
  }
}
