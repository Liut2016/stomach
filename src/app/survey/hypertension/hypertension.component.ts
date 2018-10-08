import {Component, Inject, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SurveyList} from '@app/survey/hypertension/surveyList';
import {HttpService} from '@app/core/services/http.service';
import {SettingsService} from '@app/core/services/settings.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {LocalStorage} from '@app/shared/local.storage';
import {GeneralDateComponent} from '@app/survey/shared/general-date/general-date.component';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  template: `<h1 mat-dialog-title>您还有以下项目未完成：</h1>
  <div mat-dialog-content>
    <div style="min-width: 100px">
      <mat-chip-list>
        <mat-chip style="color: #F44336" *ngFor="let name of data.unconfirmedMustList">{{name}}</mat-chip>
        <mat-chip  *ngFor="let name of data.unconfirmedList">{{name}}</mat-chip>
      </mat-chip-list>
    </div>
    <p *ngIf="data.unconfirmedMustList.length === 0">是否继续提交？</p>
    <p *ngIf="data.unconfirmedMustList.length > 0">请完善信息</p>
  </div>
  <div mat-dialog-actions>
    <button mat-button *ngIf="data.unconfirmedMustList.length > 0" [mat-dialog-close]="false" tabindex="2">好的</button>
    <button mat-button *ngIf="data.unconfirmedMustList.length === 0" [mat-dialog-close]="false" tabindex="-1">否(补充完善)</button>
    <button mat-button *ngIf="data.unconfirmedMustList.length === 0" [mat-dialog-close]="true" tabindex="2" >是(继续提交)</button>
  </div>`
})
export class DialogOverviewExampleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'app-hypertension',
  templateUrl: './hypertension.component.html',
  styleUrls: ['./hypertension.component.css']
})
export class HypertensionComponent implements OnInit {
  @ViewChildren(GeneralDateComponent) DateItems: QueryList<GeneralDateComponent>;
  user;
  isLinear = false;
  current = 0;
  confirm_fore_pass = false;
  unconfirmedList = [];
  unconfirmedMustList = [];
  mustConfirm = [ '姓名', '身份证号' ];
  edit_disabled = false;
  surveyList ;
  community = '交大一附院';
  doctor = '张先礼';
  putRecord;
  PID;
  constructor(
    private service: HttpService,
    private settingService: SettingsService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private ls: LocalStorage
  ) {
  }
  ngOnInit() {
    this.user = this.settingService.user;
    console.log(this.user);
    this.PID = this.route.params['value']['PID'];
    this.roleControl();
    this.initAllForm();
  }
  onVoted (data: any) {
    this.surveyList[data.id1].items[data.id2].key_value._value = new Date(data.date);
    console.log(this.surveyList[data.id1].items[data.id2].key_value._value);
    this.DateItems.forEach( item => {
      if (item.conf.title === data.title) {
        item.date = new Date(data.date);
        item.answerChange();
      }
    });
  }
  roleControl() {

    if (this.user.role === 'doctor') {
      if (! this.PID) {
        this.community = this.user.community;
        this.doctor = this.user.name;
        console.log(this.community);
        console.log(this.doctor);
      }
    } else {
      if (this.PID) {
        this.edit_disabled = true;
      }
    }

  }
  initAllForm() {
    if ( this.PID ) {
      const getRecordParam = {
        'PID': this.PID,
        'FID': 0,
        'disease': 'hypertension'
      };
      this.service.getRecord(getRecordParam).subscribe(data => {
        this.surveyList = data.Records.content;
        this.community = data.Records.community.Record_Value;
        this.doctor = data.Records.complete_by.Record_Value;
      });
    } else {
      this.surveyList = new SurveyList().items;
      this.initValidConfirm();
    }
  }
  next() {
    if ((this.current + 1) <= 6) { this.current++; }
  }
  pre() {
    if ((this.current - 1) >= 0) { this.current --; }
  }
  out() {
    this.router.navigate(['survey/hypertensionMS']);
  }
  submit() {
    this.validateAllPage();
    if (this.unconfirmedList.length > 0) {
      this.openDialog();
    } else {
      this.putRecords();
    }
  }
  collectorAnswer() {
    const informationBase = this.surveyList[0].items;
    this.putRecord = {};
    this.putRecord['姓名'] = { Record_Value: informationBase[0].key_value._value };
    this.putRecord['性别'] = { Record_Value: informationBase[1].key_value._value };
    this.putRecord['出生日期'] = { Record_Value: informationBase[2].key_value._value};
    this.putRecord['身份证号'] = { Record_Value: informationBase[5].key_value._value};
    this.putRecord['complete_by'] = { Record_Value: this.doctor };
    this.putRecord['community'] = { Record_Value: this.community };
    if ( this.PID ) {
      this.putRecord['update_time'] = { Record_Value: new Date()};
    } else {
      this.putRecord['submit_time'] = { Record_Value: new Date()};
      this.putRecord['update_time'] = { Record_Value: new Date()};
    }
    this.putRecord['content'] = { Record_Value: this.surveyList };
  }

