import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  // dashboard
  // 数组去重再统计
  public Statistics(data) {
    const result = [];
    const newArr = data.reduce((arrs, cv) => {
    const found = arrs.find(it => it[0] === cv);
      if (found) {
          found[1] += 1;
      } else {
          arrs.push([cv, 1]);
      }
      return arrs;
  }, []);
    newArr.forEach(ele => {
      result.push({x : ele[0] , y: ele[1]});
    });
    return result;
  }
// 将年龄排序并转化为年龄区间
  public resetData(data) {
    for ( let i = 0; i < data.length ; i++) {
          for (let j = i ; j < data.length; j++) {
              if (data[j] < data [i]) {
                const temp = data[i];
                data[i] = data[j];
                data[j] = temp;
              }
          }
    }
    const result = [];
    let temp1, temp2;
    data.forEach(ele => {
      temp1 = ele - ele % 10;
      temp2 = ele - ele % 10 + 10;
      result.push(String(temp1) + '-' + String(temp2) );
     });
     return result;
  }
// 对各省名称进行处理
  public splitProvinceName(data) {
    const datachange = [];
    data.forEach(ele => {
      ele = ele.split('省')[0];
      ele = ele.split('市')[0];
      ele = ele.split('自')[0];
      ele = ele.split('维')[0];
      ele = ele.split('回')[0];
      datachange.push(ele);
    });
    return datachange;
  }

  // 获得陕西省病人人数，包括下属区县的人数也计入相应市
  public getCity(data) {
    const City = [];
    const result = [];
    const RegionName = [];
    const ShanXiProvince = [
      ['西安市', ['新城区', '碑林区', '莲湖区', '灞桥区', '未央区', '雁塔区', '阎良区', '临潼区', '长安区', '高陵区', '户县', '蓝田县', '周至县' ]],
      ['铜川市', ['王益区', '印台区', '耀州区', '宜君县']],
      ['宝鸡市', ['渭滨区', '金台区', '陈仓区', '凤翔县', '岐山县', '扶风县', '眉县', '陇县', '千阳县', '麟游县', '凤县', '太白县']],
      ['咸阳市', ['秦都区', '杨陵区', '渭城区', '三原县', '泾阳县', '乾县', '礼泉县', '永寿县', '彬县', '长武县', '旬邑县', '淳化县', '武功县', '兴平市']],
      ['渭南市', ['临渭区', '华州区', '潼关县', '大荔县', '合阳县', '澄城县', '蒲城县', '白水县', '富平县', '韩城市', '华阴市']],
      ['延安市', ['宝塔区', '安塞区', '延长县', '延川县', '子长县', '志丹县', '吴起县', '甘泉县', '富县', '洛川县', '宜川县', '黄龙县', '黄陵县']],
      ['汉中市', ['汉台区', '南郑区', '城固县', '洋县', '西乡县', '勉县', '宁强县', '略阳县', '镇巴县', '留坝县', '佛坪县']],
      ['榆林市', ['榆阳区', '横山区', '府谷县', '靖边县', '定边县', '绥德县', '米脂县', '佳县', '吴堡县', '清涧县', '子洲县', '神木市']],
      ['安康市', ['汉滨区', '汉阴县', '石泉县', '宁陕县', '紫阳县', '岚皋县', '平利县', '镇坪县', '旬阳县', '白河县']],
      ['商洛市', ['商州区', '洛南县', '丹凤县', '商南县', '山阳县', '镇安县']]
  ];
  ShanXiProvince.forEach(element => {
    RegionName.push(element[0]);
  });
  data.forEach(datatemp => {
    ShanXiProvince.forEach((ele, number) => {
      if (datatemp.x === ele[0]  || RegionName[number].split('市')[0] === datatemp.x) {
         result.push([ele[0], datatemp.y]);
      } else {
        for (let i = 0; i < ele[1].length; i++) {
            if (ele[1][i] === datatemp.x || ele[1][i].split('县')[0] === datatemp.x
            || ele[1][i].split('区')[0] === datatemp.x || ele[1][i].split('市')[0] === datatemp.x) {
              result.push([ele[0], datatemp.y]);
            }
        }
      }
    });
  });
  RegionName.forEach(name => {
       City.push({ x: name , y: 0});
  });
  result.forEach(content => {
       City.forEach(city => {
            if (city.x === content[0]) {
               city.y = city.y + content[1];
            }
       });
  });
  return City;
  }
// 删除无效数据
  public deleteInvalidValue(data) {
    data.forEach((ele, i) => {
      if (ele.x === '—') {
        data.splice(i , 1);
      }
    });
    return data;
  }

public getRegionName() {
  const RegionName = [];
  const Region = [
    ['东北', [ '黑龙江', '吉林', '辽宁' ]],
    ['华东', ['上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '台湾']],
    ['华北', ['北京', '天津', '山西', '河北', '内蒙古']],
    ['华中', ['河南', '湖北', '湖南']],
    ['华南', ['广东', '广西', '海南', '香港', '澳门']],
    ['西南', ['重庆', '四川' , '贵州' , '云南' , '西藏']],
    ['西北', ['陕西', '甘肃', '青海', '宁夏', '新疆']]
];
  Region.forEach(element => {
    for (let i = 0; i < element[1].length ; i++) {
       RegionName.push(element[1][i]);
    }
});
return RegionName;
}

// 获得全国各个区间内病人人数
  public getRegion(data) {
    const resulttemp = [];
    const result = [];
    const Region = [
       ['东北', [ '黑龙江', '吉林', '辽宁' ]],
       ['华东', ['上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '台湾']],
       ['华北', ['北京', '天津', '山西', '河北', '内蒙古']],
       ['华中', ['河南', '湖北', '湖南']],
       ['华南', ['广东', '广西', '海南', '香港', '澳门']],
       ['西南', ['重庆', '四川' , '贵州' , '云南' , '西藏']],
       ['西北', ['陕西', '甘肃', '青海', '宁夏', '新疆']]
   ];
   const RegionName = Region.map( (eleName, i) => {
       result.push([eleName[0], 0]);
       return eleName[0];
   });
   data.forEach(datatemp => {
       Region.forEach((ele) => {
           for ( let i = 0 ; i < ele[1].length; i++) {
                if (ele[1][i] === datatemp.x) {
                    resulttemp.push([ele[0], datatemp.y]);
                }
           }
       });
   });
   resulttemp.forEach(temp => {
          for (let i = 0 ; i < result.length; i++) {
              if (temp[0] === result[i][0]) {
                  result[i][1] = result[i][1] + temp[1];
              }
          }
   });
   return result;
}

// 省数据处理
public getProvinces(data) {
  const result = [];
  const provinceName = this.getRegionName();
  data.forEach(element => {
    provinceName.forEach(name => {
       if (element === name) {
          result.push(element);
       }
    });
  });
  return result;
}

// 对年龄进行分年龄段处理

public resetAge(data) {
  const result = [];
  for (let i = 0 ; i < 10 ; i++ ) {
        result.push({ x: i * 10 , y : 0});
  }
  data.forEach(element => {
    result.forEach( age => {
         if (element.x - element.x % 10 === age.x) {
               age.y = age.y + element.y;
         }
    });
  });
  return result;
}

}
