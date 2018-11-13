import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatPaginator, MatTableDataSource} from '@angular/material';
import { HttpService} from '@app/core/services/http.service';
import { ActivatedRoute, Router} from '@angular/router';
import { LocalConfigure} from '@app/shared/local-configure';
import {communitiesDict} from '@app/shared/config-items/static-item';

@Component({
  selector: 'app-follow-up-hypertension-singleview',
  templateUrl: './follow-up-hypertension-singleview.component.html',
  styleUrls: ['./follow-up-hypertension-singleview.component.css']
})

export class FollowUpHypertensionSingleviewComponent implements OnInit{
  pageSize = 10;
  pageIndex = 0;
  listLenth = 200;
  displayedColumns: string[] = ['CID', 'FID', 'Time',  'operate'];
  PatientList = new MatTableDataSource(<PeriodicElement[]>(ELEMENT_DATA));
  PID;
  patientName = '';
  doctorName = '';
  community = '';
  condictions = {
    'filter_dict': {},
    'start': 0,
    'offset': this.listLenth,
    'disease': 'hypertension',
    'follow': 1,
    'sorted_key': 'FID',
    'PID': 1
  }
  communitiesDict = new LocalConfigure().communitiesDict;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service: HttpService, private route: ActivatedRoute,  private router: Router) {}

  ngOnInit() {
    this.PatientList.paginator = this.paginator;
    this.PID = this.route.params['value']['PID'];
    this.condictions.PID = this.PID;
    this.getHeadInformation();
    this.getPageData();
  }
  getHeadInformation() {
    this.service.getRecord( {
      'PID': this.PID,
      'FID': 0,
      'disease': 'hypertension'
    }).subscribe( data => {
      this.patientName = data.Records['姓名'].Record_Value;
      this.doctorName = data.Records['complete_by'].Record_Value;
      this.community = communitiesDict[data.Records['community'].Record_Value];
    });
  }

  deleteRecord(FID) {
    const deleteID = {
      PID: this.PID,
      FID: FID,
      follow: 1,
      disease: 'hypertension'
    };
    const deleteParam = {
      body: deleteID
    };
    this.service.deleteRecord(deleteParam).subscribe(res => {
      this.getPageData();
      console.log(res);
    });
  }
  getPageData() {
    const tableData = [];
    this.service.getRecordList(this.condictions).subscribe(res => {
      console.log(res);
      const recordList = res.PID_info;
      let i = 1;
      for ( const item of recordList ) {
        tableData.push(
          {
            FID: item['FID'],
            Time: (item['submit_time'] + '').slice(0, 10),
            CID: i + ''
          }
        );
        i++;
      }
      this.listLenth = res.Count_total;
      this.PatientList.data = tableData;
    });
  }
}

export interface PeriodicElement {
  FID: string;
  CID: string;
  Time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

