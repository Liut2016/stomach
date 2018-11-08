import { Component, OnInit, Inject, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { SurveyList} from '@app/survey/diabetes/surveyDiabetesList';
import { HttpService} from '@app/core/services/http.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SettingsService} from '@app/core/services/settings.service';
import { GeneralDateComponent} from '@app/shared/general-date/general-date.component';

@Component({
  selector: 'app-dialog-diabetes-dialog',
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
export class DialogDiabetesComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDiabetesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'app-diabetes',
  templateUrl: './diabetes.component.html',
  styleUrls: ['./diabetes.component.css']
})
export class DiabetesComponent implements OnInit {
  @ViewChildren(GeneralDateComponent) DateItems: QueryList<GeneralDateComponent>;
  current = 0;
  user;
  surveyList;
  unconfirmedList = [];
  unconfirmedMustList = [];
  mustConfirm = [ '姓名', '身份证号' ];
  edit_disabled = false;
  community = '交大一附院';
  doctor = '尹二畅';
  submitTime = '';
  updateTime = '';
  putRecord;
  PID;
  constructor(
    private service: HttpService,
    private settingService: SettingsService,
    public  dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router ) {}
  ngOnInit() {
    this.user = this.settingService.user;
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
      }
    } else {
      this.edit_disabled = true;
    }

  }
  initAllForm() {
    if ( this.PID ) {
      const getRecordParam = {
        'PID': this.PID,
        'FID': 0,
        'disease': 'diabetes'
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
    if ((this.current + 1) <= 8) { this.current++; }
  }
  pre() {
    if ((this.current - 1) >= 0) { this.current --; }
  }
  out() {
    this.router.navigate(['survey/diabetesMS']);
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
        disease: 'diabetes',
        follow: 0,
        PID: this.PID
      };
    } else {
      params = {
        Records: this.putRecord,
        disease: 'diabetes',
        follow: 0
      };
    }

    this.service.putRecord(params).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['survey/diabetesMS']);
      }, error2 => {
        console.log(error2);
      }
    );
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(
      DialogDiabetesComponent,
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
}
