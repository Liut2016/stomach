import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {carsData, dimensions} from '../shared/cars';
import {Query} from '../shared/data';
import {Subject} from 'rxjs';
import {isNumber, isString} from 'vega-util';

@Injectable({
  providedIn: 'root'
})
export class DataLoadService {
  public visArr: any = [];
  public selectedDims = [];
  public selectedData = [];
  data_init; // [[1,2,3,……], [0,1,2,……](17维数组)]，1767 条记录，全数值型
  uniqueData = []; // [[1,2,3,……](8维), []]，1767 条记录，数值型 + 类别型
  settings;
  dim_init; // 全部维度，包括part1_xxx_val1, part1_xxx_val2
  uniqueDims; // 后端对应维度，part1_xxx形式
  groups = {};
  types = [];
  uniqueTypes = [];
  spec = {
    '$schema': 'https://vega.github.io/schema/vega-lite/v3.json',
    'description': 'A scatterplot showing horsepower and miles per gallons for various cars.',
    'data': {'values': this.selectedData},
    'mark': 'point',
    'encoding': {
      'x': {'field': 'Horsepower', 'type': 'quantitative'},
      'y': {'field': 'Miles_per_Gallon', 'type': 'quantitative'}
    }
  };
  public selectedJson = this.spec;
  public count = 0;
  // 使用订阅者模式，解决子组件之间的通信问题
  // private dimArr: any = [];
  // private dataArr: any = [];
  // private jsonArr: any = [];
  dimUpdated: Subject<any[]> = new Subject<any[]>();
  dataUpdated: Subject<any[]> = new Subject<any[]>();
  jsonUpdated: Subject<any[]> = new Subject<any[]>();

  constructor(private httpClient: HttpClient) {
    this.getAlldata().subscribe((res) => {
      // console.log(res);
      this.dim_init = res['dimensions'].map((v) => {
        if (v.split('_').length > 2) {
          this.types.push('nominal');
        } else {
          this.types.push('quantitative');
        }
        return v;
      });
      this.data_init = res['data_init'].map((v, i) => {
        const record = {};
        v.forEach((val, j) => {
          record[this.dim_init[j]] = val;
        });
        // arr.push({
        //   arrayDic[i]: v
        // })
        return record;
      });
      this.uniqueData = this.getUniqueData(this.data_init);
      this.uniqueDims = this.getUniqueDims(this.dim_init);
      // console.log(this.data_init);
      // console.log(this.uniqueDims);
      // console.log(this.uniqueTypes);
      // console.log(this.uniqueData);
      // console.log(this.data_init.slice(0, 200));
      this.initVisArray();
    });
  }

  // 从选择维度中获取后端对应独立维度
  getUniqueDims(dims) {
    this.uniqueTypes = [];
    this.types = [];
    const repeatDims = [];
    this.groups = {};
    dims.map((v, i) => {
      if (v.split('_').length > 2) {
        this.types.push('nominal');
        const key = v.split('_').slice(0, 2).join('_');
        if (this.groups[key]) {
          this.groups[key].push(i);
        } else {
          this.groups[key] = [i];
          this.uniqueTypes.push('nominal');
        }
      } else {
        this.types.push('quantitative');
        this.uniqueTypes.push('quantitative');
        this.groups[v] = [i];
      }
      repeatDims.push(v.split('_').slice(0, 2).join('_'));
      return v;
    });
    // console.log(this.groups);
    // console.log(this.uniqueTypes);
    this.uniqueDims = Array.from(new Set(repeatDims));
    return this.uniqueDims;
  }

  // 从选择数据中获取后端对应出来过的数据
  getUniqueData(data) {
    const uniqueData = [];
    data.forEach((v, i) => {
      const item = {};
      for (const key in v) {
        if (key.split('_').length > 2) {
          const newKey = key.split('_').slice(0, 2).join('_');
          if (v[key]) {
            item[newKey] = key.split('_')[2];
          }
        } else {
          item[key] = v[key];
        }
      }
      if (item['part1_cyzd1'] && item['part1_cyzd1'] < 0) {
        // console.log(item);
      } else {
        uniqueData.push(item);
      }
    });
    return uniqueData;
  }

