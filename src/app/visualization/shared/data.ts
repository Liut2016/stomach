import { stateGroups1, newlis } from '@app/visualization/shared/types';
export const name = {
    'x': 'X轴',
    'y': 'Y轴',
    'column': '多列',
    'row': '多行',
    'color': '颜色',
    'size': '大小',
    'shape': '图标',
    'detail':  '细节',
    'text': '文字',
    'point': '气泡图',
    'tick': '跳动点图',
    'bar': '柱形图',
    'circle': '散点图',
    'area': '流形图',
    'line': '折线图',
    'rect': '矩形图',
    'functions': '聚合函数',
    'records': '全部记录'
};
export const rxaData = {
  '住院病案首页提取信息': {
    // '病案号': ['bah', 'number'],
    '住院次数': ['zycs', 'number'],
    '医疗付款方式': ['ylfkfs', 'string'],
    // '姓名': ['xm', 'string'],
    '出生日期': ['csrq', 'date'],
    '年龄': ['nl', 'number'],
    '体重': ['tz', 'number'],
    '身高': ['sg', 'number'],
    '性别': ['xb', 'string'],
    '现住址': ['xzz', 'string'],
    '出生省份': ['cssf', 'string'],
    '出生地市': ['csds', 'string'],
    '职业': ['zy', 'string'],
    '民族': ['mz', 'string'],
    // '联系电话': ['halxdh', 'number'],
    // '联系人姓名': ['lxrxm', 'string'],
    // '联系人电话': ['lxrdh', 'number'],
    '入院病室': ['rybs', 'string'],
    // '入院时间': ['rysj', 'date'],
    '入院诊断': ['ryzd', 'string'],
    // '出院时间': ['cysj', 'date'],
    '出院诊断1': ['cyzd1', 'string'],
    '出院诊断2': ['cyzd2', 'string'],
    '出院诊断3': ['cyzd3', 'string'],
    '实际住院天数': ['sjzyts', 'number'],
    // '病理号': ['blh', 'number'],
    '病理诊断': ['blzd', 'string'],
    // '手术日期': ['ssrq', 'date'],
    '手术名称': ['ssmc', 'string'],
    '麻醉方式': ['mzfs', 'string']
  },
  '治疗费用': {
    '病案号': ['bah', 'number'],
    '住院总费用': ['zyzfy', 'number'],
    '一般医疗服务费': ['ybylfwf', 'number'],
    '一般治疗操作费': ['ybzlczf', 'number'],
    '护理费': ['hlf', 'number'],
    '综合医疗服务类其他费用': ['zhylfwlqtfy', 'number'],
    '病理诊断费': ['blzdf', 'number'],
    '实验室诊断费': ['syszdf', 'number'],
    '影像学诊断费': ['yxxzdf', 'number'],
    '临床诊断项目费': ['lczdxmf', 'number'],
    '非手术治疗项目费': ['fsszlxmf', 'number'],
    '手术治疗费': ['sszlf', 'number'],
    '麻醉费': ['mzf', 'number'],
    '手术费': ['ssf', 'number'],
    '康复费': ['kff', 'number'],
    '中医治疗费': ['zyzlf', 'number'],
    '西药费': ['xyf', 'number'],
    '抗菌药物费用': ['kjywfy', 'number'],
    '中成药费': ['zcyf', 'number'],
    '检查用一次性医用材料费': ['jcyycxyyclf', 'number'],
    '治疗用一次性医用材料费': ['zlyycxyyclf', 'number'],
    '手术用一次性医用材料费': ['ssyycxyyclf', 'number'],
  }
};

// export const Types = new Array(26).fill('quantitative');
export const Types = ['quantitative', 'quantitative', 'quantitative', 'nominal', 'quantitative', 'nominal', 'nominal', 'quantitative'];

export const getRxaData = () => {
  return getTree();
  // return {...{'全部记录': 'number'}, ...deepCopy(stateGroups1)};
};

function deepCopy(obj) {
  const result = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (Array.isArray(obj[key])) {
        result[key] = obj[key][1];
      } else {
        result[key] = deepCopy(obj[key]);   // 递归复制
      }
    }
  }
  return result;
}
function getTree() {
  const res = {};
  stateGroups1.forEach((v) => {
    for ( const key in v) {
      if (v.hasOwnProperty(key)) {
        res[v['medicalforms']] = {};
        v['medicalformsoptions'].forEach((u) => {
          if (u['type'] === 'select') {
            res[v['medicalforms']][u['text']] = 'string';
          } else if (u['type'] === 'time') {
            res[v['medicalforms']][u['text']] = 'date';
          } else {
            res[v['medicalforms']][u['text']] = u['type'];
          }
        });
        // console.log(v[key]);
      }
    }
  });
  console.log(res);
  return res;
}

export const getDimData = (dim) => {
  let res = null ;
 stateGroups1.forEach((v) => {
   for ( const key in v) {
     if (v.hasOwnProperty(key)) {
       // console.log(v[key]);
       if (v[key]['text'] === dim || v[key]['_key'] === dim) {
         // result[key] = obj[key][1];
         res =  v[key];
       } else if ( Array.isArray(v[key])) {
         v[key].forEach( (u) => {
           // console.log(u);
           if (u['text'] === dim || u['_key'] === dim) {
             res =  u ;
           }
         });
       }
   }
 }
 });
 return res;
};

function getKey(obj, dim) {
  const result = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj(key)['text'] === dim) {
        // result[key] = obj[key][1];
        result[key] = obj[key]['_key'];
      } else {
        result[key] = getKey(obj[key], dim);   // 递归复制
      }
    }
  }
  return result;
}

export const rxaDic = (dims) => {
  const res = [];
  const data = {};
  Object.keys(rxaData).forEach((v, i) => {
    // console.log(v);
    data[v] = {};
    Object.keys(rxaData[v]).forEach((u) => {
      if (dims.indexOf(u) !== -1) {
        res.push(rxaData[v][u]);
      }
    });
  });
  return res;
};

export const Query = {
  'spec': {
    'data': {'values': ''},
    'mark': '?',
    'encodings': [
      {
        'channel': '?',
        'field': 'Major_Genre',
        'type': 'nominal'
      }, {
        'channel': '?',
        'field': 'Creative_Type',
        'type': 'nominal'
      }
    ]
  },
  'nest': [
    {
      'groupBy': ['field', 'aggregate', 'bin', 'timeUnit', 'stack'],
      'orderGroupBy': 'aggregationQuality'
    },
    {
      'groupBy': [{
        'property': 'channel',
        'replace': {
          'x': 'xy', 'y': 'xy',
          'color': 'style', 'size': 'style', 'shape': 'style', 'opacity': 'style',
          'row': 'facet', 'column': 'facet'
        }
      }],
      'orderGroupBy': 'effectiveness'
    },
    {
      'groupBy': ['channel'],
      'orderGroupBy': 'effectiveness'
    }
  ],
  'orderBy': 'effectiveness',
  'config': {
    'autoAddCount': true
  }
};
