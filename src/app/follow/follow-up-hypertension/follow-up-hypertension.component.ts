import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../core/services/http.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FollowHypertensionList} from './followHypertensionList';

@Component({
  selector: 'app-dialog-overview-follow-hyper-dialog',
  template:   `<h1 mat-dialog-title>您还有以下项目未完成：</h1>
  <div mat-dialog-content>
    <div style="min-width: 100px">
      <mat-chip-list>
        <mat-chip  *ngFor="let name of data.unconfirmedList">{{name}}</mat-chip>
      </mat-chip-list>
    </div>
    <p >请完善信息</p>
  </div>
  <div mat-dialog-actions>
    <button mat-button [mat-dialog-close]="true" tabindex="2">好的</button>
    <button mat-button [mat-dialog-close]="false" tabindex="-1">放弃提交并退出</button>
  </div>`
})
export class DialogOverviewFollowHyperDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewFollowHyperDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-follow-up-hypertension',
  templateUrl: './follow-up-hypertension.component.html',
  styleUrls: ['./follow-up-hypertension.component.css']
})
export class FollowUpHypertensionComponent implements OnInit {
  current = 0;
  followList;
  unconfirmedList = [];
  PID;
  FID;
  routeParams;
  putRecord;
  patientName = '';
  doctorName = '';
  community = '';
  sex = '';
  nowDate = '';
  constructor(private service: HttpService, public dialog: MatDialog, private route: ActivatedRoute, private router: Router ) {
  }
  ngOnInit() {
    this.routeParams = this.route.params['value']['param'];
    this.routeParams = this.routeParams.split('_');
    if (this.routeParams.length === 1) {
      this.PID = this.routeParams[0];
      this.followList = new FollowHypertensionList().items;
      this.initValidConfirm();
    }
    if (this.routeParams.length === 2) {
      this.PID = this.routeParams[0];
      this.FID = this.routeParams[1];
      this.getRecord();
    }
    this.getHeadInformation();
  }
  getHeadInformation() {
    this.service.getRecord( {
      'PID': this.PID,
      'FID': 0,
      'disease': 'hypertension'
    }).subscribe( data => {
      this.patientName = data.Records['姓名'].Record_Value;
      this.doctorName = data.Records['complete_by'].Record_Value;
      this.community = data.Records['community'].Record_Value;
      this.sex = data.Records['性别'].Record_Value;
      const temdate = new Date();
      this.nowDate = temdate.getFullYear() + '年' + (new Date().getMonth() + 1) + '月' + temdate.getDate() + '日';
    });
  }
  getRecord() {
    const params = {
      'PID': this.PID,
      'FID': this.FID,
      'disease': 'hypertension'
    };
    this.service.getRecord(params).subscribe(data => {
      this.followList = data.Records.content;
    });
  }
  initValidConfirm () {
    for ( const part of this.followList) {
      for ( const question of part.items ) {
        question.valid_confirmed = false;
      }
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(
      DialogOverviewFollowHyperDialogComponent,
      {
        width: '450px',
        data: { unconfirmedList : this.unconfirmedList }
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        // this.putRecords();
        this.router.navigate(['survey/diabetesFollowSingleview' + this.PID]);
      }
    });
  }
  validateAllPage() {
    this.unconfirmedList = [];
    for ( const part of this.followList) {
      for ( const question of part.items ) {
        if ( question.required === true ) {
          if ( question.valid_confirmed === false ) {
            this.unconfirmedList.push( (part.step_description + '：' + question.title ) );
          }
        }
      }
    }
  }
  pre() {
    if ((this.current - 1) >= 0) { this.current--; }
  }
  next() {
    if ((this.current + 1) <= 5) { this.current++; }
  }
  out() {
    this.router.navigate(['survey/hypertensionFollowSingleview/ ' + this.PID]);
  }
  putRecords() {
    this.putRecord = {};
    this.putRecord['content'] = { Record_Value: this.followList};
    if (this.PID ) {
      this.putRecord['submit_time'] = { Record_Value: new Date()};
      this.putRecord['update_time'] = { Record_Value: new Date()};
    }
    if (this.PID && this.FID ) {
      this.putRecord['update_time'] = { Record_Value: new Date()};
    }
    let params = {};
    console.log(this.putRecord);
    if (this.PID) {
      params = {
        Records: this.putRecord,
        disease: 'hypertension',
        follow: 1,
        PID: this.PID
      };
    }
    if ( this.PID && this.FID ) {
      params = {
        Records: this.putRecord,
        disease: 'hypertension',
        follow: 1,
        PID: this.PID,
        FID: this.FID
      };
    }
    this.service.putRecord(params).subscribe(
      res => {
        console.log('this is in the hypertension follow putrecord', res);
        this.router.navigate(['survey/hypertensionFollowSingleview/' + this.PID]);
      }, error2 => {
        console.log(error2);
      }
    );
  }
  submit() {
    this.validateAllPage();
    if (this.unconfirmedList.length > 0) {
      this.openDialog();
    } else {
      this.putRecords();
    }
  }
}
