import {Component, VERSION, OnInit, Output, EventEmitter} from '@angular/core';
import {CdkDragDrop, moveItemInArray, copyArrayItem} from '@angular/cdk/drag-drop';
import { testData } from '../shared/weball';
import vegaEmbed from 'vega-embed';
import { isString, array, isNumber } from 'vega';
import { isDate } from 'util';

@Component({
  selector: 'app-data-pane',
  templateUrl: './data-pane.component.html',
  styleUrls: ['./data-pane.component.css']
})
export class DataPaneComponent implements OnInit {
   data = new testData().cars;
   public mark: string;
    public dimension: string[] = [];
    public done: string[] = Array(7);

    markDic = ['area', 'bar', 'circle', 'line', 'point', 'rect', 'rule', 'tick'];
    dropDic = ['x', 'y', 'size', 'color', 'shape', 'detail', 'text'];

    @Output('visJson') json = new EventEmitter<any>();
    constructor() {
      // this.getDataDimension(this.data);
    }

    ngOnInit() {
      this.getDataDimension(this.data);
      this.mark = this.markDic[0];
    }

    getDataDimension = (data) => {
      for(const key in data[0]){
        this.dimension.push(key);
      }
      console.log(this.dimension);
}
/* getDataDimension = (data) => {
  this.dimension  = data[0];
  console.log(this.dimension[0]);
}
  */  drop(event: CdkDragDrop<any[]>) {
      console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      event.container.data[event.currentIndex] = event.previousContainer.data[event.previousIndex];
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
    /* this.done.splice(index, 1); */
    this.done[index] = '';
  }

  clear () {
   this.dropDic = ['x轴', 'y轴', 'size', 'color', 'shape', 'detail', 'text'];
   this.done = Array(7);
  }

  getJson() {
    const encoding = this.getEncoding(this.done);

    const spec1 = {
      '$schema': 'https://vega.github.io/schema/vega-lite/v3.json',
      'description': 'A simple bar chart with embedded data.',
      'width': 360,
      'data': {
        'values': this.data
      },
      'mark': this.mark,
      'encoding': encoding
    };
    this.json.emit(spec1);
  }

  getEncoding(arr) {
    const encode = {};
    arr.forEach((v, i) => {
      if (v) {
        encode[this.dropDic[i]] = {
          'field': v,
          'type': this.getType(v)
        };
      }
    });
    return encode;
  }

  getType(dim) {
    // const types = ['oridinal', 'nominal', 'quantitative', 'temporal'];
     const data0 = this.data[0];
    for (const key in data0) {
      if (key === dim) {
         if (isString(data0[key])) {
           return 'String';
         } else {
           return 'Number';
         }
      }
    }
  }

  changeTypeNumber(item) {
    const data0 = this.data[0];
    for (const key in data0) {
      if ( key === item) {
          data0[key] = 0;
      }
    }
    console.log(data0[item]);
  }
  changeTypeString(item) {
    const data0 = this.data[0];
    for (const key in data0) {
      if ( key === item) {
          data0[key] = 'String';
      }
    }
    console.log(data0[item]);
  }
  getitem(item) {
    const data0 = this.data[0];
    if ( isString(data0[item])) {
        return 'String';
    } else if (isNumber(data0[item])) {
      return 'Number';
    }
    }
}

