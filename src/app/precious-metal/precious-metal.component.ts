import { Component, OnInit } from '@angular/core';
import { CommoditiesService } from '../commodities.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-precious-metal',
  templateUrl: './precious-metal.component.html',
  styleUrls: ['./precious-metal.component.scss']
})
export class PreciousMetalComponent implements OnInit {

  constructor(
    private commoditiesService: CommoditiesService,
    private titleService: Title
    ) { }

  public setTitle(newTitle:string){
    this.titleService.setTitle(newTitle);
  }

  dataSource = [];
  page = "loading";
  showSpinner = true;

  ngOnInit() {
    this.setTitle("قیمتهای جهانی فلزات گرانبها");

    this.commoditiesService.getPreciousMetals().subscribe( data =>{
      this.dataSource = data;
      this.page = "";
      this.showSpinner = false;
    })
  }

  displayedColumns: string[] = ['symbol', 'last', 'high', 'low', 'change', 'date'];

}
