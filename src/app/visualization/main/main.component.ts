import { Component, OnInit } from '@angular/core';
import vegaEmbed from 'vega-embed';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  data;

  constructor() {}

  ngOnInit() {
  }

  getData($event){
    console.log($event);
    this.data = $event;
    if (this.data) {
      vegaEmbed("#embed-view", this.data, { actions: false });
    }
  }

}
