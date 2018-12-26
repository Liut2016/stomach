import { Component, OnInit, AfterViewInit , ViewChild, NgZone} from '@angular/core';
import { MatPaginator, MatTableDataSource,PageEvent} from '@angular/material';
import { HttpService} from '@app/core/services/http.service';
import { SettingsService} from '@app/core/services/settings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalConfigure} from '@app/shared/local-configure';

@Component({
  selector: 'app-stomach-overview',
  templateUrl: './stomach-overview.component.html',
  styleUrls: ['./stomach-overview.component.css']
})
export class StomachOverviewComponent implements OnInit, AfterViewInit {

  user;
  patientID = '';
  patientName = '';
  startTime = '';
  endTime = '';
  idNumber = '';
  Disease = '';
  DiseaseList = [ '乙状结肠恶性肿瘤', '升结肠恶性肿瘤', '降结肠恶性肿瘤', '横结肠恶性肿瘤', '直肠恶性肿瘤', '直肠癌', '十二指肠恶性肿瘤', '回肠恶性肿瘤'];
  paginatorConfig = {
    length: 15,
    pageSize: 10
  };
    // MatPaginator Output
  pageEvent: PageEvent;
  start = 1;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  condictions = {
      'filter_dict': { },
      'start': 0,
      'offset': this.paginatorConfig.length,
      'disease': 'hypertension',
      'follow': 0
  };
  displayedColumns: string[] = ['PID' , 'PatientName', 'HID', 'Disease', 'Date', 'Staydays', 'operate'];
  PatientList = new MatTableDataSource(<PeriodicElement[]>(ELEMENT_DATA));
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
      private service: HttpService,
      private settingService: SettingsService,
      private route: ActivatedRoute,
      private router: Router,
      private zone: NgZone
  ) {
    this.user = this.settingService.user;
    this.PatientList.paginator = this.paginator;
    this.roleControl();
    this.getPageData();
  }
  ngOnInit() {
  }
  ngAfterViewInit() {

  }
  roleControl() {
      if (this.user.role === 'doctor') {
          this.condictions.filter_dict = { complete_by: this.user.name, community: this.user.community};
      } else if (this.user.role === 'community') {
          this.condictions.filter_dict = { community: this.user.community };
      } else if (this.user.role === 'patient') {
          if ( typeof (this.user.idNumber) === 'undefined' ) {
              this.condictions.filter_dict = { '身份证号': this.user.idNumber };
          } else {
              this.condictions.filter_dict = { '身份证号': this.user.idNumber };
          }
      }
  }

  clear() {
      this.patientName = '';
      this.endTime = '';
      this.startTime = '';
      this.patientID = '';
      this.Disease = '';
      this.search();
  }
  search() {
      if (this.user.role === 'super') {
          this.condictions.filter_dict = {
              '身份证号': this.idNumber,
              'submit_time': [this.startTime, this.endTime],
              '姓名': this.patientName
          };
          this.getPageData();
      }
      if (this.user.role === 'community') {this.paginatorConfig
          this.condictions.filter_dict = {
              '身份证号': this.idNumber,
              'submit_time': [this.startTime, this.endTime],
              '姓名': this.patientName,
          };
          this.getPageData();
      }
      if (this.user.role === 'doctor') {
          this.condictions.filter_dict = {
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
          follow: 0,
          FID: 0
      };
      const deleteParam = {
          body: deleteID
      };
      this.service.deleteRecord(deleteParam).subscribe(res => {
          this.getPageData();
      });
  }

  pageChanged(e) {
    this.pageEvent = e;
    this.paginatorConfig.pageSize = this.pageEvent.pageSize;
    this.start = this.pageEvent.pageIndex * this.pageEvent.pageSize + 1;
    console.log(e);
    this.getPageData();
  }

  getPageData() {
      const tableData = [];
          this.service.getRecordList(this.start, this.paginatorConfig.pageSize, this.setCondition()).subscribe( (data) => {
              this.paginatorConfig.length = data.count_num;
              const recordList = data.data;
              for ( const item of recordList ) {
                  tableData.push(
                      {
                          PID: item['part1_pid'],
                          PatientName: item['part1_xm'],
                          HID: item['part1_zylsh'],
                          Disease: item['part1_zzd'],
                          Date: item['part1_rysj'].substring(0, 10),
                          Staydays: item['part1_sjzyts'],
                      }
                  );
              }
              this.PatientList.data = tableData;
            });
}
  goToDetail(ele) {
    console.log(ele);
     this.router.navigate([`./detail`, ele.PID, ele.HID], {relativeTo: this.route});
  }

  setCondition() {
    return {
      // timeRage: [this.startTime, this.endTime],
      patientID: this.patientID,
      patientName: this.patientName,
      Disease: this.Disease,
    };
  }
}

export interface PeriodicElement {
  PID: string;
  HID: string;
  PatientName: string;
  Disease: string;
  Date: string;
  Staydays: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
];