  // 从group中获取index对应的后端key
  getDimFromGroup(id) {
    let dim = '';
    for ( const key in this.groups) {
      if (this.groups.hasOwnProperty(key)) {
        if (this.groups[key].indexOf(id) !== -1) {
          dim = key;
        }
      }
    }
    // console.log(dim);
    // console.log(this.uniqueData[0]);
    // console.log({
    //   'field': dim,
    //   'type': this.get(dim, this.uniqueData[0])
    // });
    return {
      'field': dim,
      'type': this.get(dim, this.uniqueData[0])
    };
  }

  getVal(type): any[] {
    switch (type) {
      case 'dim':
        return this.selectedDims;
      case 'data':
        return this.selectedData;
      case 'json':
        return this.visArr;
    }
  }

  initVisArray() {
    this.selectedDims = this.dim_init;
    this.selectedData = this.data_init;
    // this.getDimensions();
  }

  setVisArray(arr: any[]) {
    this.visArr = arr;
  }

  getVisArray() {
    return this.visArr;
  }

  setSelectedDims(dims: any[]) {
    // console.log(dims);
    this.selectedDims = dims;
    this.uniqueDims = this.getUniqueDims(dims);
    this.getDimensions();
    this.dimUpdated.next(this.uniqueDims);
  }

  setSelectedData(data) {
    this.selectedData = data.map((v) => {
      return this.data_init[v];
    });
    this.getDimensions();
    this.dataUpdated.next(this.selectedData);
  }

  getDimensions() {
    // console.log(this.selectedDims);
    this.uniqueData = this.getUniqueData(this.selectedData);
    // console.log(this.getDimArray(this.selectedDims, ));
    // obj 过滤
    const pick = (obj, arr) => arr.reduce((iter, val) => (val in obj && (iter[val] = obj[val]), iter), {});
    const visData =  this.uniqueData.map(v => {
      return pick(v, this.uniqueDims);
    });
    // console.log(visData);
    this.getSpecs(visData);
    // this.getCqlJson(visData, dims);
  }

  getSpecs(data) {
    this.visArr = [];
    this.settings.forEach((v, i) => {
      if (i < 8) {
        const query = Query;
        query['spec']['data'] = {
          'values': data
        };
        query['spec']['encodings'] = v['encodings'];
        this.visArr.push(this.getSigleJson(data, query));
      }
    });
    // console.log(this.visArr);
    return this.visArr;
  }

  // 根据排序结果进行推荐
  getSigleJson(data, query) {
    this.count++;
    const obj = {
      'id': this.count,
      'isAdded': false,
    };
    // 1) Specify a query config
    const opt = {};

    // 2) Build a data schema.
    const schema = cql.schema.build(data, opt);

    // 3) Specify a Query (e.g., a query for automatically selecting a mark)
    // const query = this.getSpecs(data, dims);

    // 4) Execute a CompassQL `query`.
    const output = cql.recommend(query, schema, opt);
    const result = output.result;

    // 5) Convert the result tree of SpecQueryModel into a tree of Vega-Lite specifications.
    const vlTree = cql.result.mapLeaves(result, (item) => {
        // console.log(item);
        Object.assign(obj, item.toSpec());
        return item.toSpec();
      }
    );
    // console.log(obj);
    return obj;
    // this.jsonUpdated.next(this.visArr);
  }

  getCqlJson(data, query) {
    this.visArr = [];
    // 1) Specify a query config
    const opt = {};

    // 2) Build a data schema.
    const schema = cql.schema.build(data, opt);

    // 3) Specify a Query (e.g., a query for automatically selecting a mark)
    // const query = this.getSpecs(data, dims);

    // 4) Execute a CompassQL `query`.
    const output = cql.recommend(query, schema, opt);
    const result = output.result;

    // 5) Convert the result tree of SpecQueryModel into a tree of Vega-Lite specifications.
    const vlTree = cql.result.mapLeaves(result, (item) => {
        this.count++;
        // console.log(item);
        const obj = {
          'id': this.count,
          'isAdded': false,
          ...item.toSpec()
        };
        if (this.visArr.length < 1) {
          this.visArr.push(obj);
        }
        return item.toSpec();
      }
    );
    // console.log(this.visArr);
    this.jsonUpdated.next(this.visArr);
    // console.log(result);
    // return this.visArr;
  }

