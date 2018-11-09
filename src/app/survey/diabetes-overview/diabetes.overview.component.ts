import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatTableDataSource} from '@angular/material';
import { HttpService} from '@app/core/services/http.service';
import { SettingsService} from '@app/core/services/settings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalConfigure} from '@app/shared/local-configure';

@Component({
  selector: 'app-diabetes-overview',
  templateUrl: './diabetes-overview.component.html',
  styleUrls: ['./diabetes-overview.component.css']
})

export class DiabetesOverviewComponent implements OnInit {
  user;
  communityName = '';
  doctorName = '';
  patientName = '';
  startTime = '';
  endTime = '';
  idNumber = '';
  doctorList = [];
  communityList = [];
  pageSize = 10;
  pageIndex = 0;
  listLenth = 200;
  condictions = {
    'filter_dict': {},
    'start': 0,
    'offset': this.listLenth,
    'disease': 'diabetes',
    'follow': 0
  };
  communitiesDict = new LocalConfigure().communitiesDict;
  communitiesDictReverse = new LocalConfigure().communitiesDictReverse;
  displayedColumns: string[] = ['PID', 'PatientName', 'DoctorName', 'Community', 'SubmitTime', 'UpdateTime',  'operate'];
  PatientList = new MatTableDataSource(<PeriodicElement[]>(ELEMENT_DATA));
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private service: HttpService,
    private settingService: SettingsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.user = this.settingService.user;
    this.PatientList.paginator = this.paginator;
    this.roleControl();
    this.getPageData(this.condictions);
  }
  downloadFile() {
    const params = {
      disease: 'diabetes',
      follow: '0'
    };
    this.service.downloadFile( params, 'AllDiabetesData.csv' );
  }
  roleControl() {
    if (this.user.role === 'doctor') {
      this.condictions.filter_dict = { complete_by: this.user.name, community: this.user.community};
    } else if (this.user.role === 'community') {
      this.condictions.filter_dict = { community: this.user.community };
    } else if (this.user.role === 'patient') {
      this.condictions.filter_dict = { '身份证号': this.user.idNumber };
    }
  }
  clear() {
    this.patientName = '';
    this.endTime = '';
    this.startTime = '';
    this.doctorName = '';
    this.communityName = '';
    this.idNumber = '';
    this.search();
  }
  search() {
    if (this.user.role === 'super') {
      this.condictions.filter_dict = {
        'community': this.communitiesDictReverse[this.communityName],
        'complete_by': this.doctorName,
        '身份证号': this.idNumber,
        'submit_time': [this.startTime, this.endTime],
        '姓名': this.patientName
      };
      this.getPageData(this.condictions);
    }
    if (this.user.role === 'community') {
      this.condictions.filter_dict = {
        'complete_by': this.doctorName,
        '身份证号': this.idNumber,
        'submit_time': [this.startTime, this.endTime],
        '姓名': this.patientName,
        'community': this.user.community,
      };
      this.getPageData(this.condictions);
    }
    if (this.user.role === 'doctor') {
      this.condictions.filter_dict = {
        'complete_by': this.user.name,
        'community': this.user.community,
        '身份证号': this.idNumber,
        'submit_time': [this.startTime, this.endTime],
        '姓名': this.patientName
      };
    }
  }
  deleteRecord(pid) {
    pid = pid + '';
    const deleteID = {
      PID: pid,
      disease: 'diabetes',
      follow: 0,
      FID: 0
    };
    const deleteParam = {
      body: deleteID
    };
    this.service.deleteRecord(deleteParam).subscribe(res => {
      this.getPageData(this.condictions);
    });
  }
  getPageData(condictions) {
    const tableData = [];
    this.service.getRecordList(condictions).subscribe((res) => {
      this.listLenth = res.Count_total;
      condictions.offset = this.listLenth;
      this.service.getRecordList(condictions).subscribe( (data) => {
        const recordList = data.PID_info;
        this.doctorList = [];
        this.communityList = [];
        for ( const item of recordList ) {
          tableData.push(
            {
              PID: item['PID'],
              PatientName: item['姓名'],
              DoctorName: item['complete_by'],
              Community: this.communitiesDict[item['community']],
              SubmitTime: item['submit_time'].substring(0, 10),
              UpdateTime: item['update_time'].substring(0, 10),
            }
          );
          if ( this.doctorList.indexOf(item['complete_by']) === -1) {
            this.doctorList.push(item['complete_by']);
          }
          if ( this.communityList.indexOf(this.communitiesDict[item['community']]) === -1) {
            this.communityList.push(this.communitiesDict[item['community']]);
          }
        }
        this.listLenth = data.Count_total;
        this.PatientList.data = tableData;
      });
    });
  }
}
export interface PeriodicElement {
  PID: string;
  PatientName: string;
  DoctorName: string;
  Community: string;
  SubmitTime: string;
  UpdateTime: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
];
