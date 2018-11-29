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
   public mark: string;
    public dimension: string[] = [];
    public done: string[] = Array(7);

    markDic = ['area', 'bar', 'circle', 'line', 'point','rect', 'rule','tick'];
    dropDic = ['x', 'y', 'size', 'color', 'shape', 'detail', 'text'];

    @Output('visJson') json = new EventEmitter<any>();
    constructor(){
      // this.getDataDimension(this.data);
    }

    ngOnInit(){
      this.getDataDimension(this.data);
      this.mark = this.markDic[0];
    }

    getDataDimension = (data)=>{
      for(let key in data[0]){
        this.dimension.push(key);
      }
      console.log(this.dimension);
}

   drop(event: CdkDragDrop<any[]>) {
      console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      event.container.data[event.currentIndex] = event.previousContainer.data[event.previousIndex]
      // copyArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );
      }
   }
  delete(item: string) {
    const index = this.done.indexOf(item);
    this.done.splice(index, 1);
  }
  delete1(item: string ) {
    const index1 = this.dropDic.indexOf(item);
    this.dropDic.splice(index1, 1);
  }

  clear () {
   this.dropDic = ['x', 'y', 'size', 'color', 'shape', 'detail', 'text'];
   this.done = Array(7);
  }

  getJson(){
    let encoding = this.getEncoding(this.done);

    let spec1 = {
      "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
      "description": "A simple bar chart with embedded data.",
      "width": 360,
      "data": {
        "values": this.data
      },
      "mark": this.mark,
      "encoding": encoding
    }
    this.json.emit(spec1);
  }

  getEncoding(arr){
    let encode = {};
    arr.forEach((v,i)=>{
      if(v){
        encode[this.dropDic[i]] = {
          'field': v,
          'type': this.getType(v)
        }
      }
    })
    return encode;
  }

  getType(dim){
    const types = ['oridinal', 'nominal', 'quantitative', 'temporal'];
    let data0 = this.data[0];
    for( let key in data0 ){
      if(key === dim ){
        const regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
        if(regNeg.test(data0[key]) || !isNaN(data0[key])  ){
          return types[2]
        }else if(isNaN(data0[key])&&!isNaN(Date.parse(data0[key]))){
          return types[3]
        }else {
          return types[1];
        }
      }
    }
  }

}
