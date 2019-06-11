import { Component, OnInit } from '@angular/core';
import { CommoditiesService } from '../commodities.service';

@Component({
  selector: 'app-asia-pacific-indecies',
  templateUrl: './asia-pacific-indecies.component.html',
  styleUrls: ['./asia-pacific-indecies.component.scss']
})
export class AsiaPacificIndeciesComponent implements OnInit {

  constructor(private commoditiesService: CommoditiesService) { }

  dataSource = [];
  page = "loading";
  showSpinner = true;

  ngOnInit() {
    this.commoditiesService.getAsiaPacificIndecies().subscribe( data =>{
      this.dataSource = data;
      this.page = "";
      this.showSpinner = false;
    })
  }

  displayedColumns: string[] = ['symbol', 'last', 'high', 'low', 'change', 'date'];

}
