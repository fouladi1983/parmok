import { Component, OnInit } from '@angular/core';
import { CommoditiesService } from '../commodities.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-america-indecies',
  templateUrl: './america-indecies.component.html',
  styleUrls: ['./america-indecies.component.scss']
})
export class AmericaIndeciesComponent implements OnInit {

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
    this.setTitle("شاخص های قاره آمریکا")

    this.commoditiesService.getAmericaIndecies().subscribe( data =>{
      this.dataSource = data;
      this.page = "";
      this.showSpinner = false;
    })
  }

  displayedColumns: string[] = ['symbol', 'last', 'high', 'low', 'change', 'date'];

}
