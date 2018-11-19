import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { View , parse, Spec, Loader} from 'vega';

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

  }

  ngOnChanges() {
    console.log(this.data);
    this.render();
  }

  render() {
    if (this.data) {
      this.view = new View(parse(this.data))
          .renderer('svg')
          .initialize('#view')
          .hover()
          .run();
    }
  }
}
