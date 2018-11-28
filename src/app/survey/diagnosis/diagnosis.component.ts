import { Component, Inject, OnInit } from '@angular/core';
import { LocalStorage } from '@app/shared/local.storage';
import { ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-hypertension-gradding',
  template: `
    <div style="margin: 0 auto"><h5 style="">{{data.title}}</h5></div>
    <div *ngIf="data.flag === 'grading'" style="width: 100%">
      <mat-grid-list cols="7" rowHeight="80px">
        <mat-grid-tile [colspan]="2">分类</mat-grid-tile>
        <mat-grid-tile [colspan]="2">收缩压(mmHg)</mat-grid-tile>
        <mat-grid-tile [colspan]="1"></mat-grid-tile>
        <mat-grid-tile [colspan]="2">舒张压(mmHg)</mat-grid-tile>
        <mat-grid-tile [colspan]="2">高血压1级</mat-grid-tile>
        <mat-grid-tile [colspan]="2">140-159</mat-grid-tile>
        <mat-grid-tile [colspan]="1">和/或</mat-grid-tile>
        <mat-grid-tile [colspan]="2">90-99(mmHg)</mat-grid-tile>
        <mat-grid-tile [colspan]="2">高血压2及</mat-grid-tile>
        <mat-grid-tile [colspan]="2">160-179</mat-grid-tile>
        <mat-grid-tile [colspan]="1">和/或</mat-grid-tile>
        <mat-grid-tile [colspan]="2">100-109</mat-grid-tile>
        <mat-grid-tile [colspan]="2">高血压3级</mat-grid-tile>
        <mat-grid-tile [colspan]="2">180及以上</mat-grid-tile>
        <mat-grid-tile [colspan]="1">和/或</mat-grid-tile>
        <mat-grid-tile [colspan]="2">110及以上</mat-grid-tile>
      </mat-grid-list>
    </div>
    <div *ngIf="data.flag === 'danger'" style="width: 100%">
      <mat-grid-list cols="4" rowHeight="80px">
        <mat-grid-tile [colspan]="1">危险因素及病史</mat-grid-tile>
        <mat-grid-tile [colspan]="1">1级高血压</mat-grid-tile>
        <mat-grid-tile [colspan]="1">2级高血压</mat-grid-tile>
        <mat-grid-tile [colspan]="1">3级高血压</mat-grid-tile>
        <mat-grid-tile [colspan]="1">无</mat-grid-tile>
        <mat-grid-tile [colspan]="1">低危</mat-grid-tile>
        <mat-grid-tile [colspan]="1">中危</mat-grid-tile>
        <mat-grid-tile [colspan]="1">高危</mat-grid-tile>
        <mat-grid-tile [colspan]="1">1~2个危险因素</mat-grid-tile>
        <mat-grid-tile [colspan]="1">中危</mat-grid-tile>
        <mat-grid-tile [colspan]="1">中危</mat-grid-tile>
        <mat-grid-tile [colspan]="1">很高危</mat-grid-tile>
        <mat-grid-tile [colspan]="1">≥3个危险因素,或靶器官损害</mat-grid-tile>≥
        <mat-grid-tile [colspan]="1">高危</mat-grid-tile>
        <mat-grid-tile [colspan]="1">高危</mat-grid-tile>
        <mat-grid-tile [colspan]="1">很高危</mat-grid-tile>
        <mat-grid-tile [colspan]="1">临床并发症或合并糖尿病</mat-grid-tile>
        <mat-grid-tile [colspan]="1">很高危</mat-grid-tile>
        <mat-grid-tile [colspan]="1">很高危</mat-grid-tile>
        <mat-grid-tile [colspan]="1">很高危</mat-grid-tile>
      </mat-grid-list>
    </div>
    <div *ngIf="data.flag === 'factors'" style="width: 100%">
      <mat-grid-list cols="3" rowHeight="60px">
        <mat-grid-tile [colspan]="1" style="background-color: #99D3F5">心血管危险因素</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: #fc4b6c">靶器官损害</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: #e9ab2e">伴临床疾患</mat-grid-tile>
      </mat-grid-list>
      <mat-grid-list cols="3" rowHeight="90px">
        <mat-grid-tile [colspan]="1" style="background-color: #848a96">高血压（1-3级）</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: #fdfcc8" >左心室肥厚 心电图：Sokolow-Lyons>38mv 或 Cornell>2440mm-mms 超声新动图 LVMI：男 125， 女 120g/m2</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: lightpink">脑血管病；脑出血；缺血性脑卒中；短暂性脑缺血发作</mat-grid-tile>
      </mat-grid-list>
      <mat-grid-list cols="3" rowHeight="60px">
        <mat-grid-tile [colspan]="1" style="background-color: #848a96">高血压（1-3级）>年龄：男性>55岁， 女性>65岁</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: #fdfcc8">颈动脉超声 IMT 0.9mm 或 动脉粥样斑块</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: lightpink">心脏疾病；心肌梗死史；心绞痛；冠状动脉血运重建史；充血性心力衰竭</mat-grid-tile>
      </mat-grid-list>
      <mat-grid-list cols="3" rowHeight="100px">
        <mat-grid-tile [colspan]="1" style="background-color: #848a96">高血压（1-3级）>吸烟</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: #fdfcc8">颈-股动脉脉搏速度 12m/s(*选择使用)</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: lightpink">肾脏疾病：糖尿病肾病；肾功能受损；血肌酐： 男性 133 mol/L(1.5mg/dL), 女性 124 mol/L(1.4mg/dL)；蛋白尿（300mg/24h）</mat-grid-tile>
      </mat-grid-list>
      <mat-grid-list cols="3" rowHeight="60px">
        <mat-grid-tile [colspan]="1" style="background-color: #848a96">高血压（1-3级）>早发心血管病家族史（一级亲属发病年龄 < 50岁）6.1-6.9 mmol/L</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: #fdfcc8">颈-股动脉脉搏速度 12m/s(*选择使用)</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: lightpink">外周血管疾病</mat-grid-tile>
      </mat-grid-list>
      <mat-grid-list cols="3" rowHeight="110px">
        <mat-grid-tile [colspan]="1" style="background-color: #848a96">高血压（1-3级）>血脂异常： TC≥5.7mmol/L(220mg/dL)或LDL-C>3.3mmol/L(130mg/dL)或HDL-C<1.0mmol/L(40mg/dL)</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: #fdfcc8">估算的肾小球滤过率低(eGFR<60ml/min/1.73m²)或血清肌酐轻度升高：男性115-133mol/L(1.3-1.5mg/dL),女性107-124mol/L(1.2-1.4mg/dL)</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: lightpink">外周血管疾病</mat-grid-tile>
      </mat-grid-list>
      <mat-grid-list cols="3" rowHeight="100px">
        <mat-grid-tile [colspan]="1" style="background-color: #848a96">高血压（1-3级）>早发心血管病家族史(一级亲属发病年龄<50岁)</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: #fdfcc8">微量白蛋白尿:30-300mg/24h或白蛋白/肌酐比：≥30mg/g(3.5mg/mmol)</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: lightpink">糖尿病 空腹血糖：≥7.0mmol/L(126mg/dL)餐后血糖：≥11.1mmol/L(200mg/dL)糖化血红蛋白：(HbA1c)6.5%</mat-grid-tile>
      </mat-grid-list>
      <mat-grid-list cols="3" rowHeight="60px">
        <mat-grid-tile [colspan]="1" style="background-color: #848a96">高血压（1-3级）>腹型肥胖(腰围:男性≥90cm 女性≥85cm)或肥胖(BMI≥28kg/m²)</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: #fdfcc8"></mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: lightpink"></mat-grid-tile>
      </mat-grid-list>
      <p> TC: 总胆固醇； LDL：低密度脂蛋白胆固醇； HDL-C: 高密度脂蛋白胆固醇； LVMI: 左心室质量指数； IMT：颈动脉内膜中层厚度； BMI: 体质量指数</p>

    </div>
    <div *ngIf="data.flag === 'move'" style="width: 100%">
      <mat-grid-list cols="3" rowHeight="60px">
        <mat-grid-tile [colspan]="1" style="background-color: #99D3F5">初诊转诊(具备以下任意一项时)</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: #fc4b6c">随访转诊(具备以下任意一项时)</mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: #e9ab2e">立即急救车转诊(具备以下任意一项时)</mat-grid-tile>
      </mat-grid-list>
      <mat-grid-list cols="3" rowHeight="400px">
        <mat-grid-tile [colspan]="1" style="background-color: #848a96">
          1.血压显著升高≥180/110mmHg <br>
          2.怀疑新出现心脑肾并发症或其他研究临床情况 <br>
          3.妊娠和哺乳期女性 <br>
          4.发病年龄<30岁<br>
          5.伴蛋白尿或血尿 <br>
          6.非利尿剂引起的高血钾 <br>
          7.阵发性血压升高，伴头疼、心慌、多汗 <br>
          8.双上肢收缩压差异>20mmHg <br>
          9.因诊断需要到上级医院进一步检查 <br>
        </mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: #fdfcc8">
          1.至少三种降压药物足量使用，血压仍未达标 <br>
          2.血压明显波动并难以控制 <br>
          3.怀疑与降压药物相关且难以处理的不良反应 <br>
          4.随访过程中发现严重临床疾患或心脑肾损害而难以处理 <br>
        </mat-grid-tile>
        <mat-grid-tile [colspan]="1" style="background-color: lightpink">
          1.意识丧失或模糊 <br>
          2.血压≥180/110mmHg 伴剧烈头痛、呕吐、或突发言语障碍或肢体瘫痪 <br>
          3.血压显著升高伴持续性胸背部剧烈疼痛 <br>
          4.血压升高伴下肢水肿、呼吸困难、或不能平卧 <br>
          5.胸闷、胸痛持续至少10分钟、伴大汗，心电图至少两个导联ST段抬高，应以最快速度转诊，考虑溶栓或急诊冠脉介入治疗 <br>
          6.其他影响生命体征的严重情况，如意识淡漠伴血压过低或测不出、心率过慢或过快，突发全身严重过敏反应等 <br>
        </mat-grid-tile>
        <!--<mat-grid-tile [colspan]="1" style="background-color: #848a96">血压显著升高≥180/110mmHg</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #fdfcc8">至少三种降压药物足量使用，血压仍未达标</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: lightpink">意识丧失或模糊</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #848a96">怀疑新出现心脑肾并发症或其他研究临床情况</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #fdfcc8">血压明显波动并难以控制</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: lightpink">血压≥180/110mmHg 伴剧烈头痛、呕吐、或突发言语障碍或肢体瘫痪</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #848a96">妊娠和哺乳期女性</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #fdfcc8">怀疑与降压药物相关且难以处理的不良反应</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: lightpink">血压显著升高伴持续性胸背部剧烈疼痛</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #848a96">发病年龄<30岁</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #fdfcc8">随访过程中发现严重临床疾患或心脑肾损害而难以处理</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: lightpink">血压升高伴下肢水肿、呼吸困难、或不能平卧</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #848a96">伴蛋白尿或血尿</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #fdfcc8"></mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: lightpink">胸闷、胸痛持续至少10分钟、伴大汗，心电图至少两个导联ST段抬高，应以最快速度转诊，考虑溶栓或急诊冠脉介入治疗</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #848a96">非利尿剂引起的高血钾</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #fdfcc8"></mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: lightpink">其他影响生命体征的严重情况，如意识淡漠伴血压过低或测不出、心率过慢或过快，突发全身严重过敏反应等</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #848a96">阵发性血压升高，伴头疼、心慌、多汗</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #fdfcc8"></mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: lightpink"></mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #848a96">双上肢收缩压差异>20mmHg</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #fdfcc8"></mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: lightpink"></mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #848a96">因诊断需要到上级医院进一步检查</mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: #fdfcc8"></mat-grid-tile>-->
        <!--<mat-grid-tile [colspan]="1" style="background-color: lightpink"></mat-grid-tile>-->
      </mat-grid-list>
    </div>
    <div mat-dialog-actions style="width: 100%">
      <button mat-raised-button color="accent"  [mat-dialog-close]="true">关闭</button>
    </div>`
})

export class DialogHypertensionGradingComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogHypertensionGradingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})

export class DiagnosisComponent implements OnInit {
  historydisease = '';
  constructor(
    private ls: LocalStorage,
    private router: Router,
    public dialog: MatDialog,
  ) {
  }
  ngOnInit() {
    const reports = this.ls.getObject('reportInformation');
    for ( let i = 0; i < reports['既往病史'].length; i++) {
      // this.historydisease += (i + 1) + '.' + reports['既往病史'][i] + '\n';
      const str = reports['既往病史'][i] + '';
      const arr = str.split(':');
      // console.log(arr);
      this.historydisease += arr[0] + '; ';
    }
  }
  openDia( title,  flag ) {
    const  dialogRef = this.dialog.open(
      DialogHypertensionGradingComponent,
      {
        width: '1000px',
        data: { title: title, flag: flag}
      }
    );
  }
  next() {
    this.router.navigate(['survey/treatementMS']);
  }
}
