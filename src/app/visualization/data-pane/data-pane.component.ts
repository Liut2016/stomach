import {
  Component, OnInit, Output, EventEmitter, Input, OnChanges, Inject,
  Injectable, Pipe, ChangeDetectorRef
} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';
import {carsData} from '../shared/cars';
import {isString, isNumber} from 'vega';

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';
import {getRxaData, getDimData, name, getTxt} from '@app/visualization/shared/data';
import {HttpForNowService} from '@app/core/services/http-for-now.service';
import {FilterDiagComponent} from '@app/visualization/main/main.component';
import { stateGroups1 } from '@app/visualization/shared/types';

/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

/** Flat node with expandable and level information */
export class FileFlatNode {
  constructor(
    public expandable: boolean, public filename: string, public level: number, public type: any) {
  }
}

/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
// const TREE_DATA = JSON.stringify(gettreedata());
// console.log(gettreedata());
const TREE_DATA = JSON.stringify(getRxaData());
// console.log(getRxaData());

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] {
    return this.dataChange.value;
  }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    const dataObject = JSON.parse(TREE_DATA);

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(obj: { [key: string]: any }, level: number): FileNode[] {
    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new FileNode();
      node.filename = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.type = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}

@Component({
  selector: 'app-data-pane',
  templateUrl: './data-pane.component.html',
  styleUrls: ['./data-pane.component.css']
})
export class DataPaneComponent implements OnInit, OnChanges {
  conditions; filterFlag = false;
  data = carsData;
  filteredData = {};
  public mark: string;
  public width: 300;
  public height: 300;
  public colors: string;
  // public dimension: string[] = [];
  public done: string[] = Array(9);
  public dataSimple = this.data[0];
  treeControl: FlatTreeControl<FileFlatNode>;
  treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;
  dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;
  /*  array = this.transform(this.done, this.dropDic); */
  LIST_IDS = [];
  ChineseNames = name;
  markDic = ['point', 'tick', 'bar', 'circle', 'rect'];
  // markDic = ['散点图', '跳动点图', '柱形图', '气泡图', '区域图', '折线图', '矩形图', 'rule'];
  funs = ['', 'count', 'sum', 'average', 'max', 'min', 'mean'];
  crs = ['', 'accent', 'categroy10', 'category20', 'category20b', 'category20c', 'dark2', 'paired', 'tableau10', 'tableau20'];
  cr = this.crs[0];
  settings = [{
    'title': 'functions',
    'name': 'x',
    'ops': this.funs,
    'val': this.funs[0],
    'state': [''],
    'type': '',
    'filter': ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'],
    'filtered': ''
  }, {
    'title': 'functions',
    'name': 'y',
    'ops': this.funs,
    'val': this.funs[0],
    'state': [''],
    'type': '',
    'filter': ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'],
    'filtered': ''
  }, {
    'title': 'functions',
    'name': 'column',
    'ops': this.funs,
    'val': this.funs[0],
    'state': [''],
    'type': '',
    'filtered': ''
  }, {
    'title': 'functions',
    'name': 'row',
    'ops': this.funs,
    'val': this.funs[0],
    'state': [''],
    'type': '',
    'filter': ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'],
    'filtered': ''
  }, {
    'title': 'functions',
    'name': 'color',
    'ops': this.funs,
    'val': this.funs[0],
    'color': this.crs,
    'csVal': this.crs[0],
    'state': [''],
    'type': '',
    'filtered': ''
  }, {
    'title': 'functions',
    'name': 'size',
    'ops': this.funs,
    'val': this.funs[0],
    'state': [''],
    'type': '',
    'filter': ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'],
    'filtered': ''
  // }, {
  //   'title': 'functions',
  //   'name': 'shape',
  //   'ops': this.funs,
  //   'val': this.funs[0],
  //   'state': [''],
  //   'type': '',
  //   'filtered': ''
  // }, {
  //   'title': 'functions',
  //   'name': 'detail',
  //   'ops': this.funs,
  //   'val': this.funs[0],
  //   'state': [''],
  //   'type': '',
  //   'filtered': ''
  // }, {
  //   'title': 'functions',
  //   'name': 'text',
  //   'ops': this.funs,
  //   'val': this.funs[0],
  //   'state': [''],
  //   'type': '',
  //   'filtered': ''
  }];

  @Input() setData: any;
  @Output() json = new EventEmitter<any>();

