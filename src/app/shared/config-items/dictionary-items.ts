export const dictionary = {
  part2_yz: {
    part2_zyh: '住院号',
    part2_yzlb: '医嘱类别',
    part2_xmmc: '项目名称',
    part2_xmzl: '项目总量',
    part2_mcjl: '每次剂量',
    part2_gg: '规格',
    part2_jldw: '剂量单位',
    part2_zxdw: '最小单位',
    part2_jjdw: '计价单位',
    part2_pcdm: '频次代码',
    part2_pcmc: '频次名称',
    part2_yfmc: '用法名称',
    part2_kssj: '开始时间',
    part2_jssj: '结束时间'
  },
  part3_lis: {
    part3_pid: '',
    part3_hzxm: '患者姓名',
    part3_zyh: '住院号',
    part3_zylsh: '住院流水号',
    part3_zycs: '住院次数',
    part3_xmmc: '检查项目',
    part3_xxmmc: '具体项目',
    part3_sj: '检查时间',
    part3_jg: '检查结果',
    part3_ckfw: '参考范围',
    part3_dw: '单位'
  },
  part5_result: {
    no:'序号',
    part5_zyh: '住院号',
    part5_hzxm: '姓名',
    part5_jclb: '检查类别',
    part5_jcsj: '检查时间',
    reference: '手术前后',
  },
  part5_dicresult: {
    'part5_jclb':'检查类别',
    'part5_jcbw': '检查部位',
    'part5_jcsj': '检查时间',
    'part5_jcjgms': '检查结果描述',
    'part5_jczd': '检查诊断',
  },
  part1_home: {
    'part1_pid': '',
    'part1_bah': '病案号',
    'part1_xm': '姓名',
    'part1_zzd': '主诊断',
    'part1_rysj': '入院时间',
    'part1_sjzyts': '实际住院天数',
    'part1_nl': '年龄',
    'part1_cysj': '出院时间',
    'part1_xb': '性别',
    'highlight': '',
    'part1_zyh': '住院号',
    'part1_zylsh': '住院流水号',
    'part1_sr': '出生日期',
    'part1_xzz': '现住址',
    'part1_csd': '出生地',
    'part1_zy': '职业',
    'part1_mz': '民族',
    'part1_zzdbm': '主诊断编码',
    'part1_ssrq': '手术日期',
    'part1_ssmc': '手术名称',
    'part1_qkdj': '切口等级',
    'part1_mzfs': '麻醉方式',

  },
  filter_keys: [
     {
        medicalforms: '病案首页',
        medicalformsoptions: [
          {
            'text': '住院流水号',
            '_key': 'part1_zylsh',
            'belong': '病案首页',
            'type': 'string'
          },
          {
            'text': '住院号',
            '_key': 'part1_zyh',
            'belong': '病案首页',
            'type': 'number'
          },
          {
            'text': '姓名',
            '_key': 'part1_xm',
            'belong': '病案首页',
            'type': 'string'
          },
          {
            'text': '出生日期',
            '_key': 'part1_sr',
            'belong': '病案首页',
            'type': 'time'
          },
          {
            'text': '年龄',
            '_key': 'part1_nl',
            'belong': '病案首页',
            'type': 'number'
          },
          {
            'text': '性别',
            '_key': 'part1_xb',
            'belong': '病案首页',
            'type': 'select'
          },
          {
            'text': '现住址',
            '_key': 'part1_xzz',
            'belong': '病案首页',
            'type': 'string'
          },
          {
            'text': '出生地',
            '_key': 'part1_csd',
            'belong': '病案首页',
            'type': 'string'
          },
          {
            'text': '职业',
            '_key': 'part1_zy',
            'belong': '病案首页',
            'type': 'string'
          },
          {
            'text': '民族',
            '_key': 'part1_mz',
            'belong': '病案首页',
            'type': 'string'
          },
          {
            'text': '入院时间',
            '_key': 'part1_rysj',
            'belong': '病案首页',
            'type': 'time'
          },
          {
            'text': '出院时间',
            '_key': 'part1_cysj',
            'belong': '病案首页',
            'type': 'time'
          },
          {
            'text': '实际住院天数',
            '_key': 'part1_sjzyts',
            'belong': '病案首页',
            'type': 'number'
          },
          {
            'text': '主诊断',
            '_key': 'part1_zzd',
            'belong': '病案首页',
            'type': 'string'
          },
          {
            'text': '主诊断编码',
            '_key': 'part1_zzdbm',
            'belong': '病案首页',
            'type': 'string'
          },
          {
            'text': '手术日期',
            '_key': 'part1_ssrq',
            'belong': '病案首页',
            'type': 'time'
          },
          {
            'text': '手术名称',
            '_key': 'part1_ssmc',
            'belong': '病案首页',
            'type': 'string'
          },
          {
            'text': '切口等级',
            '_key': 'part1_qkdj',
            'belong': '病案首页',
            'type': 'string'
          },
          {
            'text': '麻醉方式',
            '_key': 'part1_mzfs',
            'belong': '病案首页',
            'type': 'string'
          }
        ]
      },
     /* {
        medicalforms: '医嘱',
        medicalformsoptions: [
          {
            'text': '医嘱类别',
            '_key': 'part2_yzlb',
            'belong': '医嘱',
            'type': 'string'
          },
          {
            'text': '项目名称',
            '_key': 'part2_xmmc',
            'belong': '医嘱',
            'type': 'string'
          },
          {
            'text': '项目总量',
            '_key': 'part2_xmzl',
            'belong': '医嘱',
            'type': 'string'
          },
          {
            'text': '频次代码',
            '_key': 'part2_pcdm',
            'belong': '医嘱',
            'type': 'string'
          },
          {
            'text': '频次名称',
            '_key': 'part2_pcmc',
            'belong': '医嘱',
            'type': 'string'
          },
          {
            'text': '开始时间',
            '_key': 'part2_kssj',
            'belong': '医嘱',
            'type': 'time'
          },
          {
            'text': '结束时间',
            '_key': 'part2_jssj',
            'belong': '医嘱',
            'type': 'time'
          }
        ]
      },*/
       {
         medicalforms: '影像报告',
         medicalformsoptions: [
          {
            'text': '检查类别',
            '_key': 'part5_jclb',
            'belong': '影像报告',
            'type': 'string'
          },
          {
            'text': '检查部位',
            '_key': 'part5_jcbw',
            'belong': '影像报告',
            'type': 'string'
          },
          {
            'text': '检查时间',
            '_key': 'part5_jcsj',
            'belong': '影像报告',
            'type': 'time'
          },
          {
            'text': '检查结果描述',
            '_key': 'part5_jcjgms',
            'belong': '影像报告',
            'type': 'string'
          },
          {
            'text': '检查诊断',
            '_key': 'part5_jczd',
            'belong': '影像报告',
            'type': 'string'
          }
        ]
      },
  ],
  rule_keys: [
    {
       medicalforms: '病案首页',
       medicalformsoptions: [
         {
           'text': '住院流水号',
           '_key': 'part1_zylsh',
           'belong': '病案首页',
           'type': 'string'
         },
         {
           'text': '住院号',
           '_key': 'part1_zyh',
           'belong': '病案首页',
           'type': 'number'
         },
         {
           'text': '姓名',
           '_key': 'part1_xm',
           'belong': '病案首页',
           'type': 'string'
         },
         {
           'text': '出生日期',
           '_key': 'part1_sr',
           'belong': '病案首页',
           'type': 'time'
         },
         {
           'text': '年龄',
           '_key': 'part1_nl',
           'belong': '病案首页',
           'type': 'number'
         },
         {
           'text': '性别',
           '_key': 'part1_xb',
           'belong': '病案首页',
           'type': 'select'
         },
         {
           'text': '现住址',
           '_key': 'part1_xzz',
           'belong': '病案首页',
           'type': 'string'
         },
         {
           'text': '出生地',
           '_key': 'part1_csd',
           'belong': '病案首页',
           'type': 'string'
         },
         {
           'text': '职业',
           '_key': 'part1_zy',
           'belong': '病案首页',
           'type': 'string'
         },
         {
           'text': '民族',
           '_key': 'part1_mz',
           'belong': '病案首页',
           'type': 'string'
         },
         {
           'text': '入院时间',
           '_key': 'part1_rysj',
           'belong': '病案首页',
           'type': 'time'
         },
         {
           'text': '出院时间',
           '_key': 'part1_cysj',
           'belong': '病案首页',
           'type': 'time'
         },
         {
           'text': '实际住院天数',
           '_key': 'part1_sjzyts',
           'belong': '病案首页',
           'type': 'number'
         },
         {
           'text': '主诊断',
           '_key': 'part1_zzd',
           'belong': '病案首页',
           'type': 'string'
         },
         {
           'text': '主诊断编码',
           '_key': 'part1_zzdbm',
           'belong': '病案首页',
           'type': 'string'
         },
         {
           'text': '手术日期',
           '_key': 'part1_ssrq',
           'belong': '病案首页',
           'type': 'time'
         },
         {
           'text': '手术名称',
           '_key': 'part1_ssmc',
           'belong': '病案首页',
           'type': 'string'
         },
         {
           'text': '切口等级',
           '_key': 'part1_qkdj',
           'belong': '病案首页',
           'type': 'string'
         },
         {
           'text': '麻醉方式',
           '_key': 'part1_mzfs',
           'belong': '病案首页',
           'type': 'string'
         }
       ]
     },
    /* {
       medicalforms: '医嘱',
       medicalformsoptions: [
         {
           'text': '医嘱类别',
           '_key': 'part2_yzlb',
           'belong': '医嘱',
           'type': 'string'
         },
         {
           'text': '项目名称',
           '_key': 'part2_xmmc',
           'belong': '医嘱',
           'type': 'string'
         },
         {
           'text': '项目总量',
           '_key': 'part2_xmzl',
           'belong': '医嘱',
           'type': 'string'
         },
         {
           'text': '频次代码',
           '_key': 'part2_pcdm',
           'belong': '医嘱',
           'type': 'string'
         },
         {
           'text': '频次名称',
           '_key': 'part2_pcmc',
           'belong': '医嘱',
           'type': 'string'
         },
         {
           'text': '开始时间',
           '_key': 'part2_kssj',
           'belong': '医嘱',
           'type': 'time'
         },
         {
           'text': '结束时间',
           '_key': 'part2_jssj',
           'belong': '医嘱',
           'type': 'time'
         }
       ]
     },*/
      {
        medicalforms: '影像报告',
        medicalformsoptions: [
         {
           'text': '检查类别',
           '_key': 'part5_jclb',
           'belong': '影像报告',
           'type': 'string'
         },
         {
           'text': '检查部位',
           '_key': 'part5_jcbw',
           'belong': '影像报告',
           'type': 'string'
         },
         {
           'text': '检查时间',
           '_key': 'part5_jcsj',
           'belong': '影像报告',
           'type': 'time'
         },
         {
           'text': '检查结果描述',
           '_key': 'part5_jcjgms',
           'belong': '影像报告',
           'type': 'string'
         },
         {
           'text': '检查诊断',
           '_key': 'part5_jczd',
           'belong': '影像报告',
           'type': 'string'
         }
       ]
     },
     {
       medicalforms: '实验室检查',
       medicalformsoptions: [
        {
          'text': '总蛋白',
          'belong': '平诊肝功十四项',
          'type': 'string'
        },
        {
         'text': '球蛋白',
         'belong': '平诊肝功十四项',
         'type': 'string'
       },
       {
         'text': '白球比',
         'belong': '平诊肝功十四项',
         'type': 'string'
       },
       {
         'text': '白蛋白',
         'belong': '平诊肝功十四项',
         'type': 'string'
       },
       {
         'text': 'a-l岩藻糖苷酶',
         'belong': '平诊肝功十四项',
         'type': 'string'
       },
       {
         'text': 'γ谷氨酰氨转肽酶',
         'belong': '平诊肝功十四项',
         'type': 'string'
       },
       {
         'text': '碱性磷酸酶',
         'belong': '平诊肝功十四项',
         'type': 'string'
       },
       {
         'text': '总胆红素',
         'belong': '平诊肝功十四项',
         'type': 'string'
       },
       {
         'text': '谷草转氨酶',
         'belong': '平诊肝功十四项',
         'type': 'string'
       },
       {
         'text': '谷丙转氨酶',
         'belong': '平诊肝功十四项',
         'type': 'string'
       },
       {
         'text': '间接胆红素',
         'belong': '平诊肝功十四项',
         'type': 'string'
       },
       {
         'text': '前白蛋白',
         'belong': '平诊肝功十四项',
         'type': 'string'
       },
       {
         'text': '总胆汁酸',
         'belong': '平诊肝功十四项',
         'type': 'string'
       },
       {
         'text': '谷草/谷丙',
         'belong': '平诊肝功十四项',
         'type': 'string'
       },
       {
         'text': '总胆固醇',
         'belong': '平诊肝功十四项',
         'type': 'string'
       },
       {
         'text': '直接胆红素',
         'belong': '平诊肝功十四项',
         'type': 'string'
       },
       {
         'text': '超氧化物歧化酶',
         'belong': '平诊肝功十四项',
         'type': 'string'
       },
      ]
    }
 ]
};
