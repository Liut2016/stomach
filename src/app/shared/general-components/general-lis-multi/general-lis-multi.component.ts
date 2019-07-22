
import { Component, OnInit , ViewChildren, AfterViewInit, QueryList} from '@angular/core';
import { ConfInterface } from '@app/shared/conf-interface';
import { MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
import { dictionary } from '@app/shared/config-items/dictionary-items';


@Component({
  selector: 'app-general-lis-multi',
  templateUrl: './general-lis-multi.component.html',
  styleUrls: ['./general-lis-multi.component.css']
})
export class GeneralLisMultiComponent extends ConfInterface implements OnInit, AfterViewInit {

  length: number[] = [];
  pageSize: 10;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [10, 20, 30];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any[] = [];
  panelOpenState = false;
  data_list: any[] = [];
  dictionary: any;
  @ViewChildren(MatPaginator) paginator= new QueryList<MatPaginator>();

  constructor() {
    super();
  }
  keys: string[];


  ngOnInit() {
    this.dictionary = dictionary.part3_lis_multi;
    this.keys = new Array(8).fill('key').map((u, i) => u + i);
    // console.log(this.conf);
    this.displayedColumns = this.keys;

    for (let index = 0; index < this.conf.data.length; index++) {
      this.dataSource.push([]);
      const arr = this.conf.data[index].data;
        arr.forEach((time_data, i) => {
        this.dataSource[index].push([]);
        this.dataSource[index][i] = new MatTableDataSource(this.dataTransform(time_data));
        // this.dataSource[index][i].paginator = this.paginator
      });
    }
  }

  dataTransform(time_data) {
    const data = time_data.data;
    const arr = [];
    for (let i = 0 ; i < data.length / 2; i++) {
      const sdata1 = this.getFilteredData(data[2 * i], new Array(4).fill('key').map((u, j) => u + j));
      const sdata2 = this.getFilteredData(data[2 * i + 1], new Array(4).fill('key').map((u, j) => u + (j + 4)));
      arr.push(Object.assign(sdata1, sdata2));
    }
    console.log(arr);
    return arr;
  }

  getFilteredData(obj, new_keys) {
    const newObj = {};
    const selectedDims = ['part3_xxmmc', 'part3_jg', 'part3_ckfw', 'part3_dw'];
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && selectedDims.indexOf(key) !== -1) {
        newObj[new_keys[selectedDims.indexOf(key)]] = obj[key];
      }
    }
    return newObj;
  }

  ngAfterViewInit() {
    const paginators = this.paginator.toArray();
    this.dataSource.forEach((item, index) => {
      const part_paginators = paginators.splice(0, item.length);
      item.forEach((date_item, i) => {
        date_item.paginator = part_paginators[i];
      });
    });
  }
}
