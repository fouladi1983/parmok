import { Component, OnInit } from '@angular/core';
import { CommoditiesService } from '../commodities.service';

@Component({
  selector: 'app-europe-indecies',
  templateUrl: './europe-indecies.component.html',
  styleUrls: ['./europe-indecies.component.scss']
})
export class EuropeIndeciesComponent implements OnInit {

  constructor(private commoditiesService: CommoditiesService) { }

  dataSource = []
  page = "loading";
  showSpinner = true;

  ngOnInit() {
    this.commoditiesService.getEuropeIndecies().subscribe( data =>{
      console.log(data)
      this.dataSource = data
      this.page = "";
      this.showSpinner = false;
    })
  }

  displayedColumns: string[] = ['symbol', 'last', 'high', 'low', 'change', 'date'];

}
