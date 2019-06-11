import { Component, OnInit } from '@angular/core';
import { CommoditiesService } from '../commodities.service';

@Component({
  selector: 'app-agricultural',
  templateUrl: './agricultural.component.html',
  styleUrls: ['./agricultural.component.scss']
})
export class AgriculturalComponent implements OnInit {

  constructor(private commoditiesService: CommoditiesService) { }

  dataSource = [];
  page = "loading";
  showSpinner = true;

  ngOnInit() {
    this.commoditiesService.getAgriculturals().subscribe( data =>{
      this.dataSource = data;
      this.page = "";
      this.showSpinner = false;
    })
  }

  displayedColumns: string[] = ['symbol', 'last', 'high', 'low', 'change', 'date'];

}
