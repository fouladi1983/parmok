import { Component, OnInit } from '@angular/core';
import { CommoditiesService } from '../commodities.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-agricultural',
  templateUrl: './agricultural.component.html',
  styleUrls: ['./agricultural.component.scss']
})
export class AgriculturalComponent implements OnInit {

  constructor(private commoditiesService: CommoditiesService, private titleService: Title) { }

  public setTitle(newTitle: string){
    this.titleService.setTitle(newTitle);
  }

  dataSource = [];
  page = "loading";
  showSpinner = true;

  ngOnInit() {
    this.setTitle("قیمتهای جهانی کالاهای کشاورزی");

    
    this.commoditiesService.getAgriculturals().subscribe( data =>{
      this.dataSource = data;
      this.page = "";
      this.showSpinner = false;
    })
  }

  displayedColumns: string[] = ['symbol', 'last', 'high', 'low', 'change', 'date'];

}
