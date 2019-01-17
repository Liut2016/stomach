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
                    type: "肝功十四项(复)+肾功六项",
                    data: [
                    {
                            type: "2015-03-10 11:48:35.000",
                            data: [
                            {
                                "part3_pid": 24189,
                                "part3_hzxm": "党欢萍",
                                "part3_zyh": 1219881,
                                "part3_zylsh": "ZY010001219881",
                                "part3_zycs": 1,
                                "part3_xmmc": "肝功十四项(复)+肾功六项",
                                "part3_xxmmc": "白球比",
                                "part3_sj": "2015-03-10 11:48:35.000",
                                "part3_jg": "1.94",
                                "part3_ckfw": "1-2.5",
                                "part3_dw": null
                            }, 
                          ]  
                     },
                   
                 ]
             }  
             ]
         }
        ]
  }
];
