import { Component, OnInit } from '@angular/core';
import { CommoditiesService } from '../commodities.service';

@Component({
  selector: 'app-base-metal',
  templateUrl: './base-metal.component.html',
  styleUrls: ['./base-metal.component.scss']
})


export class BaseMetalComponent implements OnInit {

  constructor(private commoditiesService: CommoditiesService) { }

  dataSource = [];
  page = "loading";
  showSpinner = true;

  ngOnInit() {
    this.commoditiesService.getBaseMetals().subscribe( data =>{
      this.dataSource = data;
      this.page = "";
      this.showSpinner = false;
    })
  }

  displayedColumns: string[] = ['symbol', 'last', 'high', 'low', 'change', 'date'];

}