  constructor(database: FileDatabase, private cdr: ChangeDetectorRef, public dialog: MatDialog, private service: HttpForNowService) {
    this.specInit(this.setData);
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  transformer = (node: FileNode, level: number) => {
    return new FileFlatNode(!!node.children, node.filename, level, node.type);
  }

  private _getLevel = (node: FileFlatNode) => node.level;

  private _isExpandable = (node: FileFlatNode) => node.expandable;

  private _getChildren = (node: FileNode): Observable<FileNode[]> => observableOf(node.children);

  hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;

  ngOnInit() {
  }

  ngOnChanges() {
    this.specInit(this.setData);
  }

  delete(item: string) {
    if (this.filteredData.hasOwnProperty(item)) {
      delete this.filteredData[this.settings[item].state[0]];
    }
    this.settings[item].state[0] = '';
  }

  clear() {
    this.settings = [{
      'title': 'functions',
      'name': 'x',
      'ops': this.funs,
      'val': this.funs[0],
      'state': [''],
      'type': '',

      'filtered': ''
    }, {
      'title': 'functions',
      'name': 'y',
      'ops': this.funs,
      'val': this.funs[0],
      'state': [''],
      'type': '',
      'filtered': ''
    }, {
      'title': 'functions',
      'name': 'column',
      'ops': this.funs,
      'val': this.funs[0],
      'state': [''],
      'type': '',
      'filtered': ''
    }, {
      'title': 'functions',
      'name': 'row',
      'ops': this.funs,
      'val': this.funs[0],
      'state': [''],
      'type': '',
      'filtered': ''
    }, {
      'title': 'color',
      'name': 'color',
      'ops': this.crs,
      'val': this.crs[0],
      'state': [''],
      'type': '',
      'filtered': ''
    }, {
      'title': 'functions',
      'name': 'size',
      'ops': this.funs,
      'val': this.funs[0],
      'state': [''],
      'type': '',
      'filtered': ''
    // }, {
    //   'title': 'functions',
    //   'name': 'shape',
    //   'ops': this.funs,
    //   'val': this.funs[0],
    //   'state': [''],
    //   'type': '',
    //   'filtered': ''
    // }, {
    //   'title': 'functions',
    //   'name': 'detail',
    //   'ops': this.funs,
    //   'val': this.funs[0],
    //   'state': [''],
    //   'type': '',
    //   'filtered': ''
    // }, {
    //   'title': 'functions',
    //   'name': 'text',
    //   'ops': this.funs,
    //   'val': this.funs[0],
    //   'state': [''],
    //   'type': '',
    //   'filtered': ''
    }];
    this.filteredData = {};
  }

  // 重新获取数据，并输入json配置文件
  getData(dims) {
    this.service.getDimsData(dims).then((res) => {
      // console.log(res);
      this.data = res;
      this.dataSimple = res[0];
      this.draw(this.getFilteredData(res));
    });
  }

  draw(data) {
    const spec1 = {
      '$schema': 'https://vega.github.io/schema/vega-lite/v3.json',
      'description': 'A simple bar chart with embedded data.',
      'width': this.width ?  this.width : 600,
      'height': this.height ? this.height : 500,
      'data': {
        // 'values': this.data
        'values': this.transKey2Tetx(data)
      },
      'mark': this.mark,
      'encoding': this.getEncoding(this.settings)
    };
    this.json.emit(spec1);
  }

  transKey2Tetx(data) {
    return data.map( v => {
      const item = {};
      for (const key in v) {
        if (v.hasOwnProperty(key)) {
          item[getTxt(key)] = v[key];
        }
      }
      return item;
    });
  }
  // 从this.setting中得到dims
  getDims() {
    // console.log(this.settings);
    // 根据settings的state[0]获取维度数据
    const names = this.settings.map((v) => {
      if (v.state[0]) {
        return v.state[0];
      }
    });
    // console.log(names);
    // 获取某个维度的数据
    const dims = names.map(v => {
      return this.getKey(v);
    });
    return dims;
  }

  // draw函数
  getJson() {
    this.conditions = null;
    this.filterFlag = false;
    const dims = this.getDims();
    this.getData(dims);
  }

  // 更新绘制数据
  getFilteredData(data) {
    let newData = [];
    const filteredData = {};
    this.settings.forEach((v) => {
      if (v.state[0]) {
        filteredData[this.getKey(v.state[0])] = v.filtered;
      }
    });
    // console.log(filteredData);
    newData = data.filter((record, i) => {
      let flag = true;
      for (const key in record) {
        if (record.hasOwnProperty(key) && filteredData[key]) {
          if (!filteredData[key].includes(record[key])) {
            flag = false;
          }
        }
      }
      return flag;
    });
    // console.log(newData);
    return newData;
  }

  getEncoding(arr) {
    const encode = {};
    arr.forEach((v, i) => {
      if (v.state[0]) {
        // console.log(v.state[0]);
        const key = v.name;
        encode[key] = {
          'field': v.state[0],
          'type': this.getTypes(v.state[0])
        };
        if (key === 'color') {
          encode[key] = this.setColorScale(v);
        }
        if (i === 0 || i === 1) {
          encode[key] = this.setXY(v);
        }
        if (v.state[0] === '全部记录' || v.state[0] === '*') {
          encode[key] = {
            'aggregate': 'count',
            'field': '*',
            'type': 'quantitative'
          };
        }
      }
    });
    return encode;
  }

  drop(event: CdkDragDrop<string[]>) {
    // console.log('DROP!!!', event);
    // this.done.push(event.previousContainer.data[0]);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      /* copyArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex); */
      event.container.data[event.currentIndex] =
        event.previousContainer.data[event.previousIndex];
    }
    // this.filterDimData(this.getKey(event.container.data[0]));
    // this.cdr.detectChanges();
  }