  putRecords () {
    this.collectorAnswer();
    let params = {};
    if (this.PID) {
      params = {
        Records: this.putRecord,
        disease: 'hypertension',
        follow: 0,
        PID: this.PID
      };
    } else {
      params = {
        Records: this.putRecord,
        disease: 'hypertension',
        follow: 0
      };
    }
    console.log(params);
    this.service.putRecord(params).subscribe(
      res => {
        console.log(res);
        // this.reportData = { data: { name: '张三'} }
        this.collcetorForReport();
        this.router.navigate(['survey/reportMS']);

      }, error2 => {
        console.log(error2);
      }
    );
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(
      DialogOverviewExampleDialogComponent,
      {
        width: '450px',
        data: { unconfirmedList : this.unconfirmedList, unconfirmedMustList: this.unconfirmedMustList }
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.putRecords();
      }
    });
  }
  validateAllPage() {
    this.unconfirmedList = [];
    this.unconfirmedMustList = [];
    for ( const part of this.surveyList) {
      for ( const question of part.items ) {
        if ( question.required === true ) {
          if ( question.valid_confirmed === false ) {
            if ( this.mustConfirm.indexOf(question.title) !== -1) {
              this.unconfirmedMustList.push((part.step_description + '：' + question.title ));
            } else {
              this.unconfirmedList.push( (part.step_description + '：' + question.title ) );
            }
          }
        }
      }
    }
  }
  initValidConfirm () {
    for ( const part of this.surveyList) {
      for ( const question of part.items ) {
        question.valid_confirmed = false;
      }
    }
  }

  collcetorForReport() {
    const reportdata = {};
    const baseInformation = [];
    // baseInformation.push({'_key': '姓名', '_value': this.surveyList[0].items[0].key_value._value});
    // baseInformation.push({'_key': '性别', '_value': this.surveyList[0].items[1].key_value._value});
    // const birthday = this.surveyList[0].items[2].key_value._value;
    // // console.log();
    // const age = new Date().getFullYear() - new Date(birthday).getFullYear();
    // baseInformation.push({'_key': '年龄', '_value': age});
    // baseInformation.push({'_key': '民族', '_value': this.surveyList[0].items[3].key_value._value});
    // baseInformation.push({'_key': '籍贯', '_value': this.surveyList[0].items[4].key_value._value});
    // baseInformation.push({'_key': '居住地', '_value': this.surveyList[0].items[6].key_value[0]._value + ''
    // + this.surveyList[0].items[6].key_value[1]._value + this.surveyList[0].items[6].key_value[2]._value});
    // baseInformation.push({'_key': '微信号', '_value': this.surveyList[0].items[7].key_value._value});
    // baseInformation.push({'_key': '手机号', '_value': this.surveyList[0].items[8].key_value._value});
    // baseInformation.push({'_key': '婚姻状况', '_value': this.surveyList[0].items[10].key_value._value});
    // baseInformation.push({'_key': '职业', '_value': this.surveyList[0].items[11].key_value._value});
    // baseInformation.push({'_key': '文化程度', '_value': this.surveyList[0].items[12].key_value._value});
    // baseInformation.push({'_key': '邮编', '_value': this.surveyList[0].items[14].key_value._value});
    for ( let i = 0; i < this.surveyList[0].items.length; i++) {
      if (this.surveyList[0].items[i].title === '居住地址') {
        baseInformation.push({'_key': '居住地', '_value': this.surveyList[0].items[i].key_value[0]._value + ''
        + this.surveyList[0].items[i].key_value[1]._value + this.surveyList[0].items[i].key_value[2]._value});
      } else if (this.surveyList[0].items[i].title === '出生日期') {
        const birthday = this.surveyList[0].items[i].key_value._value;
        const age = new Date().getFullYear() - new Date(birthday).getFullYear();
        baseInformation.push({'_key': '年龄', '_value': age});
      } else {
        if (this.surveyList[0].items[i].key_value._value && this.surveyList[0].items[i].key_value._value !== '') {
          baseInformation.push({'_key': this.surveyList[0].items[i].title, '_value': this.surveyList[0].items[i].key_value._value});
        }
      }
    }
    reportdata['基本信息'] = baseInformation;

    const currentDisease = [];
    for (let i = 0; i < this.surveyList[4].items[0].layout.length; i++) {
      if (i >= 4 && (this.surveyList[4].items[0].layout[i].type !== 'text')) {
        if (i === 4) {
          currentDisease.push('发现高血压' +
            this.surveyList[4].items[0].layout[i].key_value._value + '年');
        } else if ( this.surveyList[4].items[0].layout[i].key_value._key === '有无呕吐物'
          && this.surveyList[4].items[0].layout[i].key_value._key !== '呕吐物') {
          if (this.surveyList[4].items[0].layout[i].key_value._value !== '' ) {
            currentDisease.push(this.surveyList[4].items[0].layout[i].key_value._value + '呕吐物' + '(' +
              this.surveyList[4].items[0].layout[i + 1].key_value._value + ')');
          }
        } else if ( this.surveyList[4].items[0].layout[i].key_value._key === '其它' && this.surveyList[4].items[0].layout[i].key_value._value !== '') {
          currentDisease.push( '其它：' + this.surveyList[4].items[0].layout[i].key_value._value);
        } else if ( this.surveyList[4].items[0].layout[i].key_value._key && (this.surveyList[4].items[0].layout[i].key_value._key !== '呕吐物')) {
          if (this.surveyList[4].items[0].layout[i].key_value._value && this.surveyList[4].items[0].layout[i].key_value._value !== '') {
            currentDisease.push(this.surveyList[4].items[0].layout[i].key_value._value + this.surveyList[4].items[0].layout[i - 1].text);
          }
        }
      }
    }
    reportdata['现病史'] = currentDisease;

    const historyDisease = [];

    const hd1 = this.surveyList[1].items[0];
    const hd2 = this.surveyList[1].items[1];
    const hd3 = this.surveyList[1].items[2];
    const hd4 = this.surveyList[1].items[3];
    console.log(hd1);
    let iters = ''
    for ( let i = 0; i < hd1.layout.length; i++) {
      if (hd1.layout[i].type !== 'text') {
        if (hd1.layout[i].key_value._value && (hd1.layout[i].key_value._value !== '') ) {
          iters = iters + hd1.layout[i].key_value._key + ':' + hd1.layout[i].key_value._value + ' ';
        }
      }
    }
    if (iters !== '') {
      historyDisease.push(iters);
    }

    let iters2 = '';
    for ( let i = 0; i < hd2.layout.length; i++) {
      if ( hd2.layout[i].type !== 'text') {
        if ( hd2.layout[i].key_value._value && ( hd2.layout[i].key_value._value !== '')) {
          iters2 = iters2 + hd2.layout[i].key_value._key + ':' + hd2.layout[i].key_value._value + ' ';
        }
      }
    }

    if (iters2 !== '') {
      historyDisease.push(iters2);
    }

    let iters3 = '';
    for ( let i = 7; i < hd3.layout.length; i++) {
      if ( hd3.layout[i].type !== 'text') {
        if ( hd3.layout[i].key_value._value && ( hd3.layout[i].key_value._value !== '')) {
          iters3 = iters3 + hd3.layout[i].key_value._key + ':' + hd3.layout[i].key_value._value + ' ';
        }
        if ( ((i + 1) % 7) === 0) {
          if (iters3 !== '') {
            historyDisease.push(iters3);
          }
          iters3 = '';
        }
      }
    }
    let iters4 = '';
    if (hd4.layout.contentLayout && hd4.layout.contentLayout.length !== 0) {
      for (let i = 0; i < hd4.layout.contentLayout.length; i++ ) {
        for ( let j = 0; j < hd4.layout.contentLayout[i].length; j++ ) {
          if ( hd4.layout.contentLayout[i][j].key_value._value !== '') {
            iters4 = iters4 + hd4.layout.contentLayout[i][j].key_value._key + ':' + hd4.layout.contentLayout[i][j].key_value._value;
          }
        }
        historyDisease.push(iters4);
        iters4 = '';
      }
    }
    reportdata['既往病史'] = historyDisease;


    const historyPersonal = [];
    reportdata['个人史'] = historyPersonal;

    const historyFamily = {};
    historyFamily['父亲'] = []
    historyFamily['母亲'] = [];
    historyFamily['兄弟姐妹'] = [];
    historyFamily['子女'] = [];
    const rolList = [ '父亲', '母亲', '兄弟姐妹', '子女'];
    for (let r = 0; r < 4; r++) {
      if ( this.surveyList[2].items[r].displayControl.check === true) {
        const layout = this.surveyList[2].items[r].layout;
        const father = [];
        if (layout[0].key_value[0]._value === true) {
          father.push('高血压，诊断年龄:' + layout[1].key_value._value);
        }
        if (layout[2].key_value[0]._value === true) {
          father.push('冠心病，诊断年龄:' + layout[3].key_value._value);
        }
        if (layout[4].key_value[0]._value === true) {
          father.push('主动脉夹层，诊断年龄:' + layout[5].key_value._value);
        }
        if (layout[6].key_value[0]._value === true) {
          father.push('脑卒中，诊断年龄:' + layout[7].key_value._value);
        }
        if (layout[8].key_value[0]._value === true) {
          father.push('心肌病， 分型：' + layout[10].key_value._value + '，诊断年龄：' + layout[11].key_value._value);
        }
        if (layout[12].key_value[0]._value === true) {
          // if (layout[14].key_value._value === '早搏') {
          //   father.push('心律失常， 分型：早搏，早搏分型：' + layout[16].key_value._value + '，诊断年龄：' + layout[17].key_value._value );
          // } else {
          //   father.push('心律失常，分型：' + layout[14].key_value._value + '，诊断年龄：' + layout[17].key_value._value);
          // }
          father.push('心肌病， 描述：' + layout[14].key_value._value + '，诊断年龄：' + layout[15].key_value._value);
        }
        for ( let i = 16; i <= 25; i++) {
          if (layout[i].type === 'checkbox') {
            if ( layout[i].key_value[0]._value === true) {
              father.push( layout[i].options[0] + '，诊断年龄：' + layout[ i + 1].key_value._value);
            }
          }
        }
        if (layout[26].key_value[0]._value === true) {
          father.push('其它：' + layout[27].key_value._value);
        }
        console.log(father);
        historyFamily[rolList[r]] = father;
      }
    }
    reportdata['家族史'] = historyFamily;


    const signPersonal = [];
    for ( let i = 0; i < this.surveyList[5].items[0].layout.length; i++) {
      const layout = this.surveyList[5].items[0].layout;
      if (layout[i].type !== 'text') {
        if (layout[i].type === 'input_double_with_text') {
          signPersonal.push(layout[i - 1].text + '' + layout[i].left_text + layout[i].key_value[0]._value
            + layout[i].center_text + layout[i].key_value[1]._value + layout[i].right_text);
        }
        if (layout[i].type === 'input_with_text') {
          signPersonal.push(layout[i].key_value._key + ':' + layout[i].key_value._value + layout[i].right_text);
        }
        if (layout[i].type === 'radio' || layout[i].type === 'input') {
          signPersonal.push(layout[i].key_value._key + ':' + layout[i].key_value._value);
        }
      }
    }
    reportdata['体征'] = signPersonal;

    const labInsp = []

    for ( let i = 0; i < this.surveyList[6].items.length; i++) {
      if ( this.surveyList[6].items[i].displayControl.check === true) {
        let temstr = this.surveyList[6].items[i].title + '   ';
        for ( let j = 0; j < this.surveyList[6].items[i].layout.length; j++ ) {
          if (this.surveyList[6].items[i].layout[j].type !== 'text') {
            if (this.surveyList[6].items[i].layout[j].type === 'input_with_text') {
              if (this.surveyList[6].items[i].layout[j].key_value._value &&
                (this.surveyList[6].items[i].layout[j].key_value._value !== '')) {
                temstr  = temstr + this.surveyList[6].items[i].layout[j].key_value._key + ':' + '' +
                  this.surveyList[6].items[i].layout[j].key_value._value + this.surveyList[6].items[i].layout[j].right_text + '   ';
              }
            } else if ( this.surveyList[6].items[i].layout[j].type === 'input_double_with_text') {
              temstr = temstr + this.surveyList[6].items[i].layout[j].left_text + this.surveyList[6].items[i].layout[j].key_value[0]._value
                + this.surveyList[6].items[i].layout[j].center_text + this.surveyList[6].items[i].layout[j].key_value._value +
                this.surveyList[6].items[i].layout[j].right_text + '   ';
            } else if ( this.surveyList[6].items[i].layout[j].type === 'date') {
              if (this.surveyList[6].items[i].layout[j].key_value._value !== '') {
                const tempdate = new Date(this.surveyList[6].items[i].layout[j]. key_value._value);
                temstr = temstr + '' + tempdate.getFullYear() + '年' + tempdate.getMonth() + '月' + tempdate.getDay() + '日   ';
              }
            } else {
              temstr = temstr + this.surveyList[6].items[i].layout[j].key_value._key + ':' +
                this.surveyList[6].items[i].layout[j].key_value._value + '   ';
            }
          }
        }
        labInsp.push(temstr);
      }
    }
    reportdata['实验室检查'] = labInsp;
    this.ls.setObject('reportInformation', reportdata);
    console.log(this.ls.getObject('reportInformation'));
  }
}

