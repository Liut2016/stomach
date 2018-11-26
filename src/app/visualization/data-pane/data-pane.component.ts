import {Component, VERSION, OnInit, Output, EventEmitter} from '@angular/core';
import {CdkDragDrop, moveItemInArray, copyArrayItem} from '@angular/cdk/drag-drop';
import { testData } from '../shared/weball';
import vegaEmbed from 'vega-embed';

@Component({
  selector: 'app-data-pane',
  templateUrl: './data-pane.component.html',
  styleUrls: ['./data-pane.component.css']
})
export class DataPaneComponent implements OnInit{
   data = new testData().cars;
    public dimension: string[] = [];
    public done: string[] = [ ];
    public done1: string[] = [];

    @Output('visJson') json = new EventEmitter<any>();
    constructor(){
      // this.getDataDimension(this.data);
    }

    ngOnInit(){
      this.getDataDimension(this.data);
    }

    getDataDimension = (data)=>{
      for(let key in data[0]){
        this.dimension.push(key);
      }
      console.log(this.dimension);
}

   drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      }
   }
  delete(item: string) {
    const index = this.done.indexOf(item);
    this.done.splice(index, 1);
  }
  delete1(item: string ) {
    const index1 = this.done1.indexOf(item);
    this.done1.splice(index1, 1);
  }

  clear () {
   this.done = [];
   this.done1 = [];
  }

  getJson(){
    let testData =this.data;
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
        "values": this.data
      },
      "mark": "bar",
      "encoding": {
        "x": {"field": this.done[0], "type": "ordinal"},
        "y": {"field": this.done1[0], "type": "quantitative"},
        // "tooltip": {"field": "b", "type": "quantitative"}
      }
    }
    this.json.emit(spec1);
  }

}
