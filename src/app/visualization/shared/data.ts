export const  nodes = [
    {
      id: 1,
      name: '住院病案首页提取信息',
      children: [
        { id: 2, name: '住院号' },
        { id: 3, name: '病案号' },
        { id: 4, name: '名字' },
        { id: 5, name: '出生年月' },
        { id: 6, name: '年龄' },
        { id: 7, name: '体重' },
        { id: 8, name: '身高' },
        { id: 9, name: '性别' },
        { id: 10, name: '居住地' },
        { id: 11, name: '出生地' },
        { id: 12, name: '职业' },
        { id: 13, name: '民族' },
        { id: 14, name: '联系电话' },
        { id: 15, name: '联系人姓名' },
        { id: 16, name: '联系人电话' },
        { id: 17, name: '入院时间' },
        { id: 18, name:  '入院诊断' },
        { id: 19, name: '出院时间' },
        { id: 20, name: '出院诊断' },
        { id: 21, name: '实际住院天数' },
        { id: 22, name: '病理号' },
        { id: 23, name: '病理诊断' },
        { id: 24, name: '手术名称' },
        { id: 25, name: '麻醉方式' },
      ]
    },
    {
      id: 26,
      name: '入院病历',
      children: [
        { id: 27, name: '主诉' },
        { id: 28, name: '现病史' },
        { id: 29, name: '治疗时间' },
        { id: 30, name: '治疗次数' },
        { id: 31, name: '治疗方式' },
        { id: 32, name: '靶向治疗' },
        { id: 33, name: '靶向治疗剂量' },
        { id: 34, name: '化疗方案' },
        { id: 35, name: '化疗剂量' },
        { id: 36, name: '血压' },
        { id: 37, name: '体重' },
        { id: 38, name: '身高' },
        { id: 39, name: '手术史' },
        { id: 40, name: '绝经日期' },
        { id: 41, name: '月经' },
        { id: 42, name: '伴随疾病' },
        { id: 43, name:  '家族史' },
        { id: 44, name: '专科体检' },
      ]
    },
    {
      id: 45,
      name: '一般检查项目',
      children: [
        { id: 46, name: '血常规' },
        { id: 47, name: '尿常规' },
        { id: 48, name: '粪常规' },
        { id: 49, name: '生化' },
        { id: 50, name: '肝肾功' },
        { id: 51, name: '风湿免疫抗体' },
        { id: 52, name: '女性性激素' },
        { id: 53, name: '凝血系列' },
        { id: 54, name: '女性肿瘤标志物' },
        { id: 55, name: '甲功八项' },
        { id: 56, name: '胸片' },
        { id: 57, name: '心电图' },
        { id: 58, name: '子宫B超' },
        { id: 59, name: '胸部CT' },
        { id: 60, name: '脑部CT' },
        { id: 61, name: '腹部CT' },
        { id: 62, name:  '心脏彩超' },
      ]
    },
    {
      id: 63,
      name: '特殊检查项目',
      children: [
        { id: 64, name: '肿瘤位置' },
        { id: 65, name: '肿瘤大小' },
        { id: 66, name: '肿瘤大小（T）' },
        { id: 67, name: '淋巴结转移个数' },
        { id: 68, name: '淋巴结（N）' },
        { id: 69, name: '病理分期（pN）' },
        { id: 70, name: '远处转移（M）' },
        { id: 71, name: 'tnm分期' },
        { id: 72, name: '临床分期' },
        { id: 73, name: '组织学分级' },
        { id: 74, name: '免疫组化' },
        { id: 75, name: '补充检查' },
        { id: 76, name: '乳腺B超' },
        { id: 77, name: '乳腺磁共振' },
        { id: 78, name: '乳腺钼靶' },
        { id: 79, name: '乳管镜' },
      ]
    },
    {
      id: 80,
      name: '治疗方式',
      children: [
        { id: 81, name: '化疗方案' },
        { id: 82, name: '化疗剂量' },
        { id: 83, name: '化疗次数' },
      ]
    },
    {
    id: 84,
      name: '出院记录',
      children: [
        { id: 85, name: '主诉' },
      ]
    },
    {
      id: 86,
      name: '随访一般项目',
      children: [
        { id: 87, name: '随访时间' },
        { id: 88, name: '生存状态' },
        { id: 89, name: '近期治疗方式' },
        { id: 90, name: '近期治疗时间' },
        { id: 91, name: '新发疾病' },
        { id: 92, name: '病情转归' },
        { id: 93, name: '疾病进展' },
        { id: 94, name: '死亡原因' }
      ]
    }
  ];
export const nodes1 = [
  {
    id: 95,
    name: 'root'},
  {
    id: 96,
    name: 'root'},
  {
    id: 97,
    name: 'root'},
  {
    id: 98,
    name: 'root'},
  {
    id: 99,
    name: 'root'},
];
export const getnodes = () => {
    const data = [];
    nodes.forEach( n => {
        data.push(n);
    });
    return data;
};
export const getnodes1 = () => {
    const data = [];
    nodes1.forEach( n => {
     data.push(n);
    });
    return data;
};
