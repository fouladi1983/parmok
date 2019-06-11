import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommoditiesService } from '../commodities.service';
import { forkJoin, combineLatest, Observable, observable, of } from 'rxjs';
import { map, mergeMap, delay, mergeAll, concat } from 'rxjs/operators';
import { BaseMetalComponent } from '../base-metal/base-metal.component';

@Component({
  selector: 'app-service-test',
  templateUrl: './service-test.component.html',
  styleUrls: ['./service-test.component.scss']
})
export class ServiceTestComponent implements OnInit {
  data1;
  data2;
  constructor(private commoditiesService: CommoditiesService) { }

  ngOnInit() {
    this.commoditiesService.getSelectedEnergy().pipe(
      concat(this.commoditiesService.getSelectedMetal())
    ).subscribe(data=>console.log(data[0]))
  }

}
