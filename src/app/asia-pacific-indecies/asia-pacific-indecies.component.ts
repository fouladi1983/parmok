import { Component, OnInit } from '@angular/core';
import { CommoditiesService } from '../commodities.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-asia-pacific-indecies',
  templateUrl: './asia-pacific-indecies.component.html',
  styleUrls: ['./asia-pacific-indecies.component.scss']
})
export class AsiaPacificIndeciesComponent implements OnInit {

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
    this.setTitle("شاخص های آسیا و اقیانوسیه")

    this.commoditiesService.getAsiaPacificIndecies().subscribe( data =>{
      this.dataSource = data;
      this.page = "";
      this.showSpinner = false;
    })
  }

  displayedColumns: string[] = ['symbol', 'last', 'high', 'low', 'change', 'date'];

}
