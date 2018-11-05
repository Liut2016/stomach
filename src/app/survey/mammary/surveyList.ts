export const survey_list = [
    {
        step_description: '病案首页',
        items: []
    },
    {
        step_description: '入院病例',
        items: []
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
