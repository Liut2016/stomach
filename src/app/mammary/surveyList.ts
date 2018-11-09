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
              { type: 'text', cols: 1, rows: 1, text: '住院号:' },
              { type: 'text', cols: 1, rows: 1, text: '708265' },
              { type: 'text', cols: 1, rows: 1, text: '名字:' },
              { type: 'text', cols: 1, rows: 1, text: '张三' },
              { type: 'text', cols: 1, rows: 1, text: '出生年月:' },
              { type: 'text', cols: 1, rows: 1, text: '1988/01/01' },

              { type: 'text', cols: 1, rows: 1, text: '年龄:' },
              { type: 'text', cols: 1, rows: 1, text: '30' },
              { type: 'text', cols: 1, rows: 1, text: '体重:' },
              { type: 'text', cols: 1, rows: 1, text: '65Kg' },
              { type: 'text', cols: 1, rows: 1, text: '身高:' },
              { type: 'text', cols: 1, rows: 1, text: '170cm' },

              { type: 'text', cols: 1, rows: 1, text: '性别:' },
              { type: 'radio', cols: 1, rows: 1, options: ['男', '女'], key_value: { _key: '有无头晕', _value: '' }},
              { type: 'text', cols: 1, rows: 1, text: '民族:' },
              { type: 'text', cols: 1, rows: 1, text: '汉族' },
              { type: 'text', cols: 1, rows: 1, text: '联系电话:' },
              { type: 'text', cols: 1, rows: 1, text: '17782935405' },


              { type: 'text', cols: 1, rows: 1, text: '出生地:' },
              { type: 'text', cols: 2, rows: 1, text: '陕西省西安市碑林区' },
              { type: 'text', cols: 1, rows: 1, text: '职业:' },
              { type: 'radio', cols: 2, rows: 1, options: ['农民', '教师', '职工', '公务员', '其它'], key_value: { _key: '有无头晕', _value: '' }},

              { type: 'text', cols: 1, rows: 1, text: '居住地:' },
              { type: 'text', cols: 2, rows: 1, text: '陕西省西安市未央区' },
              { type: 'text', cols: 1, rows: 1, text: '居住地址:' },
              { type: 'text', cols: 2, rows: 1, text: '陕西省西安市未央区南党村167号 ' },

              { type: 'text', cols: 1, rows: 1, text: '联系人姓名:' },
              { type: 'text', cols: 1, rows: 1, text: '张三' },
              { type: 'text', cols: 1, rows: 1, text: '联系人电话:' },
              { type: 'text', cols: 3, rows: 1, text: '17782935405' },
              { type: 'text', cols: 1, rows: 1, text: '入院时间:' },
              { type: 'text', cols: 1, rows: 1, text: '2018/10/15' },
              { type: 'text', cols: 1, rows: 1, text: '入院诊断:' },
              { type: 'radio', cols: 3, rows: 1, options: ['乳腺恶性肿瘤', '乙型肝炎', '高血压病'], key_value: { _key: '高血压发现方式', _value: '' }},
              { type: 'text', cols: 1, rows: 1, text: '出院时间:' },
              { type: 'text', cols: 1, rows: 1, text: '2018/10/20' },
              { type: 'text', cols: 1, rows: 1, text: '出院诊断:' },
              { type: 'radio', cols: 3, rows: 1, options: ['乳腺恶性肿瘤', '乙型肝炎', '高血压病'], key_value: { _key: '高血压发现方式', _value: '' }},
              { type: 'text', cols: 1, rows: 1, text: '实际住院天数:' },
              { type: 'text', cols: 1, rows: 1, text: '5天' },
              { type: 'text', cols: 1, rows: 1, text: '病理号:' },
              { type: 'text', cols: 1, rows: 1, text: '2018-37005' },
              { type: 'text', cols: 1, rows: 1, text: '手术日期:' },
              { type: 'text', cols: 1, rows: 1, text: '2018/10/15' },

              { type: 'text', cols: 1, rows: 3, text: '病理诊断' },
              { type: 'text', cols: 1, rows: 1, text: '肿瘤类型:' },
              { type: 'text', cols: 4, rows: 1, text: '浸润性导管癌' },
              { type: 'text', cols: 1, rows: 1, text: '淋巴结转移情况:' },
              { type: 'text', cols: 4, rows: 1, text: '淋巴结转移5/10' },
              { type: 'text', cols: 1, rows: 1, text: '抗体阳性:' },
              { type: 'text', cols: 4, rows: 1, text: '' },
              { type: 'text', cols: 1, rows: 1, text: '手术名称:' },
              { type: 'radio', cols: 5, rows: 1, options: ['乳房病损切除手术', '乳房改良根手术'], key_value: { _key: '高血压发现方式', _value: '' }},
              { type: 'text', cols: 1, rows: 1, text: '麻醉方式:' },
              { type: 'radio', cols: 5, rows: 1, options: ['静吸复合全麻', '局部浸润麻醉'], key_value: { _key: '高血压发现方式', _value: '' }},





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
                    { type: 'text', cols: 2, rows: 1, text: '左乳包块1年月' },
                    { type: 'text', cols: 1, rows: 1, text: '现病史:' },
                    { type: 'text', cols: 2, rows: 1, text: '在外院给予抗增生治疗' },
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
        step_description: '一般检查项目',
        items: []
    },
    {
        step_description: '特殊检查项目',
        items: []
    },
    {
        step_description: '治疗方式',
        items: []
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
        items: []
    }
];
