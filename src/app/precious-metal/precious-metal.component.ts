import { Component, OnInit } from '@angular/core';
import { CommoditiesService } from '../commodities.service';

@Component({
  selector: 'app-precious-metal',
  templateUrl: './precious-metal.component.html',
  styleUrls: ['./precious-metal.component.scss']
})
export class PreciousMetalComponent implements OnInit {

  constructor(private commoditiesService: CommoditiesService) { }

  dataSource = [];
  page = "loading";
  showSpinner = true;
  sometext;

  ngOnInit() {
    this.commoditiesService.getPreciousMetals().subscribe( data =>{
      this.dataSource = data;
      this.page = "";
      this.showSpinner = false;
    })
  }

  displayedColumns: string[] = ['symbol', 'last', 'high', 'low', 'change', 'date'];

}
