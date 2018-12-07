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
    public dataSimple = this.data[0];

    markDic = ['area', 'bar', 'circle', 'line', 'point', 'rect', 'rule', 'tick'];
    dropDic = ['x', 'y', 'size', 'color', 'shape', 'detail', 'text'];

    @Output('visJson') json = new EventEmitter<any>();
    constructor() {
      // this.getDataDimension(this.data);
    }

    ngOnInit() {
      this.getDataDimension(this.data);
      this.mark = this.markDic[0];
      console.log(this.strDateTime('1970-01-01'));
      console.log(this.isShortTime('20:43:09'));
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
   this.dropDic = ['x', 'y', 'size', 'color', 'shape', 'detail', 'text'];
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
    const types = ['oridinal', 'nominal', 'quantitative', 'temporal'];
    const data0 = this.data[0];
    for ( const key in data0 ) {
      if (key === dim ) {
        return types[2];
      }
    }
  }
  get(dim) {
    // const types = ['oridinal', 'nominal', 'quantitative', 'temporal'];
    for (const key in this.dataSimple) {
      if (key === dim) {
        if (this.strDateTime(this.dataSimple[key])) {
           return 'temporal';
        } else if (isString(this.dataSimple[key])) {
           return 'nominal';
         } else if (isNumber(this.dataSimple[key])) {
           return 'quantitative';
         }
      }
    }
  }


  changeTypeNumber(item) {
    for (const key in this.dataSimple) {
      if ( key === item) {
          this.dataSimple[key] = 0;
      }
    }
    console.log(this.dataSimple[item]);
  }
  changeTypeString(item) {
    for (const key in this.dataSimple) {
      if ( key === item) {
          this.dataSimple[key] = 'String';
      }
    }
    console.log(this.dataSimple[item]);
  }
  getitem(item) {
    if ( isString(this.dataSimple[item])) {
        return true;
    } else if (isNumber(this.dataSimple[item])) {
      return false;
    }
    }
 strDateTime(str) {
   if (isNumber(str)) {
     return false;
   } else {
      const r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
      if (r === null) {
        return false;
      } else {
        return true;
      }
  }
 }

isShortTime(str) {
    const a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
    if (a === null) {
        return false;
    }
    if (a[1] > 24 || a[3] > 60 || a[4] > 60) {
            return false;
    }
    return true;
}
}
