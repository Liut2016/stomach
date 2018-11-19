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
    this.json.emit(sample);
  }
}
