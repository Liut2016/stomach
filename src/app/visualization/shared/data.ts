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
    'records': '全部记录',
};

export const getRxaData = () => {
  return getTree();
  // return {...{'全部记录': 'number'}, ...deepCopy(stateGroups1)};
};
function getTree() {
  const res = {'全部记录' : 'number'};
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

export const getTxt = (dim) => {
  let res = null;
  stateGroups1.forEach((v) => {
    for (const key in v) {
      if (v.hasOwnProperty(key)) {
        const item = {};
        v['medicalformsoptions'].forEach((u) => {
          if (u['_key'] === dim || u['text'] === dim) {
            res =  u['text'];
          }
        });
        // console.log(v[key]);
      }
    }
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
