import { Component, OnInit } from '@angular/core';
import { CommoditiesService } from '../commodities.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.scss']
})
export class EnergyComponent implements OnInit {

  constructor(
    private commoditiesService: CommoditiesService,
    private titleService: Title
     ) { }

  public setTitle(newTitle: string){
    this.titleService.setTitle(newTitle)
  }

  dataSource = [];
  page = 'loading';
  showSpinner = true;

  ngOnInit() {
    this.setTitle('قیمتهای جهانی کالاهای انرژی');

    this.commoditiesService.getEnergy().subscribe(data=>{
      this.dataSource = data;
      this.page = "";
      this.showSpinner = false;
    })
  }

  displayedColumns: string[] = ['symbol', 'last', 'high', 'low', 'change', 'date'];

}
