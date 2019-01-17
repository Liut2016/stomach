export const survey_list = [
    {
        step_description: '住院病案首页提取信息',
        items: [
          {
            type: 'table',
            title: '住院病案首页提取信息',
            required: false,
            cols: 6,
            layout: [
              { type: 'text', cols: 1, rows: 1, text: '编号 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_pid', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '住院号 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_zyh', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '病案号 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_zylsh', _value: ''}},
              
              { type: 'text', cols: 1, rows: 1, text: '姓名 :' },
              { type: 'input', cols: 1, rows: 1,key_value: {_key: 'part1_xm', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '出生年月 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_sr', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '年龄 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_nl', _value: ''} },

              { type: 'text', cols: 1, rows: 1, text: '民族 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_mz', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '联系电话 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_dwdh', _value: ''} },
              { type: 'text', cols: 1, rows: 1, text: '职业 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_zy', _value: ''}},
             
              { type: 'text', cols: 1, rows: 1, text: '出生地 :' },
              { type: 'input', cols: 2, rows: 1, key_value: {_key: 'part1_csd', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '居住地 :' },
              { type: 'input', cols: 2, rows: 1, key_value: {_key: 'part1_xzz', _value: ''}},

              { type: 'text', cols: 1, rows: 1, text: '联系人姓名 :' },
              { type: 'input', cols: 2, rows: 1, key_value: {_key: 'part1_lxrxm', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '联系人电话 :' },
              { type: 'input', cols: 2, rows: 1, key_value: {_key: 'part1_dwdh', _value: ''}},

              { type: 'text', cols: 1, rows: 1, text: '入院时间 :' },
              { type: 'input', cols: 2, rows: 1, key_value: {_key: 'part1_rysj', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '入院诊断 :' },
              { type: 'input', cols: 2, rows: 1, key_value: {_key: 'part1_zzd', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '出院时间 :' },
              { type: 'input', cols: 2, rows: 1, key_value: {_key: 'part1_cysj', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '实际住院天数 :' },
              { type: 'input', cols: 2, rows: 1,key_value: {_key: 'part1_sjzyts', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '主诊断编号 :' },
              { type: 'input', cols: 2, rows: 1, key_value: {_key: 'part1_zzdbh', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '手术日期 :' },
              { type: 'input', cols: 2, rows: 1,key_value: {_key: 'part1_ssrq', _value: ''} },

            //   { type: 'text', cols: 1, rows: 1, text: '肿瘤类型 :' },
            //   { type: 'text', cols: 4, rows: 1, text: '浸润性导管癌' },
            //   { type: 'text', cols: 1, rows: 1, text: '淋巴结转移情况 :' },
            //   { type: 'text', cols: 4, rows: 1, text: '淋巴结转移5/10' },
            //   { type: 'text', cols: 1, rows: 1, text: '抗体阳性 :' },
            //   { type: 'text', cols: 4, rows: 1, text: '' },
              { type: 'text', cols: 1, rows: 1, text: '手术名称 :' },
              { type: 'input', cols: 2, rows: 1, key_value: {_key: 'part1_ssmc', _value: ''}}, 
              { type: 'text', cols: 1, rows: 1, text: '切口等级' },
              { type: 'input', cols: 2, rows: 1,key_value: {_key: 'part1_qkdj', _value: ''} },
              { type: 'text', cols: 1, rows: 1, text: '麻醉方式 :' },
              { type: 'input', cols: 2, rows: 1, key_value: {_key: 'part1_mzfs', _value: ''}},
            ]
          }
        ]
      },
    {
        step_description: '入院病例',
        items: [
            {
                type: 'table',
                title: '入院病例',
                required: false,
                cols: 6,
                layout: [
                    { type: 'text', cols: 1, rows: 1, text: '主诉:' },
                    { type: 'text', cols: 2, rows: 1, text: '左乳包块1年月let element'},
                    { type: 'text', cols: 1, rows: 1, text: '现病史:' },
                    { type: 'text', cols: 2, rows: 1, text: '在外院给予抗let element治疗' },
                    { type: 'text', cols: 1, rows: 1, text: '治疗时间:' },
                    { type: 'radio', cols: 1, rows: 1, options: ['术后', '术前'], key_value: { _key: '有无头晕', _value: '' }},
                    { type: 'text', cols: 1, rows: 1, text: '治疗次数:' },
                    { type: 'text', cols: 1, rows: 1, text: '1次' },
                    { type: 'text', cols: 1, rows: 1, text: '治疗方式:' },
                    { type: 'text', cols: 1, rows: 1, text: '化疗' },
                    { type: 'text', cols: 1, rows: 1, text: '靶向治疗:' },
                    { type: 'text', cols: 1, rows: 1, text: '赫赛丁' },
                    { type: 'text', cols: 1, rows: 1, text: '靶向治疗剂量:' },

                    { type: 'text', cols: 1, rows: 1, text: '160mg/m2' },
                    { type: 'text', cols: 1, rows: 1, text: '化疗方案:' },
                    { type: 'text', cols: 1, rows: 1, text: 'AC-T' },
                    { type: 'text', cols: 1, rows: 1, text: '化疗剂量:' },
                    { type: 'text', cols: 1, rows: 1, text: '60mg/m2' },
                    { type: 'text', cols: 1, rows: 1, text: '血压:' },
                    { type: 'text', cols: 1, rows: 1, text: '80/120 mmHg' },
                    { type: 'text', cols: 1, rows: 1, text: '体重:' },
                    { type: 'text', cols: 1, rows: 1, text: '65kg' },
                    { type: 'text', cols: 1, rows: 1, text: '身高:' },
                    { type: 'text', cols: 1, rows: 1, text: '170cm' },
                    { type: 'text', cols: 1, rows: 1, text: '手术史:' },
                    { type: 'text', cols: 1, rows: 1, text: '乳腺纤维腺瘤切除' },
                    { type: 'text', cols: 1, rows: 1, text: '绝经日期:' },

                    { type: 'text', cols: 1, rows: 1, text: '2015/6' },
                    { type: 'text', cols: 1, rows: 1, text: '月经:' },
                    { type: 'text', cols: 1, rows: 1, text: '正常' },
                    { type: 'text', cols: 1, rows: 1, text: '伴随疾病:' },
                    { type: 'text', cols: 1, rows: 1, text: '高血压' },
                    { type: 'text', cols: 1, rows: 1, text: '家族史:' },
                    { type: 'text', cols: 1, rows: 1, text: '母亲患乳腺癌死亡' },
                    { type: 'text', cols: 1, rows: 1, text: '专科体检:' },
                    { type: 'input', cols: 5, rows: 1, key_value: { _key: '出生日期', _value: '' }, validType: 'other' }
                ]
            },
            /*{ type: 'input', title: '主诉', key_value: { _key: '出生日期', _value: '' }, validType: 'other' },
            { type: 'input', title: '现病史', key_value: { _key: '出生日期', _value: '' }, validType: 'other' },
            { type: 'selector', title: '治疗时间', key_value: { _key: '民族', _value: ''},  placeholder: '点击选择治疗时间', options: ['术后', '术前']},
            { type: 'input', title: '治疗次数', key_value: { _key: '出生日期', _value: '' }, validType: 'other', right_text: '次' },
            { type: 'input', title: '治疗方式', key_value: { _key: '出生日期', _value: '' }, validType: 'other'},
            { type: 'input', title: '靶向治疗', key_value: { _key: '出生日期', _value: '' }, validType: 'other'},
            { type: 'input', title: '靶向治疗剂量', key_value: { _key: '出生日期', _value: '' }, validType: 'other'},
            { type: 'input', title: '化疗方案', key_value: { _key: '出生日期', _value: 'AC-T' }, validType: 'other'},
            { type: 'input', title: '化疗剂量', key_value: { _key: '出生日期', _value: '' }, validType: 'other'},
            { type: 'input', title: '治疗方式', key_value: { _key: '出生日期', _value: '' }, validType: 'other'},
            { type: 'input', title: '血压', key_value: { _key: '出生日期', _value: '' }, validType: 'other', right_text: 'mmHg' },
            { type: 'input', title: '体重', key_value: { _key: '出生日期', _value: '' }, validType: 'other', right_text: '公斤' },
            { type: 'input', title: '身高', key_value: { _key: '出生日期', _value: '' }, validType: 'other', right_text: '厘米' },
            { type: 'input', title: '手术史', key_value: { _key: '出生日期', _value: '' }, validType: 'other'},
            { type: 'date', title: '绝经日期', key_value: { _key: '出生日期', _value: 'Tue Jul 10 2018 00:00:00 GMT+0800 (CST)' }},
            { type: 'input', title: '月经', key_value: { _key: '出生日期', _value: '' }, validType: 'other'},
            { type: 'input', title: '伴随疾病', key_value: { _key: '出生日期', _value: '' }, validType: 'other'},
            { type: 'input', title: '家族史', key_value: { _key: '出生日期', _value: '' }, validType: 'other'},
            { type: 'input', title: '专科体检', key_value: { _key: '出生日期', _value: '' }, validType: 'other'},*/
        ]
    },
  {
    step_description: '病程记录',
    items: [
      { type : 'classified-lists', title : '医嘱', key_value: { _key: '病历', _value: '' },
        data : [
          {
            type: '嘱托长嘱',
            data: [
              {
                "part2_pid": 201879,
                "part2_zyh": "ZY010001211080",
                "part2_yzlb": "嘱托长嘱",
                "part2_xmmc": "流食",
                "part2_xmzl": 1,
                "part2_mcjl": 0,
                "part2_gg": null,
                "part2_jldw": null,
                "part2_zxdw": null,
                "part2_jjdw": "个",
                "part2_pcdm": "QD",
                "part2_pcmc": "每天一次",
                "part2_yfmc": null,
                "part2_kssj": "2015-1-23",
                "part2_jssj": "2015-1-28 10:26:37"
              },
              {
                "part2_pid": 201880,
                "part2_zyh": "ZY010001211080",
                "part2_yzlb": "嘱托长嘱",
                "part2_xmmc": "按普外科常规护理",
                "part2_xmzl": 1,
                "part2_mcjl": 0,
                "part2_gg": null,
                "part2_jldw": null,
                "part2_zxdw": null,
                "part2_jjdw": "个",
                "part2_pcdm": "WPC",
                "part2_pcmc": "无频次",
                "part2_yfmc": null,
                "part2_kssj": "2015-1-23",
                "part2_jssj": "2015-1-28 10:26:41"
              },
            ]
          },
          {
            type: '长期医嘱',
            data: [
              {
                "part2_pid": 201879,
                "part2_zyh": "ZY010001211080",
                "part2_yzlb": "嘱托长嘱",
                "part2_xmmc": "流食",
                "part2_xmzl": 1,
                "part2_mcjl": 0,
                "part2_gg": null,
                "part2_jldw": null,
                "part2_zxdw": null,
                "part2_jjdw": "个",
                "part2_pcdm": "QD",
                "part2_pcmc": "每天一次",
                "part2_yfmc": null,
                "part2_kssj": "2015-1-23",
                "part2_jssj": "2015-1-28 10:26:37"
              },
              {
                "part2_pid": 201880,
                "part2_zyh": "ZY010001211080",
                "part2_yzlb": "嘱托长嘱",
                "part2_xmmc": "按普外科常规护理",
                "part2_xmzl": 1,
                "part2_mcjl": 0,
                "part2_gg": null,
                "part2_jldw": null,
                "part2_zxdw": null,
                "part2_jjdw": "个",
                "part2_pcdm": "WPC",
                "part2_pcmc": "无频次",
                "part2_yfmc": null,
                "part2_kssj": "2015-1-23",
                "part2_jssj": "2015-1-28 10:26:41"
              },
            ]
          },
          {
            type: '临时医嘱',
            data: [
              {
                "part2_pid": 201879,
                "part2_zyh": "ZY010001211080",
                "part2_yzlb": "嘱托长嘱",
                "part2_xmmc": "流食",
                "part2_xmzl": 1,
                "part2_mcjl": 0,
                "part2_gg": null,
                "part2_jldw": null,
                "part2_zxdw": null,
                "part2_jjdw": "个",
                "part2_pcdm": "QD",
                "part2_pcmc": "每天一次",
                "part2_yfmc": null,
                "part2_kssj": "2015-1-23",
                "part2_jssj": "2015-1-28 10:26:37"
              },
              {
                "part2_pid": 201880,
                "part2_zyh": "ZY010001211080",
                "part2_yzlb": "嘱托长嘱",
                "part2_xmmc": "按普外科常规护理",
                "part2_xmzl": 1,
                "part2_mcjl": 0,
                "part2_gg": null,
                "part2_jldw": null,
                "part2_zxdw": null,
                "part2_jjdw": "个",
                "part2_pcdm": "WPC",
                "part2_pcmc": "无频次",
                "part2_yfmc": null,
                "part2_kssj": "2015-1-23",
                "part2_jssj": "2015-1-28 10:26:41"
              },
            ]
          }
        ]}
    ]
  },
    {
        step_description: '一般检查项目',
      items: [
        {
          type : 'lis',
          title : '检查项目',
          data : [
            {
              "type": "肾功五项+肝功十三项+电解质六项",
              "data": [
                {
                  "type": "2013-05-08 09:51:47.000",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总蛋白",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "60.3",
                      "part3_ckfw": "60-80",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白球比",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "1.77",
                      "part3_ckfw": "1-2.5",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "直接胆红素",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "4.4",
                      "part3_ckfw": "0-6",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钾",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "4.1",
                      "part3_ckfw": "3.5-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆固醇",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "3.53",
                      "part3_ckfw": "2.4-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钙",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "2.33",
                      "part3_ckfw": "2.1-2.51",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "镁",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "0.89",
                      "part3_ckfw": "0.73-1.06",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "二氧化碳结合率",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "22.6",
                      "part3_ckfw": "21-31",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草/谷丙",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "0.92",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "离子间隙",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "20.82",
                      "part3_ckfw": null,
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆汁酸",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "4.9",
                      "part3_ckfw": "0-20",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "氯",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "107.8",
                      "part3_ckfw": "96-108",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "前白蛋白",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "184.2",
                      "part3_ckfw": "200-400",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "间接胆红素",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "9.2",
                      "part3_ckfw": "5.1-13.7",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "肌酐",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "50.3",
                      "part3_ckfw": "53-97",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷丙转氨酶",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "11.6",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草转氨酶",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "10.7",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆红素",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "13.6",
                      "part3_ckfw": "6-20.5",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "胱抑素C",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "0.82",
                      "part3_ckfw": "0.20-1.50",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "血糖",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "4.1",
                      "part3_ckfw": "空腹:3.6-6.1\n餐后2H:<7.8",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿酸",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "281.8",
                      "part3_ckfw": "120-420",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钠",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "143.9",
                      "part3_ckfw": "136-145",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿素",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "3.7",
                      "part3_ckfw": "2.8-7.2",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "碱性磷酸酶",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "77.1",
                      "part3_ckfw": "36-110",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "γ谷氨酰氨转肽酶",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "8.4",
                      "part3_ckfw": "11-50",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "a-l岩藻糖苷酶",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "18.8",
                      "part3_ckfw": "12-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白蛋白",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "38.5",
                      "part3_ckfw": "35-55",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "球蛋白",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "21.8",
                      "part3_ckfw": "20-45",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草/谷丙",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "0.92",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总蛋白",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "60.3",
                      "part3_ckfw": "60-80",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "球蛋白",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "21.8",
                      "part3_ckfw": "20-45",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "直接胆红素",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "4.4",
                      "part3_ckfw": "0-6",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钾",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "4.1",
                      "part3_ckfw": "3.5-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆固醇",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "3.53",
                      "part3_ckfw": "2.4-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钙",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "2.33",
                      "part3_ckfw": "2.1-2.51",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "镁",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "0.89",
                      "part3_ckfw": "0.73-1.06",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "二氧化碳结合率",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "22.6",
                      "part3_ckfw": "21-31",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "离子间隙",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "20.82",
                      "part3_ckfw": null,
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆汁酸",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "4.9",
                      "part3_ckfw": "0-20",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "氯",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "107.8",
                      "part3_ckfw": "96-108",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "前白蛋白",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "184.2",
                      "part3_ckfw": "200-400",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "间接胆红素",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "9.2",
                      "part3_ckfw": "5.1-13.7",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "肌酐",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "50.3",
                      "part3_ckfw": "53-97",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷丙转氨酶",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "11.6",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草转氨酶",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "10.7",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆红素",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "13.6",
                      "part3_ckfw": "6-20.5",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "胱抑素C",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "0.82",
                      "part3_ckfw": "0.20-1.50",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "血糖",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "4.1",
                      "part3_ckfw": "空腹:3.6-6.1\n餐后2H:<7.8",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿酸",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "281.8",
                      "part3_ckfw": "120-420",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钠",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "143.9",
                      "part3_ckfw": "136-145",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿素",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "3.7",
                      "part3_ckfw": "2.8-7.2",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "碱性磷酸酶",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "77.1",
                      "part3_ckfw": "36-110",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "γ谷氨酰氨转肽酶",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "8.4",
                      "part3_ckfw": "11-50",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "a-l岩藻糖苷酶",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "18.8",
                      "part3_ckfw": "12-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白蛋白",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "38.5",
                      "part3_ckfw": "35-55",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白球比",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "1.77",
                      "part3_ckfw": "1-2.5",
                      "part3_dw": null
                    }
                  ],
                  "reference": "before"
                },
                {
                  "type": "2013-05-16 07:34:04.000",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "间接胆红素",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "10.08",
                      "part3_ckfw": "5.1-13.7",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "球蛋白",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "15.32",
                      "part3_ckfw": "20-45",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "氯",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "109.96",
                      "part3_ckfw": "96-108",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆汁酸",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "0.77",
                      "part3_ckfw": "0-20",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "离子间隙",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "15.22",
                      "part3_ckfw": null,
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草/谷丙",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "1.38",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总蛋白",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "46.14",
                      "part3_ckfw": "60-80",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "肌酐",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "57.5",
                      "part3_ckfw": "53-97",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白球比",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "2.01",
                      "part3_ckfw": "1-2.5",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白蛋白",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "30.82",
                      "part3_ckfw": "35-55",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "a-l岩藻糖苷酶",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "13.8",
                      "part3_ckfw": "12-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "γ谷氨酰氨转肽酶",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "6.2",
                      "part3_ckfw": "16-73",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "碱性磷酸酶",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "38.55",
                      "part3_ckfw": "36-110",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿素",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "2.92",
                      "part3_ckfw": "2.9-7.1",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钠",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "145.71",
                      "part3_ckfw": "136-145",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿酸",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "214.4",
                      "part3_ckfw": "120-420",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "血糖",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "5.46",
                      "part3_ckfw": "3.6-6.1",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "胱抑素C",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "0.59",
                      "part3_ckfw": "0.20-1.50",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆红素",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "18.21",
                      "part3_ckfw": "6-20.5",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草转氨酶",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "17.1",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷丙转氨酶",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "12.38",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "二氧化碳结合率",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "27.81",
                      "part3_ckfw": "21-31",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "镁",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "0.96",
                      "part3_ckfw": "0.73-1.06",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钙",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "1.99",
                      "part3_ckfw": "2.1-2.51",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆固醇",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "1.96",
                      "part3_ckfw": "2.4-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钾",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "4.33",
                      "part3_ckfw": "3.5-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "直接胆红素",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "8.13",
                      "part3_ckfw": "0-6",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "前白蛋白",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "175.6",
                      "part3_ckfw": "150-400",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草转氨酶",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "17.1",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆红素",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "18.21",
                      "part3_ckfw": "6-20.5",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "胱抑素C",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "0.59",
                      "part3_ckfw": "0.20-1.50",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "血糖",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "5.46",
                      "part3_ckfw": "3.6-6.1",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿酸",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "214.4",
                      "part3_ckfw": "120-420",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钠",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "145.71",
                      "part3_ckfw": "136-145",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿素",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "2.92",
                      "part3_ckfw": "2.9-7.1",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "碱性磷酸酶",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "38.55",
                      "part3_ckfw": "36-110",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "γ谷氨酰氨转肽酶",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "6.2",
                      "part3_ckfw": "16-73",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "a-l岩藻糖苷酶",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "13.8",
                      "part3_ckfw": "12-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白蛋白",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "30.82",
                      "part3_ckfw": "35-55",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白球比",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "2.01",
                      "part3_ckfw": "1-2.5",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总蛋白",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "46.14",
                      "part3_ckfw": "60-80",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "球蛋白",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "15.32",
                      "part3_ckfw": "20-45",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "直接胆红素",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "8.13",
                      "part3_ckfw": "0-6",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钾",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "4.33",
                      "part3_ckfw": "3.5-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆固醇",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "1.96",
                      "part3_ckfw": "2.4-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钙",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "1.99",
                      "part3_ckfw": "2.1-2.51",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "镁",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "0.96",
                      "part3_ckfw": "0.73-1.06",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "二氧化碳结合率",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "27.81",
                      "part3_ckfw": "21-31",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草/谷丙",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "1.38",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "离子间隙",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "15.22",
                      "part3_ckfw": null,
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆汁酸",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "0.77",
                      "part3_ckfw": "0-20",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "氯",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "109.96",
                      "part3_ckfw": "96-108",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "前白蛋白",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "175.6",
                      "part3_ckfw": "150-400",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "间接胆红素",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "10.08",
                      "part3_ckfw": "5.1-13.7",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "肌酐",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "57.5",
                      "part3_ckfw": "53-97",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷丙转氨酶",
                      "part3_sj": "2013-05-16 07:34:04.000",
                      "part3_jg": "12.38",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    }
                  ],
                  "reference": "after"
                },
                {
                  "type": "2013-05-18 10:25:58.000",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总蛋白",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "51.3",
                      "part3_ckfw": "60-80",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白球比",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "1.76",
                      "part3_ckfw": "1-2.5",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "直接胆红素",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "10.2",
                      "part3_ckfw": "0-6",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钾",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "4.03",
                      "part3_ckfw": "3.5-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆固醇",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "2.3",
                      "part3_ckfw": "2.4-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钙",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "2.17",
                      "part3_ckfw": "2.1-2.51",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "镁",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "0.75",
                      "part3_ckfw": "0.73-1.06",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "二氧化碳结合率",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "22.9",
                      "part3_ckfw": "21-31",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草/谷丙",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "1.48",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "离子间隙",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "21.55",
                      "part3_ckfw": null,
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆汁酸",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "1.7",
                      "part3_ckfw": "0-20",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "氯",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "98.5",
                      "part3_ckfw": "96-108",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "前白蛋白",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "68.1",
                      "part3_ckfw": "200-400",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "间接胆红素",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "14.6",
                      "part3_ckfw": "5.1-13.7",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "肌酐",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "45.9",
                      "part3_ckfw": "53-97",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷丙转氨酶",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "10.5",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草转氨酶",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "15.5",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆红素",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "24.8",
                      "part3_ckfw": "6-20.5",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "胱抑素C",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "0.69",
                      "part3_ckfw": "0.20-1.50",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "血糖",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "5.11",
                      "part3_ckfw": "空腹:3.6-6.1\n餐后2H:<7.8",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿酸",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "111.2",
                      "part3_ckfw": "120-420",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钠",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "136",
                      "part3_ckfw": "136-145",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿素",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "3.9",
                      "part3_ckfw": "2.8-7.2",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "碱性磷酸酶",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "50.3",
                      "part3_ckfw": "36-110",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "γ谷氨酰氨转肽酶",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "6.9",
                      "part3_ckfw": "11-50",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "a-l岩藻糖苷酶",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "22.5",
                      "part3_ckfw": "12-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白蛋白",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "32.7",
                      "part3_ckfw": "35-55",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "球蛋白",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "18.6",
                      "part3_ckfw": "20-45",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总蛋白",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "51.3",
                      "part3_ckfw": "60-80",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "球蛋白",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "18.6",
                      "part3_ckfw": "20-45",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "直接胆红素",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "10.2",
                      "part3_ckfw": "0-6",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钾",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "4.03",
                      "part3_ckfw": "3.5-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆固醇",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "2.3",
                      "part3_ckfw": "2.4-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钙",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "2.17",
                      "part3_ckfw": "2.1-2.51",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "镁",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "0.75",
                      "part3_ckfw": "0.73-1.06",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "二氧化碳结合率",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "22.9",
                      "part3_ckfw": "21-31",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草/谷丙",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "1.48",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "离子间隙",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "21.55",
                      "part3_ckfw": null,
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆汁酸",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "1.7",
                      "part3_ckfw": "0-20",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "氯",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "98.5",
                      "part3_ckfw": "96-108",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "前白蛋白",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "68.1",
                      "part3_ckfw": "200-400",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "间接胆红素",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "14.6",
                      "part3_ckfw": "5.1-13.7",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "肌酐",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "45.9",
                      "part3_ckfw": "53-97",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷丙转氨酶",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "10.5",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草转氨酶",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "15.5",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆红素",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "24.8",
                      "part3_ckfw": "6-20.5",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "胱抑素C",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "0.69",
                      "part3_ckfw": "0.20-1.50",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "血糖",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "5.11",
                      "part3_ckfw": "空腹:3.6-6.1\n餐后2H:<7.8",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿酸",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "111.2",
                      "part3_ckfw": "120-420",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钠",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "136",
                      "part3_ckfw": "136-145",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿素",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "3.9",
                      "part3_ckfw": "2.8-7.2",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "碱性磷酸酶",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "50.3",
                      "part3_ckfw": "36-110",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "γ谷氨酰氨转肽酶",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "6.9",
                      "part3_ckfw": "11-50",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "a-l岩藻糖苷酶",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "22.5",
                      "part3_ckfw": "12-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白蛋白",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "32.7",
                      "part3_ckfw": "35-55",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白球比",
                      "part3_sj": "2013-05-18 10:25:58.000",
                      "part3_jg": "1.76",
                      "part3_ckfw": "1-2.5",
                      "part3_dw": null
                    }
                  ],
                  "reference": "after"
                },
                {
                  "type": "2013-05-20 09:21:26.000",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总蛋白",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "59.1",
                      "part3_ckfw": "60-80",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿素",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "4.7",
                      "part3_ckfw": "2.8-7.2",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "直接胆红素",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "4.4",
                      "part3_ckfw": "0-6",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钾",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "4.51",
                      "part3_ckfw": "3.5-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆固醇",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "2.76",
                      "part3_ckfw": "2.4-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钙",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "2.28",
                      "part3_ckfw": "2.1-2.51",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "镁",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "1.02",
                      "part3_ckfw": "0.73-1.06",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "二氧化碳结合率",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "26.7",
                      "part3_ckfw": "21-31",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草/谷丙",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "1.22",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "离子间隙",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "18.41",
                      "part3_ckfw": null,
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆汁酸",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "0.7",
                      "part3_ckfw": "0-20",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "氯",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "101.6",
                      "part3_ckfw": "96-108",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "前白蛋白",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "62.2",
                      "part3_ckfw": "200-400",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "间接胆红素",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "6.8",
                      "part3_ckfw": "5.1-13.7",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "肌酐",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "41.1",
                      "part3_ckfw": "53-97",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷丙转氨酶",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "10.3",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "碱性磷酸酶",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "48.3",
                      "part3_ckfw": "36-110",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "γ谷氨酰氨转肽酶",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "9.7",
                      "part3_ckfw": "11-50",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "a-l岩藻糖苷酶",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "19.2",
                      "part3_ckfw": "12-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白蛋白",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "38.2",
                      "part3_ckfw": "35-55",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白球比",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "1.83",
                      "part3_ckfw": "1-2.5",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草转氨酶",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "12.6",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆红素",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "11.2",
                      "part3_ckfw": "6-20.5",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "胱抑素C",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "0.76",
                      "part3_ckfw": "0.20-1.50",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "血糖",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "4.77",
                      "part3_ckfw": "空腹:3.6-6.1\n餐后2H:<7.8",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿酸",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "107.8",
                      "part3_ckfw": "120-420",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钠",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "138.9",
                      "part3_ckfw": "136-145",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "球蛋白",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "20.9",
                      "part3_ckfw": "20-45",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "γ谷氨酰氨转肽酶",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "9.7",
                      "part3_ckfw": "11-50",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "a-l岩藻糖苷酶",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "19.2",
                      "part3_ckfw": "12-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白蛋白",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "38.2",
                      "part3_ckfw": "35-55",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白球比",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "1.83",
                      "part3_ckfw": "1-2.5",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总蛋白",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "59.1",
                      "part3_ckfw": "60-80",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "球蛋白",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "20.9",
                      "part3_ckfw": "20-45",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "直接胆红素",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "4.4",
                      "part3_ckfw": "0-6",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钾",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "4.51",
                      "part3_ckfw": "3.5-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆固醇",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "2.76",
                      "part3_ckfw": "2.4-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钙",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "2.28",
                      "part3_ckfw": "2.1-2.51",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "镁",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "1.02",
                      "part3_ckfw": "0.73-1.06",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "二氧化碳结合率",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "26.7",
                      "part3_ckfw": "21-31",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草/谷丙",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "1.22",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "离子间隙",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "18.41",
                      "part3_ckfw": null,
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆汁酸",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "0.7",
                      "part3_ckfw": "0-20",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "氯",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "101.6",
                      "part3_ckfw": "96-108",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "前白蛋白",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "62.2",
                      "part3_ckfw": "200-400",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "间接胆红素",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "6.8",
                      "part3_ckfw": "5.1-13.7",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "肌酐",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "41.1",
                      "part3_ckfw": "53-97",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷丙转氨酶",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "10.3",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草转氨酶",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "12.6",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆红素",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "11.2",
                      "part3_ckfw": "6-20.5",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "胱抑素C",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "0.76",
                      "part3_ckfw": "0.20-1.50",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "血糖",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "4.77",
                      "part3_ckfw": "空腹:3.6-6.1\n餐后2H:<7.8",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿酸",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "107.8",
                      "part3_ckfw": "120-420",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钠",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "138.9",
                      "part3_ckfw": "136-145",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿素",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "4.7",
                      "part3_ckfw": "2.8-7.2",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "碱性磷酸酶",
                      "part3_sj": "2013-05-20 09:21:26.000",
                      "part3_jg": "48.3",
                      "part3_ckfw": "36-110",
                      "part3_dw": "U/L"
                    }
                  ],
                  "reference": "after"
                },
                {
                  "type": "2013-05-28 09:22:19.000",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "二氧化碳结合率",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "22.6",
                      "part3_ckfw": "21-31",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草/谷丙",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "0.55",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "镁",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "1",
                      "part3_ckfw": "0.73-1.06",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钙",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "2.21",
                      "part3_ckfw": "2.1-2.51",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆固醇",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "2.53",
                      "part3_ckfw": "2.4-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钾",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "4.13",
                      "part3_ckfw": "3.5-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "直接胆红素",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "2.9",
                      "part3_ckfw": "0-6",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "球蛋白",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "20.9",
                      "part3_ckfw": "20-45",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总蛋白",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "56.5",
                      "part3_ckfw": "60-80",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白球比",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "1.7",
                      "part3_ckfw": "1-2.5",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白蛋白",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "35.6",
                      "part3_ckfw": "35-55",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "a-l岩藻糖苷酶",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "11.9",
                      "part3_ckfw": "12-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "γ谷氨酰氨转肽酶",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "24.3",
                      "part3_ckfw": "11-50",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "碱性磷酸酶",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "70.1",
                      "part3_ckfw": "36-110",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿素",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "4.1",
                      "part3_ckfw": "2.8-7.2",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钠",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "139.4",
                      "part3_ckfw": "136-145",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿酸",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "313.6",
                      "part3_ckfw": "120-420",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "血糖",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "4.23",
                      "part3_ckfw": "空腹:3.6-6.1\n餐后2H:<7.8",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "胱抑素C",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "0.76",
                      "part3_ckfw": "0.20-1.50",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆红素",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "5.6",
                      "part3_ckfw": "6-20.5",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草转氨酶",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "13.1",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷丙转氨酶",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "23.9",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "肌酐",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "53.6",
                      "part3_ckfw": "53-97",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "间接胆红素",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "2.7",
                      "part3_ckfw": "5.1-13.7",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "前白蛋白",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "141.2",
                      "part3_ckfw": "200-400",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "氯",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "104.6",
                      "part3_ckfw": "96-108",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆汁酸",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "5.2",
                      "part3_ckfw": "0-20",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "离子间隙",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "19.54",
                      "part3_ckfw": null,
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白球比",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "1.7",
                      "part3_ckfw": "1-2.5",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总蛋白",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "56.5",
                      "part3_ckfw": "60-80",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "球蛋白",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "20.9",
                      "part3_ckfw": "20-45",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "直接胆红素",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "2.9",
                      "part3_ckfw": "0-6",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钾",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "4.13",
                      "part3_ckfw": "3.5-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆固醇",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "2.53",
                      "part3_ckfw": "2.4-5.5",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钙",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "2.21",
                      "part3_ckfw": "2.1-2.51",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "镁",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "1",
                      "part3_ckfw": "0.73-1.06",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "二氧化碳结合率",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "22.6",
                      "part3_ckfw": "21-31",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草/谷丙",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "0.55",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "离子间隙",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "19.54",
                      "part3_ckfw": null,
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆汁酸",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "5.2",
                      "part3_ckfw": "0-20",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "氯",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "104.6",
                      "part3_ckfw": "96-108",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "前白蛋白",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "141.2",
                      "part3_ckfw": "200-400",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "间接胆红素",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "2.7",
                      "part3_ckfw": "5.1-13.7",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "肌酐",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "53.6",
                      "part3_ckfw": "53-97",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷丙转氨酶",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "23.9",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "谷草转氨酶",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "13.1",
                      "part3_ckfw": "0-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "总胆红素",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "5.6",
                      "part3_ckfw": "6-20.5",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "胱抑素C",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "0.76",
                      "part3_ckfw": "0.20-1.50",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "血糖",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "4.23",
                      "part3_ckfw": "空腹:3.6-6.1\n餐后2H:<7.8",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿酸",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "313.6",
                      "part3_ckfw": "120-420",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "钠",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "139.4",
                      "part3_ckfw": "136-145",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "尿素",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "4.1",
                      "part3_ckfw": "2.8-7.2",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "碱性磷酸酶",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "70.1",
                      "part3_ckfw": "36-110",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "γ谷氨酰氨转肽酶",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "24.3",
                      "part3_ckfw": "11-50",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "a-l岩藻糖苷酶",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "11.9",
                      "part3_ckfw": "12-40",
                      "part3_dw": "U/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肾功五项+肝功十三项+电解质六项",
                      "part3_xxmmc": "白蛋白",
                      "part3_sj": "2013-05-28 09:22:19.000",
                      "part3_jg": "35.6",
                      "part3_ckfw": "35-55",
                      "part3_dw": "g/L"
                    }
                  ],
                  "reference": "after"
                }
              ]
            },
            {
              "type": "血细胞分析+五分类",
              "data": [
                {
                  "type": "2013-05-17 16:19:37.999",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "大血小板比率",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "34.1",
                      "part3_ckfw": "13-43",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "淋巴细胞计数",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "0.31",
                      "part3_ckfw": "1.5-4",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "单核细胞计数",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "0.1",
                      "part3_ckfw": "0.28-0.8",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "中性粒细胞计数",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "6.42",
                      "part3_ckfw": "2019-02-07 00:00:00.000",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜酸细胞计数",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "0.02",
                      "part3_ckfw": "0-0.45",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜碱细胞计数",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "0",
                      "part3_ckfw": "0-0.2",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞宽度-CV值",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "14",
                      "part3_ckfw": "11.6-14",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞宽度-SD值",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "44.6",
                      "part3_ckfw": "39-46",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板分布宽度",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "16.5",
                      "part3_ckfw": "15.5-18.1",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血小板体积",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "11.3",
                      "part3_ckfw": "6.5-12",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板压积",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "0.13",
                      "part3_ckfw": "0.11-0.28",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜酸细胞百分比",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "0.3",
                      "part3_ckfw": "0-5",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "白细胞计数",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "6.85",
                      "part3_ckfw": "2019-04-10 00:00:00.000",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞计数",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "4.11",
                      "part3_ckfw": "4.5-5.47",
                      "part3_dw": "10^12/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血红蛋白",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "117",
                      "part3_ckfw": "120-172",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞压积",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "36.6",
                      "part3_ckfw": "35-55",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均红细胞体积",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "89.2",
                      "part3_ckfw": "80-100",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血红蛋白含量",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "28.4",
                      "part3_ckfw": "27-35",
                      "part3_dw": "pg"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血红蛋白浓度",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "319",
                      "part3_ckfw": "320-360",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板计数",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "119",
                      "part3_ckfw": "100-300",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "淋巴细胞百分比",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "4.6",
                      "part3_ckfw": "20-40",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "单核细胞百分比",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "1.3",
                      "part3_ckfw": "2019-03-08 00:00:00.000",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "中性粒细胞百分比",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "93.7",
                      "part3_ckfw": "50-70",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜碱细胞百分比",
                      "part3_sj": "2013-05-17 16:19:37.999",
                      "part3_jg": "0.1",
                      "part3_ckfw": "0-1",
                      "part3_dw": "%"
                    }
                  ],
                  "reference": "after"
                },
                {
                  "type": "2013-05-20 09:23:44.000",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血红蛋白浓度",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "316",
                      "part3_ckfw": "320-360",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板计数",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "128",
                      "part3_ckfw": "100-300",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "淋巴细胞百分比",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "9.72",
                      "part3_ckfw": "20-40",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "单核细胞百分比",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "4.4",
                      "part3_ckfw": "2019-03-08 00:00:00.000",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "中性粒细胞百分比",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "82.71",
                      "part3_ckfw": "50-70",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜碱细胞百分比",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "0",
                      "part3_ckfw": "0-1",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "淋巴细胞计数",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "0.4",
                      "part3_ckfw": "1.5-4",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "单核细胞计数",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "0.18",
                      "part3_ckfw": "0.2-0.8",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "中性粒细胞计数",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "3.41",
                      "part3_ckfw": "2019-02-07 00:00:00.000",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜酸细胞计数",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "0.13",
                      "part3_ckfw": "0-0.45",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜碱细胞计数",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "0",
                      "part3_ckfw": "0-0.2",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞宽度-CV值",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "13.4",
                      "part3_ckfw": "11.6-14",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞宽度-SD值",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "44.3",
                      "part3_ckfw": "39-46",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板分布宽度",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "14.4",
                      "part3_ckfw": "15.5-18.1",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血小板体积",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "12",
                      "part3_ckfw": "6.5-12",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "大血小板比率",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "41.6",
                      "part3_ckfw": "13-43",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板压积",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "0.15",
                      "part3_ckfw": "0.11-0.28",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜酸细胞百分比",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "3.2",
                      "part3_ckfw": "0-5",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "白细胞计数",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "4.12",
                      "part3_ckfw": "2019-04-10 00:00:00.000",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞计数",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "4.11",
                      "part3_ckfw": "4.5-5.74",
                      "part3_dw": "10^12/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血红蛋白",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "118",
                      "part3_ckfw": "120-172",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞压积",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "37.3",
                      "part3_ckfw": "35-55",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均红细胞体积",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "90.8",
                      "part3_ckfw": "80-100",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血红蛋白含量",
                      "part3_sj": "2013-05-20 09:23:44.000",
                      "part3_jg": "28.7",
                      "part3_ckfw": "27-35",
                      "part3_dw": "pg"
                    }
                  ],
                  "reference": "after"
                },
                {
                  "type": "2013-05-18 10:12:32.000",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "白细胞计数",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "3.66",
                      "part3_ckfw": "2019-04-10 00:00:00.000",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞计数",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "3.97",
                      "part3_ckfw": "4.5-5.74",
                      "part3_dw": "10^12/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血红蛋白",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "115",
                      "part3_ckfw": "120-172",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞压积",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "36.2",
                      "part3_ckfw": "35-55",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均红细胞体积",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "91.2",
                      "part3_ckfw": "80-100",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血红蛋白含量",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "29",
                      "part3_ckfw": "27-35",
                      "part3_dw": "pg"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血红蛋白浓度",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "318",
                      "part3_ckfw": "320-360",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板计数",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "109",
                      "part3_ckfw": "100-300",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "淋巴细胞百分比",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "6.82",
                      "part3_ckfw": "20-40",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "单核细胞百分比",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "1.4",
                      "part3_ckfw": "2019-03-08 00:00:00.000",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "中性粒细胞百分比",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "91.31",
                      "part3_ckfw": "50-70",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜碱细胞百分比",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "0",
                      "part3_ckfw": "0-1",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "淋巴细胞计数",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "0.25",
                      "part3_ckfw": "1.5-4",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "单核细胞计数",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "0.05",
                      "part3_ckfw": "0.2-0.8",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "中性粒细胞计数",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "3.34",
                      "part3_ckfw": "2019-02-07 00:00:00.000",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜酸细胞计数",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "0.02",
                      "part3_ckfw": "0-0.45",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜碱细胞计数",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "0",
                      "part3_ckfw": "0-0.2",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞宽度-CV值",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "13.6",
                      "part3_ckfw": "11.6-14",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞宽度-SD值",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "45.6",
                      "part3_ckfw": "39-46",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板分布宽度",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "16",
                      "part3_ckfw": "15.5-18.1",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血小板体积",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "12.5",
                      "part3_ckfw": "6.5-12",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "大血小板比率",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "45.3",
                      "part3_ckfw": "13-43",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板压积",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "0.14",
                      "part3_ckfw": "0.11-0.28",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜酸细胞百分比",
                      "part3_sj": "2013-05-18 10:12:32.000",
                      "part3_jg": "0.5",
                      "part3_ckfw": "0-5",
                      "part3_dw": "%"
                    }
                  ],
                  "reference": "after"
                },
                {
                  "type": "2013-05-16 07:38:03.000",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "白细胞计数",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "8.5",
                      "part3_ckfw": "2019-04-10 00:00:00.000",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞计数",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "4.35",
                      "part3_ckfw": "4.5-5.74",
                      "part3_dw": "10^12/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血红蛋白",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "128",
                      "part3_ckfw": "120-172",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞压积",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "39.8",
                      "part3_ckfw": "35-55",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均红细胞体积",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "91.5",
                      "part3_ckfw": "80-100",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血红蛋白含量",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "29.4",
                      "part3_ckfw": "27-35",
                      "part3_dw": "pg"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血红蛋白浓度",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "322",
                      "part3_ckfw": "320-360",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板计数",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "128",
                      "part3_ckfw": "100-300",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "淋巴细胞百分比",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "2.6",
                      "part3_ckfw": "20-40",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "单核细胞百分比",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "2.9",
                      "part3_ckfw": "2019-03-08 00:00:00.000",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "中性粒细胞百分比",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "94.5",
                      "part3_ckfw": "50-70",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜碱细胞百分比",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "0",
                      "part3_ckfw": "0-1",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "淋巴细胞计数",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "0.22",
                      "part3_ckfw": "1.5-4",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "单核细胞计数",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "0.25",
                      "part3_ckfw": "0.2-0.8",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "中性粒细胞计数",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "8.03",
                      "part3_ckfw": "2019-02-07 00:00:00.000",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜酸细胞计数",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "0",
                      "part3_ckfw": "0-0.45",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜碱细胞计数",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "0",
                      "part3_ckfw": "0-0.2",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞宽度-CV值",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "14",
                      "part3_ckfw": "11.6-14.0",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞宽度-SD值",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "45.7",
                      "part3_ckfw": "39-46",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板分布宽度",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "15.9",
                      "part3_ckfw": "15.5-18.1",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血小板体积",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "12.2",
                      "part3_ckfw": "6.5-12",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "大血小板比率",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "40.8",
                      "part3_ckfw": "13-43",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板压积",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "0.16",
                      "part3_ckfw": "0.11-0.28",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜酸细胞百分比",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "0",
                      "part3_ckfw": "0-5",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "未成熟粒细胞百分比",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "0.01",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "未成熟粒细胞计数",
                      "part3_sj": "2013-05-16 07:38:03.000",
                      "part3_jg": "0",
                      "part3_ckfw": null,
                      "part3_dw": null
                    }
                  ],
                  "reference": "after"
                },
                {
                  "type": "2013-05-08 08:50:49.000",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板分布宽度",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "14.2",
                      "part3_ckfw": "15.5-18.1",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血小板体积",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "11.6",
                      "part3_ckfw": "6.5-12",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "大血小板比率",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "38.5",
                      "part3_ckfw": "13-43",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板压积",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "0.15",
                      "part3_ckfw": "0.11-0.28",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜酸细胞百分比",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "2.1",
                      "part3_ckfw": "0-5",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "白细胞计数",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "5.77",
                      "part3_ckfw": "2019-04-10 00:00:00.000",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞计数",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "4.68",
                      "part3_ckfw": "4.5-5.74",
                      "part3_dw": "10^12/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血红蛋白",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "137",
                      "part3_ckfw": "120-172",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞压积",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "43.1",
                      "part3_ckfw": "35-55",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均红细胞体积",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "92.1",
                      "part3_ckfw": "80-100",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血红蛋白含量",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "29.3",
                      "part3_ckfw": "27-35",
                      "part3_dw": "pg"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血红蛋白浓度",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "318",
                      "part3_ckfw": "320-360",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板计数",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "128",
                      "part3_ckfw": "100-300",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "淋巴细胞百分比",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "13.32",
                      "part3_ckfw": "20-40",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "单核细胞百分比",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "7.6",
                      "part3_ckfw": "2019-03-08 00:00:00.000",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "中性粒细胞百分比",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "77.01",
                      "part3_ckfw": "50-70",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜碱细胞百分比",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "0",
                      "part3_ckfw": "0-1",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "淋巴细胞计数",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "0.77",
                      "part3_ckfw": "1.5-4",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "单核细胞计数",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "0.44",
                      "part3_ckfw": "0.2-0.8",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "中性粒细胞计数",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "4.44",
                      "part3_ckfw": "2019-02-07 00:00:00.000",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜酸细胞计数",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "0.12",
                      "part3_ckfw": "0-0.45",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜碱细胞计数",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "0",
                      "part3_ckfw": "0-0.2",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞宽度-CV值",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "14.1",
                      "part3_ckfw": "11.6-14",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞宽度-SD值",
                      "part3_sj": "2013-05-08 08:50:49.000",
                      "part3_jg": "47",
                      "part3_ckfw": "39-46",
                      "part3_dw": "fL"
                    }
                  ],
                  "reference": "before"
                },
                {
                  "type": "2013-05-22 10:01:33.000",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血小板体积",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "11.8",
                      "part3_ckfw": "6.5-12",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "单核细胞百分比",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "7.14",
                      "part3_ckfw": "2019-03-08 00:00:00.000",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜碱细胞百分比",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "0.04",
                      "part3_ckfw": "0-1",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "淋巴细胞计数",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "0.55",
                      "part3_ckfw": "1.5-4",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "单核细胞计数",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "0.26",
                      "part3_ckfw": "0.2-0.8",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "中性粒细胞计数",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "2.7",
                      "part3_ckfw": "2019-02-07 00:00:00.000",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜酸细胞计数",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "0.13",
                      "part3_ckfw": "0-0.45",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜碱细胞计数",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "0",
                      "part3_ckfw": "0-0.2",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞宽度-CV值",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "13.6",
                      "part3_ckfw": "11.6-14",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞宽度-SD值",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "45",
                      "part3_ckfw": "39-46",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板分布宽度",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "13.9",
                      "part3_ckfw": "15.5-18.1",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "中性粒细胞百分比",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "74.24",
                      "part3_ckfw": "50-70",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "大血小板比率",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "38",
                      "part3_ckfw": "13-43",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板压积",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "0.17",
                      "part3_ckfw": "0.11-0.28",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜酸细胞百分比",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "3.64",
                      "part3_ckfw": "0-5",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "白细胞计数",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "3.64",
                      "part3_ckfw": "2019-04-10 00:00:00.000",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞计数",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "4.16",
                      "part3_ckfw": "4.5-5.74",
                      "part3_dw": "10^12/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血红蛋白",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "121",
                      "part3_ckfw": "120-172",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞压积",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "38",
                      "part3_ckfw": "35-55",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均红细胞体积",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "91.3",
                      "part3_ckfw": "80-100",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血红蛋白含量",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "29.1",
                      "part3_ckfw": "27-35",
                      "part3_dw": "pg"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血红蛋白浓度",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "318",
                      "part3_ckfw": "320-360",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板计数",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "142",
                      "part3_ckfw": "100-300",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "淋巴细胞百分比",
                      "part3_sj": "2013-05-22 10:01:33.000",
                      "part3_jg": "15.14",
                      "part3_ckfw": "20-40",
                      "part3_dw": "%"
                    }
                  ],
                  "reference": "after"
                },
                {
                  "type": "2013-05-28 09:12:03.000",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "白细胞计数",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "5.21",
                      "part3_ckfw": "2019-04-10 00:00:00.000",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞计数",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "3.92",
                      "part3_ckfw": "4.5-5.74",
                      "part3_dw": "10^12/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血红蛋白",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "114",
                      "part3_ckfw": "120-172",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞压积",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "36.3",
                      "part3_ckfw": "35-55",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均红细胞体积",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "92.6",
                      "part3_ckfw": "80-100",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血红蛋白含量",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "29.1",
                      "part3_ckfw": "27-35",
                      "part3_dw": "pg"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血红蛋白浓度",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "314",
                      "part3_ckfw": "320-360",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板计数",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "264",
                      "part3_ckfw": "100-300",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "淋巴细胞百分比",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "13.12",
                      "part3_ckfw": "20-40",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "单核细胞百分比",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "7.3",
                      "part3_ckfw": "2019-03-08 00:00:00.000",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "中性粒细胞百分比",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "74.81",
                      "part3_ckfw": "50-70",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜碱细胞百分比",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "0",
                      "part3_ckfw": "0-1",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "淋巴细胞计数",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "0.68",
                      "part3_ckfw": "1.5-4",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "单核细胞计数",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "0.38",
                      "part3_ckfw": "0.2-0.8",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "中性粒细胞计数",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "3.9",
                      "part3_ckfw": "2019-02-07 00:00:00.000",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜酸细胞计数",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "0.25",
                      "part3_ckfw": "0-0.45",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜碱细胞计数",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "0",
                      "part3_ckfw": "0-0.2",
                      "part3_dw": "10^9/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞宽度-CV值",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "14",
                      "part3_ckfw": "11.6-14",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "红细胞宽度-SD值",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "45.3",
                      "part3_ckfw": "39-46",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板分布宽度",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "10.2",
                      "part3_ckfw": "15.5-18.1",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "平均血小板体积",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "10",
                      "part3_ckfw": "6.5-12",
                      "part3_dw": "fL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "大血小板比率",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "23.1",
                      "part3_ckfw": "13-43",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "血小板压积",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "0.26",
                      "part3_ckfw": "0.11-0.28",
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "血细胞分析+五分类",
                      "part3_xxmmc": "嗜酸细胞百分比",
                      "part3_sj": "2013-05-28 09:12:03.000",
                      "part3_jg": "4.8",
                      "part3_ckfw": "0-5",
                      "part3_dw": "%"
                    }
                  ],
                  "reference": "after"
                }
              ]
            },
            {
              "type": "尿常规(分析+尿沉渣)",
              "data": [
                {
                  "type": "2013-05-08 09:23:03.999",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "尿胆原",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "正常",
                      "part3_ckfw": "正常",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "隐血",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "阴性",
                      "part3_ckfw": "阴性",
                      "part3_dw": "cells/uL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "尿蛋白",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "阴性",
                      "part3_ckfw": "阴性",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "葡萄糖",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "阴性",
                      "part3_ckfw": "阴性",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "亚硝酸盐",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "阴性",
                      "part3_ckfw": "阴性",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "胆红素",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "阴性",
                      "part3_ckfw": "阴性",
                      "part3_dw": "umol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "酮体",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "阴性",
                      "part3_ckfw": "阴性",
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "PH值",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "6.5",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "比重",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "1.012",
                      "part3_ckfw": "1.003-1.030\n",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "Vc",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "0",
                      "part3_ckfw": null,
                      "part3_dw": "mmol/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "颜色",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "黄色",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "透明度",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "清亮",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "红细胞计数",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "7.1",
                      "part3_ckfw": "0-23.8",
                      "part3_dw": "/ul"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "红细胞(高倍)",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "1.3",
                      "part3_ckfw": null,
                      "part3_dw": "/HP"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "白细胞",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "阴性",
                      "part3_ckfw": "阴性",
                      "part3_dw": "cells/ul"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "白细胞(高倍)",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "0.4",
                      "part3_ckfw": null,
                      "part3_dw": "/HP"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "上皮细胞计数",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "0.9",
                      "part3_ckfw": "0-17.2",
                      "part3_dw": "/ul"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "上皮细胞(高倍)",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "0.2",
                      "part3_ckfw": null,
                      "part3_dw": "/HP"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "管型计数",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "0.3",
                      "part3_ckfw": "0-1.02",
                      "part3_dw": "/ul"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "管型(低倍)",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "0.75",
                      "part3_ckfw": null,
                      "part3_dw": "/LP"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "细菌计数",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "12.8",
                      "part3_ckfw": "0-5808",
                      "part3_dw": "/ul"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "结晶",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "5.1",
                      "part3_ckfw": null,
                      "part3_dw": "/ul"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "酵母菌",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "0",
                      "part3_ckfw": null,
                      "part3_dw": "/ul"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "=== 尿沉渣",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": null,
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "=== 尿干化学",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": null,
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "粘液丝",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "1.98",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "电导率分级",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "3级",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "白细胞计数",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "2.1",
                      "part3_ckfw": "0-15.8",
                      "part3_dw": "/ul"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "小圆上皮细胞",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "0.5",
                      "part3_ckfw": null,
                      "part3_dw": "/ul"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "未溶RBC绝对值",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "0.5",
                      "part3_ckfw": null,
                      "part3_dw": "/ul"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "未溶RBC百分比",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "92.5",
                      "part3_ckfw": null,
                      "part3_dw": "%"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "红细胞信息",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "未提示",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "尿常规(分析+尿沉渣)",
                      "part3_xxmmc": "电导率",
                      "part3_sj": "2013-05-08 09:23:03.999",
                      "part3_jg": "17.2",
                      "part3_ckfw": null,
                      "part3_dw": "mS/cm"
                    }
                  ],
                  "reference": "before"
                }
              ]
            },
            {
              "type": "凝血六项",
              "data": [
                {
                  "type": "2013-05-16 08:36:09.000",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "活化部分凝血活酶比值",
                      "part3_sj": "2013-05-16 08:36:09.000",
                      "part3_jg": "1.07",
                      "part3_ckfw": null,
                      "part3_dw": " "
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "凝血酶时间比值",
                      "part3_sj": "2013-05-16 08:36:09.000",
                      "part3_jg": "0.82",
                      "part3_ckfw": null,
                      "part3_dw": " "
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "纤维蛋白原降解产物",
                      "part3_sj": "2013-05-16 08:36:09.000",
                      "part3_jg": "3.91",
                      "part3_ckfw": "0-5",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "D-二聚体",
                      "part3_sj": "2013-05-16 08:36:09.000",
                      "part3_jg": "1.23",
                      "part3_ckfw": "0-1.0",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "凝血酶原标准化比值",
                      "part3_sj": "2013-05-16 08:36:09.000",
                      "part3_jg": "1.17",
                      "part3_ckfw": "0.94-1.3",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "凝血酶原比值",
                      "part3_sj": "2013-05-16 08:36:09.000",
                      "part3_jg": "1.13",
                      "part3_ckfw": "0.94-1.24",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "凝血酶原时间",
                      "part3_sj": "2013-05-16 08:36:09.000",
                      "part3_jg": "14.7",
                      "part3_ckfw": "2019-11-14 00:00:00.000",
                      "part3_dw": "秒"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "活化部分凝血活酶时间",
                      "part3_sj": "2013-05-16 08:36:09.000",
                      "part3_jg": "36.5",
                      "part3_ckfw": "28-43.5",
                      "part3_dw": "秒"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "纤维蛋白原含量",
                      "part3_sj": "2013-05-16 08:36:09.000",
                      "part3_jg": "2.76",
                      "part3_ckfw": "2.00-4.00",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "凝血酶时间",
                      "part3_sj": "2013-05-16 08:36:09.000",
                      "part3_jg": "13.9",
                      "part3_ckfw": "14.0-21.0",
                      "part3_dw": "秒"
                    }
                  ],
                  "reference": "after"
                },
                {
                  "type": "2013-05-08 09:06:16.999",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "活化部分凝血活酶比值",
                      "part3_sj": "2013-05-08 09:06:16.999",
                      "part3_jg": "1.04",
                      "part3_ckfw": null,
                      "part3_dw": " "
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "凝血酶时间比值",
                      "part3_sj": "2013-05-08 09:06:16.999",
                      "part3_jg": "1",
                      "part3_ckfw": null,
                      "part3_dw": " "
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "纤维蛋白原降解产物",
                      "part3_sj": "2013-05-08 09:06:16.999",
                      "part3_jg": "0.8",
                      "part3_ckfw": "0-5",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "D-二聚体",
                      "part3_sj": "2013-05-08 09:06:16.999",
                      "part3_jg": "0",
                      "part3_ckfw": "0-1.0",
                      "part3_dw": "mg/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "凝血酶原标准化比值",
                      "part3_sj": "2013-05-08 09:06:16.999",
                      "part3_jg": "0.9",
                      "part3_ckfw": "0.94-1.30",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "凝血酶原比值",
                      "part3_sj": "2013-05-08 09:06:16.999",
                      "part3_jg": "0.92",
                      "part3_ckfw": "0.94-1.24",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "凝血酶原时间",
                      "part3_sj": "2013-05-08 09:06:16.999",
                      "part3_jg": "12.4",
                      "part3_ckfw": "2019-11-14 00:00:00.000",
                      "part3_dw": "秒"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "活化部分凝血活酶时间",
                      "part3_sj": "2013-05-08 09:06:16.999",
                      "part3_jg": "36.4",
                      "part3_ckfw": "28-43.5",
                      "part3_dw": "秒"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "纤维蛋白原含量",
                      "part3_sj": "2013-05-08 09:06:16.999",
                      "part3_jg": "3.24",
                      "part3_ckfw": "2.00-4.00",
                      "part3_dw": "g/L"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "凝血六项",
                      "part3_xxmmc": "凝血酶时间",
                      "part3_sj": "2013-05-08 09:06:16.999",
                      "part3_jg": "17",
                      "part3_ckfw": "14.0-21.0",
                      "part3_dw": "秒"
                    }
                  ],
                  "reference": "before"
                }
              ]
            },
            {
              "type": "输血四项",
              "data": [
                {
                  "type": "2013-05-09 08:23:45.000",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "输血四项",
                      "part3_xxmmc": "螺旋体特异抗体测定",
                      "part3_sj": "2013-05-09 08:23:45.000",
                      "part3_jg": "阴性",
                      "part3_ckfw": "阴性",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "输血四项",
                      "part3_xxmmc": "人免疫缺陷病毒抗体测定",
                      "part3_sj": "2013-05-09 08:23:45.000",
                      "part3_jg": "阴性",
                      "part3_ckfw": "阴性",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "输血四项",
                      "part3_xxmmc": "乙型肝炎表面抗原测定",
                      "part3_sj": "2013-05-09 08:23:45.000",
                      "part3_jg": "阴性",
                      "part3_ckfw": "阴性",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "输血四项",
                      "part3_xxmmc": "丙型肝炎抗体测定",
                      "part3_sj": "2013-05-09 08:23:45.000",
                      "part3_jg": "阴性",
                      "part3_ckfw": "阴性",
                      "part3_dw": null
                    }
                  ],
                  "reference": "before"
                }
              ]
            },
            {
              "type": "肿瘤标志物结/直肠/",
              "data": [
                {
                  "type": "2013-05-08 09:10:11.999",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肿瘤标志物结/直肠/",
                      "part3_xxmmc": "糖类抗原199",
                      "part3_sj": "2013-05-08 09:10:11.999",
                      "part3_jg": "5.35",
                      "part3_ckfw": "0.00-39.00",
                      "part3_dw": "U/mL"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "肿瘤标志物结/直肠/",
                      "part3_xxmmc": "癌胚抗原",
                      "part3_sj": "2013-05-08 09:10:11.999",
                      "part3_jg": "1.68",
                      "part3_ckfw": "0.00-3.40",
                      "part3_dw": "ng/mL"
                    }
                  ],
                  "reference": "before"
                }
              ]
            },
            {
              "type": "粪常规[复]",
              "data": [
                {
                  "type": "2013-05-08 08:59:07.999",
                  "data": [
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "粪常规[复]",
                      "part3_xxmmc": "白细胞",
                      "part3_sj": "2013-05-08 08:59:07.999",
                      "part3_jg": "未见",
                      "part3_ckfw": "无",
                      "part3_dw": "/HP"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "粪常规[复]",
                      "part3_xxmmc": "脓细胞",
                      "part3_sj": "2013-05-08 08:59:07.999",
                      "part3_jg": "未见",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "粪常规[复]",
                      "part3_xxmmc": "脂肪球",
                      "part3_sj": "2013-05-08 08:59:07.999",
                      "part3_jg": "未见",
                      "part3_ckfw": "未见",
                      "part3_dw": "/LP"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "粪常规[复]",
                      "part3_xxmmc": "酵母样真菌孢子",
                      "part3_sj": "2013-05-08 08:59:07.999",
                      "part3_jg": "未见",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "粪常规[复]",
                      "part3_xxmmc": "性状",
                      "part3_sj": "2013-05-08 08:59:07.999",
                      "part3_jg": "软便",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "粪常规[复]",
                      "part3_xxmmc": "红细胞",
                      "part3_sj": "2013-05-08 08:59:07.999",
                      "part3_jg": "2019-03-04 00:00:00.000",
                      "part3_ckfw": "未见",
                      "part3_dw": "/HP"
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "粪常规[复]",
                      "part3_xxmmc": "巨噬细胞",
                      "part3_sj": "2013-05-08 08:59:07.999",
                      "part3_jg": "未见",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "粪常规[复]",
                      "part3_xxmmc": "寄生虫卵",
                      "part3_sj": "2013-05-08 08:59:07.999",
                      "part3_jg": "未见",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "粪常规[复]",
                      "part3_xxmmc": "原虫",
                      "part3_sj": "2013-05-08 08:59:07.999",
                      "part3_jg": "未见",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "粪常规[复]",
                      "part3_xxmmc": "粘液",
                      "part3_sj": "2013-05-08 08:59:07.999",
                      "part3_jg": "无",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "粪常规[复]",
                      "part3_xxmmc": "结晶",
                      "part3_sj": "2013-05-08 08:59:07.999",
                      "part3_jg": "未见",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "粪常规[复]",
                      "part3_xxmmc": "颜色",
                      "part3_sj": "2013-05-08 08:59:07.999",
                      "part3_jg": "棕红色",
                      "part3_ckfw": null,
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "粪常规[复]",
                      "part3_xxmmc": "隐血",
                      "part3_sj": "2013-05-08 08:59:07.999",
                      "part3_jg": "阳性(+)",
                      "part3_ckfw": "阴性",
                      "part3_dw": null
                    },
                    {
                      "part3_zylsh": "ZY010001062461",
                      "part3_xmmc": "粪常规[复]",
                      "part3_xxmmc": "淀粉颗粒",
                      "part3_sj": "2013-05-08 08:59:07.999",
                      "part3_jg": "未见",
                      "part3_ckfw": null,
                      "part3_dw": "/LP"
                    }
                  ],
                  "reference": "before"
                }
              ]
            }
          ]
        }
        ]
    },
    {
        step_description: '特殊检查项目',
        items: [
            {
                  type: 'table',
                  title: '病理学检查报告单',
                  required: false,
                  cols: 6,
                  layout: [
                    { type: 'text', cols: 1, rows: 2, text: '肿瘤位置 :' },
                    { type: 'text', cols: 1, rows: 1, text: '位置 :' },
                    { type: 'radio', cols: 2, rows: 1,  options: ['左乳', '右乳'],key_value: { _key: '肿瘤位置', _value: '' }},
                    { type: 'text', cols: 1, rows: 1, text: '肿瘤大小 :' },
                    { type: 'text', cols: 1, rows: 1, text: '5cm*4cm*3cm' },
                    { type: 'text', cols: 1, rows: 1, text: '方向 :' },
                    { type: 'radio', cols: 2, rows: 1,  options: ['11点钟方向', '3点钟方向'],key_value: { _key: '肿瘤位置', _value: '' }},
                    { type: 'text', cols: 1, rows: 1, text: '肿瘤大小（T） :' },
                    { type: 'text', cols: 1, rows: 1, text: 'T0,Tis,Tis(DCIS),Tis(LCIS),Tis(Pagets),T1a,T1b,T1c,T2,T3,T4a,T4b,T1c,T1d' },


                    { type: 'text', cols: 1, rows: 1, text: '淋巴结转移个数 :' },
                    { type: 'text', cols: 1, rows: 1, text: '10' },
                    { type: 'text', cols: 1, rows: 1, text: '淋巴结（N） :' },
                    { type: 'text', cols: 3, rows: 1, text: 'Nx,N0,N1,N2a，N2b,N3a,N3b,N3c' },

                    { type: 'text', cols: 1, rows: 1, text: '病历分期（pN） :' },
                    { type: 'text', cols: 1, rows: 1, text: '无' },
                    { type: 'text', cols: 1, rows: 1, text: '远处转移（M）:' },
                    { type: 'text', cols: 1, rows: 1, text: 'M0' },
                    { type: 'text', cols: 1, rows: 1, text: 'tnm分明 :' },
                    { type: 'text', cols: 1, rows: 1, text: '无' },

                    { type: 'text', cols: 1, rows: 1, text: '临床分期 :' },
                    { type: 'text', cols: 1, rows: 1, text: '4' },
                    { type: 'text', cols: 1, rows: 1, text: '组织学分级 :' },
                    { type: 'radio', cols: 3, rows: 1, options:['低分化','中分化','高分化'],key_value: { _key: '组织分级', _value: '' }},

                    { type: 'text', cols: 1, rows: 1, text: '免疫组化 :' },
                    { type: 'text', cols: 2, rows: 1, text: 'ER(+),PR(2+),Her2(3+),Ki67（+）15%' },
                    { type: 'text', cols: 1, rows: 1, text: '补充检查 :' },
                    { type: 'text', cols: 2, rows: 1, text: 'Her2 70%' },

                    { type: 'text', cols: 1, rows: 3, text: '乳腺B超 :' },
                    { type: 'text', cols: 1, rows: 1, text: '检查日期 :' },
                    { type: 'text', cols: 4, rows: 1, text: ' ' },
                    { type: 'text', cols: 1, rows: 2, text: '检查结果 ：' },
                    { type: 'text', cols: 4, rows: 2, text: ' ' },

                    { type: 'text', cols: 1, rows: 3, text: '乳腺磁共振 :' },
                    { type: 'text', cols: 1, rows: 1, text: '检查日期 :' },
                    { type: 'text', cols: 4, rows: 1, text: ' ' },
                    { type: 'text', cols: 1, rows: 2, text: '检查结果 ：' },
                    { type: 'text', cols: 4, rows: 2, text: ' ' },

                    { type: 'text', cols: 1, rows: 3, text: '乳腺钼靶 :' },
                    { type: 'text', cols: 1, rows: 1, text: '检查日期 :' },
                    { type: 'text', cols: 4, rows: 1, text: ' ' },
                    { type: 'text', cols: 1, rows: 2, text: '检查结果 ：' },
                    { type: 'text', cols: 4, rows: 2, text: ' ' },

                    { type: 'text', cols: 1, rows: 3, text: '乳管镜 :' },
                    { type: 'text', cols: 1, rows: 1, text: '检查日期 :' },
                    { type: 'text', cols: 4, rows: 1, text: ' ' },
                    { type: 'text', cols: 1, rows: 2, text: '检查结果 ：' },
                    { type: 'text', cols: 4, rows: 2, text: ' ' },
                ]
            },
        ]
    },
    {
      step_description:'手术记录',
      items:[
        {
          type: 'table',
          title:'手术记录',
          required: false,
          cols:4,
          layout:[
              {type: 'text',cols: 1,rows: 1,text:'住院流水号 ：'},
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part4_zylsh', _value: ''}},
              {type: 'text',cols: 1,rows: 1,text:'手术名称 ：'},
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part4_ssmc', _value: ''}},
              {type: 'text',cols: 1,rows: 1,text:'手术日期 ：'},
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part4_ssrq', _value: ''}},
              {type: 'text',cols: 1,rows: 1,text:'手术时间 ：'},
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part4_sssj', _value: ''}},
              {type: 'text',cols: 1,rows: 1,text:'体重 ：'},
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part4_tz', _value: ''}},
              {type: 'text',cols: 1,rows: 1,text:'ASA分级 ：'},
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part4_ASAfj', _value: ''}},
              {type: 'text',cols: 1,rows: 1,text:'出量 ：'},
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part4_cl', _value: ''}},
              {type: 'text',cols: 1,rows: 1,text:'尿量 ：'},
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part4_nl', _value: ''}},
              {type: 'text',cols: 1,rows: 1,text:'出血量 ：'},
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part4_cxl', _value: ''}},
              {type: 'text',cols: 1,rows: 1,text:'入量 ：'},
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part4_rl', _value: ''}},
              {type: 'text',cols: 1,rows: 1,text:'红细胞 ：'},
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part4_hxb', _value: ''}},
              {type: 'text',cols: 1,rows: 1,text:'血浆 ：'},
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part4_xj', _value: ''}},
              {type: 'text',cols: 1,rows: 1,text:'血小板 ：'},
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part4_xxb', _value: ''}},
              {type: 'text',cols: 1,rows: 1,text:'自体血 ：'},
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part4_ztx', _value: ''}},
          ]
        }
      ]
    },
    {
      step_description:'影像报告',
      items:[
        {
                  type: 'panel-table',
                  title: '信息输入',
                  required: true,
                  displayControl: { check: false },
                  data:[],
                  cols: 4,
                  layout: [
                    { type: 'text', cols: 1, rows: 1, text: '住院号：' },
                    { type: 'input', cols: 1, rows: 1, key_value: { _key: 'part5_zyh', _value: '' } },
                    { type: 'text', cols: 1, rows: 1, text: '患者姓名：' },
                    { type: 'input', cols: 1, rows: 1, key_value: { _key: 'part5_hzxm', _value: '' } },
                    { type: 'text', cols: 1, rows: 1, text: '检查类别：' },
                    { type: 'input', cols: 1, rows: 1, key_value: { _key: 'part5_jclb', _value: '' } },
                    { type: 'text', cols: 1, rows: 1, text: '检察部位：' },
                    { type: 'input', cols: 1, rows: 1, key_value: { _key: 'part5_jcbw', _value: '' } },
                    { type: 'text', cols: 1, rows: 1, text: '检察时间：' }, 
                    { type: 'input', cols: 1, rows: 1, key_value: { _key: 'part5_jcsj', _value: '' } },
                    { type: 'text', cols: 1, rows: 1, text: '检察诊断：' },
                    { type: 'input', cols: 1, rows: 1, key_value: { _key: 'part5_jczd', _value: '' } },
                    { type: 'text', cols: 1, rows: 3, text: '检查结果描述：' },
                    { type: 'input', cols: 3, rows: 3, key_value: { _key: 'part5_jcjgms', _value: '' } },
                   
                  ]
              },
       ]
    },
    {
        step_description: '治疗方式',
        items: [
            { type: 'table',
              title: '化疗',
              required: false,
              cols:4,
              layout:[
                  {type: 'text',cols: 1,rows: 1,text:'化疗方案 ：'},
                  {type: 'text',cols: 3,rows: 1,text:'AC-T '},
                  {type: 'text',cols: 1,rows: 1,text:'化疗剂量 ：'},
                  {type: 'text',cols: 3,rows: 1,text:'无 '},
                  {type: 'text',cols: 1,rows: 1,text:'化疗次数 ：'},
                  {type: 'text',cols: 3,rows: 1,text:'无 '},
              ]
            },
            {
                type: 'table',
                title: '放疗',
                required: false,
                cols:4,
                layout:[
                    {type: 'text',cols: 1,rows: 1,text:'放疗方案 ：'},
                    {type: 'text',cols: 3,rows: 1,text:'  '},

                ]
            }
        ]
    },
    {
        step_description: '随访一般项目',
        items: [
            { type: 'date', title: '随访时间', key_value: { _key: '出生日期', _value: 'Tue Jul 10 2018 00:00:00 GMT+0800 (CST)' }},
            { type: 'selector', title: '生存状态', key_value: { _key: '民族', _value: ''}, required: true, placeholder: '点击选择生存状况', options: ['生存', '死亡', '缓解']},
            { type: 'selector', title: '近期治疗方式', key_value: { _key: '民族', _value: ''}, required: true, placeholder: '点击选择治疗方式', options: ['无', '化学治疗', '放射治疗', '内分泌治疗', '靶向治疗', '自定义']},
            { type: 'date', title: '近期治疗时间', key_value: { _key: '出生日期', _value: 'Tue Jul 10 2018 00:00:00 GMT+0800 (CST)' }},
            { type: 'selector', title: '新发疾病', key_value: { _key: '民族', _value: ''}, required: true, placeholder: '点击选择新发疾病', options: ['心脏病', '高血压', '高脂血症', '甲状腺疾病', '自定义']},
            { type: 'selector', title: '疾病转归', key_value: { _key: '民族', _value: ''}, required: true, placeholder: '点击选择疾病转归', options: ['好转', '恶化', '自定义']},
            { type: 'selector', title: '疾病进展', key_value: { _key: '民族', _value: ''}, required: true, placeholder: '点击选择疾病进展', options: ['脑转移', '肺转移', '骨转移']},
            { type: 'selector', title: '死亡原因', key_value: { _key: '民族', _value: ''}, required: true, placeholder: '点击选择死亡原因', options: ['意外死亡', '原发死亡', '继发疾病死亡']},
        ]
    },
    {
        step_description: '出院记录',
        items: [
            { type: 'text', text: '主诉',required: false},
            { type: 'date', title: '出院时间', key_value: { _key: '出生日期', _value: 'Tue Jul 20 2018' }},
        ]
    }
];
