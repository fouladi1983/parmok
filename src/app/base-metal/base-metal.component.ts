import { Component, OnInit } from '@angular/core';
import { CommoditiesService } from '../commodities.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-base-metal',
  templateUrl: './base-metal.component.html',
  styleUrls: ['./base-metal.component.scss']
})


export class BaseMetalComponent implements OnInit {

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
    this.setTitle("قیمتهای جهانی فلزات پایه")

    this.commoditiesService.getBaseMetals().subscribe( data =>{
      this.dataSource = data;
      this.page = "";
      this.showSpinner = false;
    })
  }

  displayedColumns: string[] = ['symbol', 'last', 'high', 'low', 'change', 'date'];

}
