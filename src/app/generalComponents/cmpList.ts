export const components_list = [
    {
        step_description: 'Input',
        items: [
            {type: 'input', title: '普通输入', key_value: { _key: '姓名', _value: '' }, validType: 'other'}
        ]
    },
    {
        step_description: 'Selector',
        items: [
            { type: 'selector', title: '下拉组件', key_value: { _key: '民族', _value: ''}, required: true, placeholder: '点击选择', options: ['选项1', '选项2', '其他']},
            { type: 'radio', title: '单选', key_value: { _key: '性别', _value: '' }, required: true, options: [ '选项1', '选项2', '选项3', '其他'] },
            { type: 'checkbox', title: '勾选', key_value: [{ _key: '性别', _value: false }, { _key: '性别', _value: false }], required: true, options: [ '选项1', '选项2'] },
        ]
    },
    {
        step_description: 'Date',
        items: [
            { type: 'date', title: '时间', key_value: { _key: '出生日期', _value: 'Tue Jul 10 2018 00:00:00 GMT+0800 (CST)' }},
        ]
    },
    {
        step_description: 'Input Combination',
        items: [
            { type: 'address', title: '居住地址', key_value: [ { _key: '省', _value: ''}, { _key: '市', _value: ''}, { _key: '区', _value: ''}], required: false},
            //{ type: 'condition-input', target_value: '99' }
        ]
    },
    {
        step_description: 'Select',
        items: [
            { type: 'select', title: '地址选择',key_value: { _key: '地址', _value: ''}, required: true, placeholder: '点击选择', options: ['陕西省', '山西省', '自定义输入1','自定义输入2'], target_value1:'自定义输入1',target_value2:'自定义输入2'},
        ]
    },
    /*{   step_description: 'Expansion panel',
        items: [
            {
                type: 'panel-table',
                title: '信息输入',
                required: true,
                displayControl: { check: false },
                cols: 4,
                layout: [
                    { type: 'text', cols: 1, rows: 1, text: '检查时间：' },
                    { type: 'date', cols: 3, rows: 1, key_value: { _key: '皮质醇定量及昼夜节律检查时间', '_value': '' } },
                    { type: 'text', cols: 1, rows: 1, text: '时间点：' },
                    { type: 'text', cols: 1, rows: 1, text: '8:00' },
                    { type: 'text', cols: 1, rows: 1, text: '16:00' },
                    { type: 'text', cols: 1, rows: 1, text: '00:00' },
                    { type: 'text', cols: 1, rows: 1, text: '皮质醇' },
                    { type: 'input_with_text', cols: 1, rows: 1, right_text: 'ug/dl', key_value: { _key: '皮质醇8:00', _value: ''}, disabled: false},
                    { type: 'input_with_text', cols: 1, rows: 1, right_text: 'ug/dl', key_value: { _key: '皮质醇16:00', _value: ''}, disabled: false},
                    { type: 'input_with_text', cols: 1, rows: 1, right_text: 'ug/dl', key_value: { _key: '皮质醇00:00', _value: ''}, disabled: false},
                ]
            },
        ]
    },*/
    {   step_description: 'Expansion panel',
        items: [
            {
                type: 'panel-table',
                title: '信息输入',
                required: true,
                displayControl: { check: false },
                data:[],
                cols: 4,
                layout: [
                    { type: 'text', cols: 1, rows: 1, text: '检查时间：' },
                    { type: 'date', cols: 3, rows: 1, key_value: { _key: '皮质醇定量及昼夜节律检查时间', '_value': '' } },
                    { type: 'text', cols: 1, rows: 1, text: '时间点：' },
                    { type: 'text', cols: 1, rows: 1, text: '8:00' },
                    { type: 'text', cols: 1, rows: 1, text: '16:00' },
                    { type: 'text', cols: 1, rows: 1, text: '00:00' },
                    { type: 'text', cols: 1, rows: 1, text: '皮质醇' },
                    { type: 'input_with_text', cols: 1, rows: 1, right_text: 'ug/dl', key_value: { _key: '皮质醇8:00', _value: ''}, disabled: false},
                    { type: 'input_with_text', cols: 1, rows: 1, right_text: 'ug/dl', key_value: { _key: '皮质醇16:00', _value: ''}, disabled: false},
                    { type: 'input_with_text', cols: 1, rows: 1, right_text: 'ug/dl', key_value: { _key: '皮质醇00:00', _value: ''}, disabled: false},
                ]
            },
        ]
    },
    {
        step_description: 'Table',
        items: [
            {
                type: 'table',
                title: '皮质醇定量及昼夜节律',
                required: false,
                displayControl: { check: false },
                cols: 4,
                layout: [
                    { type: 'text', cols: 1, rows: 1, text: '检查时间：' },
                    { type: 'date', cols: 3, rows: 1, key_value: { _key: '皮质醇定量及昼夜节律检查时间', '_value': '' } },
                    { type: 'text', cols: 1, rows: 1, text: '时间点：' },
                    { type: 'text', cols: 1, rows: 1, text: '8:00' },
                    { type: 'text', cols: 1, rows: 1, text: '16:00' },
                    { type: 'text', cols: 1, rows: 1, text: '00:00' },
                    { type: 'text', cols: 1, rows: 1, text: '皮质醇' },
                    { type: 'input_with_text', cols: 1, rows: 1, right_text: 'ug/dl', key_value: { _key: '皮质醇8:00', _value: ''}, disabled: false},
                    { type: 'input_with_text', cols: 1, rows: 1, right_text: 'ug/dl', key_value: { _key: '皮质醇16:00', _value: ''}, disabled: false},
                    { type: 'input_with_text', cols: 1, rows: 1, right_text: 'ug/dl', key_value: { _key: '皮质醇00:00', _value: ''}, disabled: false},
                ]
            },
        ]
    },
    {
        step_description: 'RowTable',
        items: [
            {
                type: 'dynamic-row-table',
                title: '其它既往病史',
                required: false,
                cols: 7,
                dynamocRowCount: 0,
                addButtonTitle: '新增既往病史',
                layout: {
                    headerLayout: [
                        { type: 'text', cols: 1, rows: 1, text: '疾病种类'},
                        { type: 'text', cols: 1, rows: 1, text: '疾病名称'},
                        { type: 'text', cols: 1, rows: 1, text: '确诊年份'},
                        { type: 'text', cols: 1, rows: 1, text: '治疗情况描述'},
                        { type: 'text', cols: 1, rows: 1, text: '临床转归'},
                        { type: 'text', cols: 1, rows: 1, text: '临床转归年份'},
                        { type: 'text', cols: 1, rows: 1, text: '备注'}
                    ],
                    dynamicRowLayout: [
                        { type: 'option', options: ['心血管系统', '呼吸系统', '消化系统', '泌尿系统', '血液和造血系统', '内分泌和代谢疾病', '风湿性疾病', '皮肤疾病', '神经系统疾病', '脑外科', '心胸外科', '肝胆外科', '泌尿外科', '肛肠外科', '骨科'],
                            cols: 1, rows: 1 , key_value: { _key: '疾病种类', _value: '' }},
                        { type: 'option', options: [], options_reference: [0], ref_options: [['心绞痛', '心肌梗死', '心力衰竭', '冠状动脉血运重建', '闭塞性周围动脉粥样硬化', '原发性高血压', '心律失常', '二尖瓣狭窄', '二尖瓣关闭不全', '主动脉瓣狭窄', '主动脉瓣关闭不全', '三尖瓣狭窄', '三尖瓣关闭不全', '感染性心内膜炎', '心肌炎', '心肌病', '急性心包炎', '缩窄性心包炎', '房间隔缺损', '心室间隔缺损', '动脉导管未闭', '主动脉缩窄', '脉动脉口狭窄', '主动脉口狭窄', '法洛四联症', '三尖瓣下移畸形', '主动脉夹层', '多发性大动脉炎', '周围动脉疾病', '静脉疾病'],
                                ['急性上呼吸道感染', '急性气管-支气管炎', '慢性支气管炎', '阻塞性肺气肿', '慢性阻塞性肺病', '慢性肺源性心脏病', '支气管哮喘', '肺血栓栓塞症', '肺炎', '支气管扩张症', '肺脓肿', '肺结核病', '原发性支气管肺癌', '特发性肺纤维化', '结节病', '外源性过敏性肺泡炎', '矽肺', '药物性肺部疾病', '其他弥漫性间质性肺病', '胸膜腔积液', '自发性气胸', '睡眠呼吸暂停综合征', '呼吸衰竭'],
                                ['胃食管反流病', '食管癌', '急性胃炎', '慢性胃炎', '消化性溃疡', '胃癌', '肠结核', '结核性腹膜炎', '溃疡性结肠炎', '克罗恩病', '大肠癌', '功能性消化不良', '肠易激综合征', '功能性便秘', '慢性腹泻', '慢性病毒性肝炎', '自身免疫性肝炎', '药物性肝病', '酒精性肝病', '非酒精性脂肪性肝病', '肝硬化', '原发性肝癌', '肝性脑病', '急性胰腺炎', '慢性胰腺炎', '胰腺癌', '消化道出血'],
                                ['糖尿病肾病', '急性肾小球肾炎', '急进性肾小球肾炎', '慢性肾小球肾炎', '肾病综合征', 'IgA肾病', '隐匿性肾炎', '继发性肾小球疾病', '肾小管间质性肾炎', '尿路感染', '肾性氨基酸尿', '肾小管性酸中毒', 'Fanconi综合征', '肾动脉狭窄', '肾动脉栓塞和血栓形成', '高血压性小动脉性肾硬化', '肾静脉血栓形成', 'Alport综合征', 'Fabry病', '薄基底膜肾病', '多囊肾', '肾结石', '急性肾损伤', '急性肾衰竭', '慢性肾衰竭'],
                                ['缺铁性贫血', '巨幼细胞贫血', '遗传性球形红细胞增多症', '红细胞葡萄糖-6-磷酸脱氢酶缺乏症', '血红蛋白病', '自身免疫性溶血性贫血', '阵发性睡眠性血红蛋白尿症', '再生障碍性贫血', '中性粒细胞减少和粒细胞缺乏', '骨髓增生异常综合征', '白血病', '淋巴瘤', '多发性骨髓瘤', '真性红细胞增多症', '原发性血小板增多症', '原发性骨髓纤维化', '嗜血细胞性淋巴组织细胞增生症', '脾功能亢进', '过敏性紫癜', '遗传性出血性毛细血管扩张症', '单纯性紫癜', '特发性血小板减少性紫癜', '血栓性血小板减少性紫癜', '血友病', '维生素K缺乏症', '弥散性血管内溶血', '易栓症'],
                                ['糖尿病', '垂体瘤', '腺垂体功能减退症', '尿崩症', '抗利尿激素不适当分泌综合征', '甲状腺肿', '甲状腺结节', 'Graves病', '甲状腺功能减退症', '亚急性肉芽肿性甲状腺炎', ' 亚急性淋巴细胞性甲状腺炎', '慢性淋巴细胞性甲状腺炎', '甲状腺肿瘤', '皮质醇增多症', '原发性醛固酮增多症', '肾上腺皮质功能减退症', '先天性肾上腺皮质增生症', '嗜铬细胞瘤', '甲状旁腺功能亢进症', '甲状旁腺功能减退症', '性早熟', '性腺功能减退症', '多发性内分泌腺肿瘤综合征', '自身免疫性多发内分泌腺病综合征', '低血糖症', '肥胖', '代谢综合征', '血脂异常症', '骨质疏松症', '痛风'],
                                ['类风湿关节炎', '系统性红斑狼疮', '强直性脊柱炎', '系统性血管炎', '多发性肌炎', '皮肌炎', '干燥综合征', '系统性硬化症'],
                                ['病毒性皮肤病', '单纯疱疹', '带状疱疹', '疣', '传染性疣', '脓疱疮', '毛囊炎、疖及疖病', '痈', '丹毒', '蜂窝织炎', '皮肤结核病', '麻风病', '头癣', '手癣、足癣和甲癣', '体癣和股癣', '癣菌疹', '花斑癣', '马拉色菌毛囊炎', '念珠菌病', '孢子丝菌病', '毛虫皮炎', '虫咬伤、虫螫伤', '皮肤猪囊虫病', '疥疮', '痱子', '鸡眼与胼胝', '手足皲裂', '冻疮', '多形性日光疹', '接触性皮炎', '尿布皮炎', '稻田皮炎', '湿疹', '婴儿湿疹', '遗传过敏性皮炎', '药疹', '荨麻疹', '丘疹性荨麻疹', '神经性皮炎', '瘙痒症', '结节性痒疹', '多形红斑', '玫瑰糠疹', '银屑病', '白色糠疹', '红皮病', '红斑狼疮', '皮肌炎', '硬皮病', '天疱疮', '大疱性类天疱疮', '过敏性紫癜', '结节性红斑', '变应性皮肤血管炎', '白塞病', '寻常性痤疮', '酒渣鼻', '脂溢性皮炎', '斑秃', '雀斑', '黄褐斑', '白癜风', '黑变病', '鱼鳞病', '毛周角化病', '掌跖角皮病', '色素痣', '老年疣', '血管瘤', '瘢痕疙瘩', '鳞状细胞癌', '基底细胞癌', '恶性黑素瘤', '梅毒', '淋病', '非淋菌性尿道炎', '生殖器疱疹', '尖锐湿疣', '艾滋病'],
                                ['脑出血', '缺血性脑卒中', '短暂性脑缺血发作', '三叉神经痛', '面神经麻痹', '面肌痉挛', '急性炎症性脱髓鞘性多发性神经病', '慢性炎症性脱髓鞘性多发性神经病', '急性脊髓炎', '脊髓亚急性联合变性', '脊髓空洞症', '脊髓血管病', '蛛网膜下腔出血', '颅内静脉系统血栓形成', '其他脑血管病', '血管性痴呆', '急性脑卒中康复', '帕金森病', '小舞蹈病', '肝豆状核变性', '亨廷顿舞蹈病', '肌张力障碍', '其他运动障碍性疾病', '偏头痛', '其他头痛', '阿尔茨海默病', 'Pick病和额颞痴呆', '重症肌无力', '周期性麻痹', '多发性肌炎和皮肌炎', '线粒体肌病和线粒体脑肌病', '内分泌性肌病', '肌营养不良', '僵人综合征', '癫痫', '失眠', '发作性睡病', '反复发作性睡眠增多症', '特发性睡眠增多症', '睡眠呼吸暂停综合征', '不安腿综合征', '睡眠中异常', '颅脑肿瘤', '颅脑损伤', '硬脑膜外血肿', '硬膜下血肿'],
                                ['创伤性枢椎前滑脱', '多发性颅内血肿', '蝶窦恶性肿瘤', '短颈畸形', '顶叶肿瘤', '第四脑室肿瘤', '额叶肿瘤', '高血压性脑出血', '弓形体脑病', '颈椎结核', '颈椎后纵韧带骨化', '急性及亚急性脑内血肿', '肌营养不良症', '颈椎小关节创伤性', '脊柱裂', '颈椎黄韧带骨化症', '颈椎后脱位', '经椎管狭窄症', '进行性多灶性白质脑病', '颈椎半脱位', '急性硬脑膜外血肿', '急性单纯疱疹病毒', '颈椎椎弓裂', '颈椎过伸性损伤', '颈椎骨折脱位', '基底节血肿', '脊柱脊髓损伤', '脊髓小脑变性症', '开放性脑外伤', '颅骨骨髓炎', '颅底骨折', '颅骨缺损', '颅内低压性头痛', '颅内动脉瘤', '颅内占位性病变引起的头痛', '面神经损伤', '慢性硬脑膜外血肿', '帽状腱膜下脓肿', '脑震荡', '脑膜炎', '脑积水', '脑出血', '脑栓塞', '脑室炎', '脑挫裂伤', '脑囊虫病', '脑性瘫痪', '脑血吸虫病', '脑疝', '脑蛛网膜下腔出血', '脑室内出血', '脑脊液漏', '脑损伤后综合征', '脑瘤(脑肿瘤、颅内肿瘤)', '皮脂腺囊肿', '丘脑下部损伤', '迁延性昏迷', '上皮样囊肿', '神经胶质瘤', '头皮血肿', '外伤性癫痫', '外伤后头痛', '外伤性硬脑膜下积液', '外伤后脑脂肪栓塞', '外伤后脑膨出', '外伤性颈动脉海绵窦瘘', '外伤后颅内积气', '小脑扁桃体下疝', '硬脑膜外和硬脑膜', '硬脑膜下血肿', '中风', '寰椎骨折脱位', '周围神经损伤'],
                                ['创伤性气胸', '创伤性窒息', '单心房', '单心室', '动脉硬化性闭塞症', '肺包虫病', '肺爆震伤', '肺动静脉痿', '肺大泡', '肺错构瘤', '风湿性二尖瓣关闭', '风湿性二尖瓣狭窄', '肥厚型梗阻性心肌病', '法洛四联症', '腹脏突出症', '肺栓塞和肺梗死', '感染性肋软骨炎', '冠状动脉终止异常', '冠状动脉异位起源', '后天性三尖瓣关闭', '鸡胸', '急性心力衰竭', '急性心肌梗死', '继发性纵隔感染', '结核性脓胸', '矫正型大动脉错位', '急性脓胸', '漏斗胸', '肋骨骨折', '慢性心功能不全', '慢性缩窄性心包炎', '慢性化脓性胸膜炎', '慢性脓胸', '弥漫性恶性间皮瘤', '慢性心力衰竭', '气管、支气管狭窄', '缩窄性心包炎', '食管憩室', '食管破裂', '食管瘢痕性狭窄', '食管失弛缓症', '食管裂孔疝', '外伤性乳糜胸', '完全性大动脉错位', '完全性肺静脉异位', '血胸', '先天性肺囊肿', '胸腺瘤', '胸骨骨折', '胸腔积液', '心脏穿透伤', '胸廓出口综合征', '先天性二尖瓣畸形', '先天性主动脉瓣下狭窄', '先天性主动脉弓畸形', '胸壁结核', '心性猝死综合征', '心室间隔缺损', '心脏钝性闭合伤', '先天性主动脉瓣上狭窄', '心肌梗塞并发心室间隔穿破', '先天性动脉导管未闭', '先天性膈疝', '心包积液', '心包肿瘤', '胸主动脉夹层动脉瘤', '胸降主动脉动脉瘤', '心肌梗塞并发左心室壁瘤', '心肌梗塞并发二尖瓣关闭不全', '先天性主动脉缩窄', '先天性胸腺发育不良', '先天性食管闭锁', '右心室双出口', '原发性纵隔肿瘤', '原发性纵隔感染', '主动脉夹层', '左心室双出口', '阵发性室上性心动过速', '主动脉瓣狭窄合并', '主动脉瓣膜部狭窄', '左心发育不良', '自发性血胸', '主-肺动脉膈缺损', '纵隔脓肿', '膈肌膨出'],
                                ['鞭虫病', '胆囊癌', '胆结石', '胆管良性狭窄', '胆道出血', '胆囊息肉', '胆囊-结肠肝曲粘连综合征', '胆管结石与胆管炎', '胆管扩张症', '胆囊管综合征', '非寄生虫性肝囊肿', '肝损伤', '肝囊肿', '肝包虫病', '肝包虫囊肿', '肝血管瘤', '肝性血卟啉病综合征', '肝外胆管损伤', '肝内胆管结石', '环状胰腺', '结肠过敏症', '急性化脓性胆管炎', '急性结石性胆囊炎', '急性出血坏死型胰腺炎', '生长激素释放抑制素瘤', '细菌性肝脓肿', '胰石症', '胰腺脓肿', '胰腺多肽瘤', '胰腺囊肿', '胰腺痿', '原发性肝内硬化综合征', '营养不良性肝硬化', '异位胰腺', '原发性硬化性胆管', '胰腺外伤'],
                                ['膀胱结石', '膀胱痿', '膀胱损伤', '膀胱外翻', '后尿道瓣膜', '急性膀胱炎', '结核性膀胱自发破裂', '结核性膀胱挛缩', '尿道结石', '尿道上裂', '尿道狭窄', '尿道下裂', '尿道创伤', '尿路梗阻', '尿道损伤', '尿痿', '鞘膜积液', '脐尿管囊肿及脐尿管瘘', '肾结石', '输尿管结石', '肾周脓肿', '射精功能障碍', '肾皮质脓肿', '肾皮质髓质脓肿', '肾下垂', '肾上腺性征异常症', '肾上腺髓质功能亢进', '肾损伤', '肾创伤', '阴茎硬结症'],
                                ['白线疝', '成人脐疝', '大肠息肉', '大便失禁', '大肠梗阻', '腹股沟直疝(疝气)', '腹膜后血肿', '腹内疝', '粪类圆线虫病', '腹股沟斜疝', '粪痿', '肛痿', '肛裂', '肛门湿疹', '肛周脓肿', '肛乳头炎', '肛门闭锁', '肛门失禁', '肛窦炎', '肛周湿疹', '肛门异位', '肛膜闭锁', '肛门直肠周围脓肿', '肛门外伤', '肛门瘙痒症', '肛提肌综合症', '肛管、直肠、结肠狭窄', '骨盆直肠脓肿', '肛肠脱垂', '肛乳头肥大', '化脓性汗腺炎', '结肠癌', '结肠痿', '结肠息肉', '结肠破裂', '结肠憩室病', '假膜性肠炎', '结肠直肠损伤', '结、直肠黑变病', '结肠扭转', '家族性结肠息肉病', '结肠粪性穿孔', '急性出血性坏死性肠炎', '溃疡病大出血', '溃疡病急性穿孔', '内痔', '切口疝', '乳头状腺瘤', '十二指肠淤积症', '外痔', '先天性肛门直肠狭窄', '先天性肥厚性幽门狭窄', '先天性直肠肛门畸形', '先天性直肠与周围脏器痿', '先天性肛门狭窄', '痔疮', '直肠脱垂', '直肠息肉', '直肠闭锁', '肱骨远端全骺分离', '直肠前突', '直肠损伤', '直肠阴道痿', '坐骨直肠窝脓肿', '直肠内异物', '直肠重复畸形'],
                                ['扁平足', '鼻骨骨折', '变形性骨炎', '剥脱性骨软骨炎', '尺骨下1/3骨折合并', '尺骨上1/3骨折合并', '成骨不全', '脆弱性骨硬化', '创伤性肘关节炎', '耻骨结核', '尺桡骨干双骨折', '尺骨鹰嘴骨折', '尺桡骨干骨折', '单侧关节突关节脱位', '多发性骨骺发育异常', '动脉瘤样骨囊肿', '点状骨骺发育异常', '第三腰椎横突综合征']],
                            cols: 1, rows: 1, color: 'lightblue', key_value: { _key: '疾病名称',  _value: '' }
                        },
                        { type: 'year_selector', cols: 1, rows: 1, key_value: { _key: '确诊年份', _value: '' }, disabled: true, disabled_ref: 1 },
                        { type: 'option', cols: 1, rows: 1, options: [ '药物治疗', '手术治疗', '介入治疗', '其它治疗', '未治疗'], key_value: { _key: '治疗情况描述', _value: '' }, disabled: true, disabled_ref: 1 },
                        { type: 'option', cols: 1, rows: 1, options: [ '治愈', '好转', '未愈', '其它', '不详'], key_value: { _key: '临床转归', _value: '' }, disabled: true, disabled_ref: 1 },
                        { type: 'year_selector', cols: 1, rows: 1, key_value: { _key: '临床转归时间', _value: '' }, disabled: true, disabled_ref: 1 },
                        { type: 'input', cols: 1, rows: 1, key_value: { _key: '备注', _value: ''}, disabled: true, disabled_ref: 1 }
                    ]
                }
            }
        ]
    },
    {
        step_description: 'Stepper',
        items:
        [
           { type : 'stepper', title : '步进输入', key_value: { _key: '病历', _value: '' }}
        ]
    },
  {
    step_description: 'Classified List',
    items:
      [
        { type : 'classified-lists', title : '分类列表', key_value: { _key: '病历', _value: '' },
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
    step_description: 'Lis',
    items:
      [
        {
            type : 'lis',
            title : 'lis数据展示',
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
  }
];
