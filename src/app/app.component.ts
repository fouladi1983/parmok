import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  opened = false;

  constructor(private titleService: Title){}

  public setTitle(newTitle: string){
    this.titleService.setTitle(newTitle);
  }

  ngOnInit(){
    this.setTitle("Parmok");
  }
}
