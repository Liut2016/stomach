import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { View , parse, Spec, Loader} from 'vega';
import vegaEmbed from 'vega-embed';
import {vega} from "vega-embed";

@Component({
  selector: 'app-plot-pane',
  templateUrl: './plot-pane.component.html',
  styleUrls: ['./plot-pane.component.css']
})
export class PlotPaneComponent implements OnInit, OnChanges {

  @Input() data:any;
  view: View;

  constructor() { }

  ngOnInit(){
    console.log(vegaEmbed);
  }

  ngOnChanges() {
    console.log(this.data);
    this.render();
  }

  render() {
    if (this.data) {
      vegaEmbed("#embed-view", this.data, { actions: false });
    }
    }
}