  addId(i, j) {
    this.LIST_IDS.push('cdk-drop-list-' + i + '' + j);
    return i + '' + j;
  }
  transform(arr1, arr2) {
    const arr = [];
    arr1.forEach((elt, i) => {
      arr.push({state: elt, name: arr2[i]});
    });
    return arr;
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

  reDefinedType(type) {
    if (type === 'number') {
      return 'quantitative';
    } else if (type === 'string') {
      return 'nominal';
    } else if (type === 'time') {
      return 'temporal';
    } else {
      return type;
    }
  }

  // 获取数据类型
  getTypes(dim) {
    if (dim) {
      // console.log(dim);
      if (dim === '全部记录') {
        return 'quantitative';
      }
      // console.log(dim);
      const item = getDimData(dim);
      return this.reDefinedType(item['type']);
    }
  }

  // 获取后端名称类型
  getKey(dim) {
    if (dim === '全部记录') {
      return '*';
    }
    const item = getDimData(dim);
    return item['_key'];
  }

  // 获取名称
  getName(dim) {
    if (dim) {
      const item = getDimData(dim);
      return item['text'];
    }
  }

  // 若原类型为数值型，可转换为字符型。若初始类型为字符型，不可转换为数值型
  changeType(setting) {
    const item = setting.state[0];
    const type = this.getTypes(item);
    if (type === 'nominal') {
      this.changeTypeNumber(item);
    } else if (type === 'quantitative') {
      this.changeTypeString(item);
    }
  }

  changeTypeNumber(item) {
    for (const key in this.dataSimple) {
      if (key === item) {
        this.dataSimple[key] = 0;
      }
    }
    // console.log(this.dataSimple[item]);
  }

  changeTypeString(item) {
    for (const key in this.dataSimple) {
      if (key === item) {
        this.dataSimple[key] = '123';
      }
    }
    // console.log(this.dataSimple[item]);
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

  StringisNumber(value) {
    for (const key in this.dataSimple) {
      if (key === value) {
        return !Number.isNaN(Number(this.dataSimple[key]));
      }
    }
  }

  is_numeric(value) {
    if (typeof (value) === 'object') {
      return false;
    } else {
      return !Number.isNaN(Number(value));
    }
  }

  specInit(spec) {
    if (!!spec) {
      for (const key in spec.encoding) {
        if (spec.encoding.hasOwnProperty(key)) {
          this.settings.forEach((v) => {
            if (v.name === key) {
              if (spec.encoding[key].field === '*') {
                v.val = spec.encoding[key].aggregate;
                v.state[0] = '全部记录';
              } else {
                v.state[0] = spec.encoding[key].field;
              }
            }
          });
        }
      }
      this.mark = spec.mark;
      this.width = spec.width;
      this.height = spec.height;
    }
  }

  setColorScale(color) {
    const type = this.getTypes(color.state[0]);
    const item = {
      'field': color.state[0],
      'type': type,
    };
    if ( type === 'quantitative') {
      return Object.assign(item, {'aggregate': color.val});
    }else if (color.csVal) {
      return Object.assign(item, {'scale': { 'scheme': color.csVal }});
    } else {
      return item;
    }
  }

  setXY(xy) {
    return {
      'field': xy.state[0],
      'type': this.getTypes(xy.state[0]),
      'aggregate': xy.val
    };
  }

  // 获取维度对应的vals
  filterDimData(dim) {
    // console.log(dim);
    this.service.getDimvals(dim).then((res) => {
      console.log(res);
      this.filteredData[dim] = res.dim;
      // this.settings[0].filter = this.filteredData[dim];
    });
  }

  showFilter() {
    this.filterFlag = true;
    const dialogRef = this.dialog.open(FilterDiagComponent, {
      width: '1000px',
      data: {keys: Array.from(new Set(this.getDims())), conditions: this.conditions}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      console.log(result);
      this.draw(result.data);
      this.conditions = result.conditions;
      if (result.conditions === [
        {
          isLogicRemove: false,
          isAddRemove: true,
          isClearRemove: false,
          isNumber: false,
          isNotNumber: true,
          isTime: false,
          isSelect: false,
          stateGroupOptions: stateGroups1,
          operators: [],
          inputTypeValue: null,
          selectedValue: null,
          logicValue: null,
          inputValue: null,
          inputValue1: null,
          inputValue2: null,
          startTime: null,
          endTime: null,
          form_type: null,
          databaseField: null
        }
      ]) {
        this.filterFlag = false;
        this.getJson();
      }
    });
  }
}