  setSelectedJson(json) {
    this.selectedJson = json;
  }

  getSelectedJson() {
    return this.selectedJson;
  }

  getFile(api, file_name) {
    return this.httpClient.get(api + file_name);
  }

  get(dim, data) {
    // const types = ['oridinal', 'nominal', 'quantitative', 'temporal'];
    for (const key in data) {
      if (key === dim) {
        if (this.strDateTime(data[key])) {
          return 'temporal';
        } else if (isString(data[key])) {
          return 'nominal';
        } else if (isNumber(data[key])) {
          return 'quantitative';
        }
      }
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

  dataDimensions(data) {
    const keys = [];
    return Object.keys(data[0]).forEach((v, i) => keys.push({
      'id': i,
      'dim': v,
      'type': this.get(v, data[0]),
      ...this.hypothesisTest(this.dimData(data, v))
    }));
  }

  dimData(data, dim) {
    return data.map((v, i) => data[i][dim]);
  }

  hypothesisTest(data) {
    return {
      'p-value': '',
      'min': Math.min(data),
      'max': Math.max(data)
    };
  }

  checkGroup(id1, id2) {
    for ( const key in this.groups) {
      if (this.groups.hasOwnProperty(key)) {
        if (this.groups[key].includes(id1) && this.groups[key].includes(id2)) {
          return false;
        }else {
          return true;
        }
      }
    }
  }
  // 返回dim index 的排序结果；array 是散点图矩阵（x,y, index）;
  // return [[dim1,dim2], [dim3,dim4]]: [[0,1], [0,2]]
  getDisArr(array) {
    const count = array.length;
    const distance = new Array(count);
    const vArr = new Array(count * count);
    // 获取二维距离数组distance和具体距离数组vArr
    for (let i = 0; i < count; i++) {
      distance[i] = new Array(count);
      for (let j = i; j < count; j++) {
        distance[i][j] = this.getDistance(array[i], array[j]);
        vArr.push(distance[i][j]);
      }
    }
    // 从小到大排列
    vArr.sort((a, b) => {
      return a - b;
    });
    const res = [];
    vArr.forEach((v) => {
      if (this.checkGroup(v[0], v[1])) {
        res.push(this.getXY(distance, v));
      }}
    );
    // console.log(res);
    this.getDimFromGroup(14);
    this.settings = [];
    // 更新配置项
    for (let i = 0; i < 10; i++) {
      this.settings.push(
        {
          'type': '2d-' + this.getDimFromGroup(res[i][0]).type[0].toUpperCase() + 'x'
            + this.getDimFromGroup(res[i][1]).type[0].toUpperCase(),
          'encodings': [
            {
              'channel': '?',
              // 'bin': '?',
              // 'aggregate': '?',
              'field': this.getDimFromGroup(res[i][0]).field,
              'type': this.getDimFromGroup(res[i][0]).type
            }, {
              'channel': '?',
              // 'bin': '?',
              // 'aggregate': '?',
              'field': this.getDimFromGroup(res[i][1]).field,
              'type': this.getDimFromGroup(res[i][1]).type
            }
          ]
        }
      );
    }
    // console.log(this.settings);
    this.getDimensions();
    return res;
  }

  // 获取arr二维数组值为val的[x,j];
  getXY(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr[i].length; j++) {
        if (arr[i][j] === val) {
          return [i, j];
        }
      }
    }
    return null;
  }

  // 获取两点距离
  getDistance(a, b) {
    return (a[0] - b[0]) * (a[1] - b[1]);
  }

  // 从后端获取所有数据
  getAlldata() {
    return this.httpClient.get('http://202.117.54.92:5000/data');
  }

  // 提供给前端数据
  getDataInit() {
    return this.data_init;
  }
}
