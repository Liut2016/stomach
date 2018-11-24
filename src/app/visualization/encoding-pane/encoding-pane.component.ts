import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { specification, jsons } from '../shared/specification';
import {testData} from "@app/visualization/shared/weball";
@Component({
  selector: 'app-encoding-pane',
  templateUrl: './encoding-pane.component.html',
  styleUrls: ['./encoding-pane.component.css']
})
export class EncodingPaneComponent implements OnInit {

  @Input('tabledata') data: any;
  @Output('visJson') json = new EventEmitter<any>();

  dims = [];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.getKeys(this.data);
  }

  getKeys(data){
    if( data && data.length>0) {
      for (let key in data[0]) {
        this.dims.push(key);
      }
    }
  }

  getJson(){
    let testData =this.data;
    let sample = new jsons().barchart;
    console.log(sample);
    sample.data[0].values = testData;
    let data = [
      {"a": "A","b": 55}, {"a": "B","b": 55}, {"a": "C","b": 43},
      {"a": "D","b": 20}, {"a": "E","b": 81}, {"a": "F","b": 53},
      {"a": "G","b": 19}, {"a": "H","b": 87}, {"a": "I","b": 52}
    ];
    let encoding = {
      "x": {"field": "a", "type": "ordinal"},
      "y": {"field": "b", "type": "quantitative"}
    };
    let mark = 'bar';
    let spec1 = {
      "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
      "description": "A simple bar chart with embedded data.",
      "width": 360,
      "data": {
        "values": [
          {"a": "A","b": 28}, {"a": "B","b": 55}, {"a": "C","b": 43},
          {"a": "D","b": 91}, {"a": "E","b": 81}, {"a": "F","b": 53},
          {"a": "G","b": 19}, {"a": "H","b": 87}, {"a": "I","b": 52}
        ]
      },
      "mark": "bar",
      "encoding": {
        "x": {"field": "a", "type": "ordinal"},
        "y": {"field": "b", "type": "quantitative"},
        "tooltip": {"field": "b", "type": "quantitative"}
      }
    }
    this.json.emit(spec1);
  }

  getx(spec){
    // return spec.encoding['x'].
  }
}
