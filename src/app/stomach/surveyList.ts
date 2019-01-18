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
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_csd', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '居住地 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_xzz', _value: ''}},

              { type: 'text', cols: 1, rows: 1, text: '联系人姓名 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_lxrxm', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '联系人电话 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_dwdh', _value: ''}},

              { type: 'text', cols: 1, rows: 1, text: '入院时间 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_rysj', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '入院诊断 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_zzd', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '出院时间 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_cysj', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '实际住院天数 :' },
              { type: 'input', cols: 1, rows: 1,key_value: {_key: 'part1_sjzyts', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '主诊断编号 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_zzdbh', _value: ''}},
              { type: 'text', cols: 1, rows: 1, text: '手术日期 :' },
              { type: 'input', cols: 1, rows: 1,key_value: {_key: 'part1_ssrq', _value: ''} },

            //   { type: 'text', cols: 1, rows: 1, text: '肿瘤类型 :' },
            //   { type: 'text', cols: 4, rows: 1, text: '浸润性导管癌' },
            //   { type: 'text', cols: 1, rows: 1, text: '淋巴结转移情况 :' },
            //   { type: 'text', cols: 4, rows: 1, text: '淋巴结转移5/10' },
            //   { type: 'text', cols: 1, rows: 1, text: '抗体阳性 :' },
            //   { type: 'text', cols: 4, rows: 1, text: '' },
              { type: 'text', cols: 1, rows: 1, text: '手术名称 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_ssmc', _value: ''}}, 
              { type: 'text', cols: 1, rows: 1, text: '切口等级' },
              { type: 'input', cols: 1, rows: 1,key_value: {_key: 'part1_qkdj', _value: ''} },
              { type: 'text', cols: 1, rows: 1, text: '麻醉方式 :' },
              { type: 'input', cols: 1, rows: 1, key_value: {_key: 'part1_mzfs', _value: ''}},
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
                    { type: 'text', cols: 2, rows: 1, text: '左乳包块1年月'},
                    { type: 'text', cols: 1, rows: 1, text: '现病史:' },
                    { type: 'text', cols: 2, rows: 1, text: '在外院给予抗治疗' },
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
                      "part3_xxmmc": "白球比",
                      "part3_sj": "2013-05-08 09:51:47.000",
                      "part3_jg": "1.77",
                      "part3_ckfw": "1-2.5",
                      "part3_dw": null
                    }
                  ],
                  "reference": "before"
                },
              ]
            },
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
      step_description: '影像报告',
      items:[
        {
                  type: 'panel-table',
                  title: '影像报告列表',
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
