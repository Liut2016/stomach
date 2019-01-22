import { Component, OnInit, AfterViewInit , ViewChild, NgZone, Pipe, PipeTransform} from '@angular/core';
import { MatPaginator, MatTableDataSource, PageEvent,MatTabChangeEvent} from '@angular/material';
import { HttpService} from '@app/core/services/http.service';
import { SettingsService} from '@app/core/services/settings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalConfigure} from '@app/shared/local-configure';

import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { IfStmt } from '@angular/compiler';
import { dictionary } from '@app/shared/config-items/dictionary-items';
import { MyPipePipe } from '@app/shared/pipe/html-pipe';

@Pipe({
  name: 'Html'
})

@Component({
  selector: 'app-stomach-overview',
  templateUrl: './stomach-overview.component.html',
  styleUrls: ['./stomach-overview.component.css']
})
export class StomachOverviewComponent implements OnInit, AfterViewInit, PipeTransform {

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
  dictionary = dictionary.part1_home;
  condictions = {
      'filter_dict': { },
      'start': 0,
      'offset': this.paginatorConfig.length,
      'disease': 'hypertension',
      'follow': 0
  };
  searchParam = '';
  displayedColumns: string[] = [];
  PatientList = new MatTableDataSource();
  searchMode = 0;
  searchModeList : string[] = ['查找搜索','关键字搜索','全点位搜索'];


  listLenth = 200;
  columns = [];
  columnsInterface ;
  logic: string;
  logics: string[] = ['AND', 'OR'];
  stateGroups =  dictionary.filter_keys;
  condition_search = [];
  conditions: any = [
    {
      isLogicRemove: false,
      isAddRemove: true,
      isClearRemove: false,
      isNumber: false,
      isNotNumber: true,
      isTime: false,
      isSelect: false,
      stateGroupOptions: this.stateGroups,
      operators: [],
      inputTypeValue: null,
      selectedValue: null,
      logicValue: null,
      inputValue: null,
      inputValue1: null,
      inputValue2: null,
      startTime: null,
      endTime: null,
      form_type: null,
      databaseField: null

    }
  ];



  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
      private service: HttpService,
      private settingService: SettingsService,
      private route: ActivatedRoute,
      private router: Router,
      private zone: NgZone
  ) {
    this.user = this.settingService.user;
    this.roleControl();
  }
  ngOnInit() {
    this.start = 1;
    this.condition_search = [];
    this.getPageData();
  }
  ngAfterViewInit() {
    this.PatientList.paginator = this.paginator;
  }
  transform(value: any, ...args): any {
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
    if(this.searchMode === 0){
        this.getPageData();
    }else if(this.searchMode === 1){
        this.getSearchData(this.searchParam);
    }else{
        this.searchRetrieval();
    }
  }

  getPageData() {
    this.searchMode = 0;
          this.service.getRecordList(this.start, this.paginatorConfig.pageSize, this.setCondition()).subscribe( (data) => {
              this.paginatorConfig.length = data.count_num;
              this.PatientList = new MatTableDataSource(data.data);
            this.displayedColumns = Object.keys(data.data[0]);
            this.displayedColumns.push('operate');
            });
  }

  getSearchData(query) {
    this.searchMode = 1;
    if (!query) {
      console.log('null query');
    } else {
      this.service.getElasticList(query).subscribe((data) => {
        this.paginatorConfig.length = data.count_num;
        this.PatientList = new MatTableDataSource(data.data);
        this.displayedColumns = Object.keys(data.data[0]).slice(0, Object.keys(data.data[0]).length - 1);
        console.log(this.PatientList);
        this.displayedColumns.push('highlight');
        this.displayedColumns.push('operate');
      });
    }
  } 

  onLinkClick(event: MatTabChangeEvent) {
    console.log('event => ', event);
    console.log('index => ', event.index);
    console.log('tab => ', event.tab);
    this.clear();
    this.cleaRetrieval();
  }

  clear() {
      this.patientName = '';
      this.endTime = '';
      this.startTime = '';
      this.patientID = '';
      this.Disease = '';
      this.searchParam='';
      this.search();
  }
  goToDetail(ele) {
    console.log(ele);
     this.router.navigate([`../detail`, ele.part1_pid, ele.part1_zylsh], {relativeTo: this.route});
  }


  setCondition() {
    return {
      // timeRage: [this.startTime, this.endTime],
      patientID: this.patientID,
      patientName: this.patientName,
      Disease: this.Disease,
    };
  }

  selectChange(e, selectedItem) {
    const arr = this.stateGroups;
    const tempSelectVals = [];
    const groupOptions = this.stateGroups;
    for (let i = 0; i < groupOptions.length; i++) {
      const groupObj = groupOptions[i];
      const medicalforms = groupObj.medicalforms;
      const medicalformsoptions = groupObj.medicalformsoptions;
      const tempArray = [];

      for ( let j = 0; j < medicalformsoptions.length; j++) {
        const medicalObj = medicalformsoptions[j];
        const text = medicalObj.text;
        if (text.indexOf(e) !== -1) {
          tempArray.push(medicalObj);
        }
      }
      if ( tempArray.length > 0) {
        tempSelectVals.push({medicalforms: medicalforms, medicalformsoptions: tempArray});
      }
    }
    if ( tempSelectVals.length > 0) {
      selectedItem.stateGroupOptions = tempSelectVals;
    }
    for (let i = 0; i < arr.length; i++) {
      const obj = arr[i];
      for (let m in obj) {
        // const medicalforms = obj.medicalforms;
        //selectedItem.form_type = obj.medicalforms;
        const ft = obj.medicalforms;
        const medicalformsoptions = obj.medicalformsoptions;//medicalformsoptions是数组
        for (let j = 0; j < medicalformsoptions.length; j++) {
          const item = medicalformsoptions[j];
          if (e === item.text && item.type === 'number') {
            selectedItem.isNumber = true;
            selectedItem.isNotNumber = false;
            selectedItem.isTime = false;
            selectedItem.isSelect = false;
            selectedItem.form_type = ft;
            selectedItem.databaseField = item._key;
          }

          if (e === item.text && item.type === 'time') {
            selectedItem.isNumber = false;
            selectedItem.isNotNumber = false;
            selectedItem.isTime=true;
            selectedItem.isSelect = false;
            selectedItem.form_type = ft;
            selectedItem.databaseField = item._key;
          }

          if (e === item.text && item.type === 'string') {
            selectedItem.isNumber = false;
            selectedItem.isNotNumber = true;
            selectedItem.isTime = false;
            selectedItem.isSelect = false;
            selectedItem.operators = [ '包含', '等于'];
            selectedItem.form_type = ft;
            selectedItem.databaseField = item._key;
          }

          if (e === item.text && item.type === 'select') {
            selectedItem.isNumber = false;
            selectedItem.isNotNumber = true;
            selectedItem.isTime = false;
            selectedItem.isSelect = true;
            selectedItem.form_type = ft;
            selectedItem.databaseField = item._key;
            if(e.indexOf('性别')!=-1){
              selectedItem.operators = [ '男', '女'];
            }
            if(e.indexOf('入院病室')!=-1){
              selectedItem.operators = [ '肿瘤科VIP病区', '肿瘤一病区', '肿瘤二病区', '肿瘤四病区'];
            }
            if(e.indexOf('肿瘤大小(T)')!=-1){
              selectedItem.operators = [ 'T0','Tis','Tis(DCIS)','Tis(LCIS)','Tis(Pagets)','T1a','T1b','T1c','T2','T3','T4a','T4b','T1c','T1d'];
            }
            if(e.indexOf('淋巴结(N)')!=-1){
              selectedItem.operators = [ 'Nx','N0','N1','N2a','N2b','N3a','N3b','N3c'];
            }
            if(e.indexOf('远处转移(M)')!=-1){
              selectedItem.operators = [ 'M0','M1'];
            }
            if(e.indexOf('tnm分期')!=-1){
              selectedItem.operators = [ 'T0','Tis','Tis(DCIS)','Tis(LCIS)','Tis(Pagets)','T1a','T1b','T1c','T2','T3','T4a','T4b','T1c','T1d'];
            }
            if(e.indexOf('组织学分级')!=-1){
              selectedItem.operators = [ '低分化','中分化','高分化'];
            }
            if(e.indexOf('生存状态')!=-1){
              selectedItem.operators = [ '生存','死亡','缓解'];
            }
            if(e.indexOf('疾病进展')!=-1){
              selectedItem.operators = [ '脑转移','肺转移','骨转移'];
            }

          }
        }
      }
    }
  }


  TimeSelected(e) {
    const y = e.getFullYear();
    let m = e.getMonth() + 1;
    // m = m < 10 ? ('0' + m) : m;
    let d = e.getDate();
    let ji = '日一二三四五六'.charAt(e.getDay());
    return `${y}/${m}/${d} 星期${ji}`;
  }


  init(i) {
    this.conditions[i].inputValue = null;
    this.conditions[i].inputTypeValue = null;
    this.conditions[i].selectedValue = null;
    this.conditions[i].stateGroupOptions = this.stateGroups;
    this.conditions[i].isTime = false;
    this.conditions[i].isNotNumber = true;
    this.conditions[i].isNumber = false;
    this.conditions[i].isSelect = false;
    this.conditions[i].inputValue1 = null;
    this.conditions[i].inputValue2 = null;
    this.conditions[i].startTime = null;
    this.conditions[i].endTime = null;
    this.conditions[i].form_type = null;
    this.conditions[i].databaseField = null;
    this.paginatorConfig.pageSize = 5;
    this.start = 1;
    this.condition_search = [];
    this.getPageData();
  }


  addRetrieval(e, selectedItem) {
    this.conditions.push({
      isLogicRemove: true,
      isAddRemove: false,
      isClearRemove: true,
      isNumber: false,
      isNotNumber: true,
      isSelect: false,
      stateGroupOptions: null,
      operators: [],
      inputTypeValue: null,
      selectedValue: null,
      logicValue: 'AND',
      inputValue: null,
      inputValue1: null,
      inputValue2: null,
      form_type: null,
      databaseField: null
    });
    this.conditions[this.conditions.length - 1].stateGroupOptions = this.stateGroups;
    this.selectChange(e, selectedItem);
  }

  clearSingleRetrieval(selectedItem) {
    let index = 0;
    for (let i = 0; i < this.conditions.length; i++) {
      if (selectedItem === this.conditions[i]) {
        if (i === 0) {
          this.cleaRetrieval();

        }else {
          index = i;
          this.conditions.splice(index, 1);
        }
      }
    }
  }

  cleaRetrieval() {
    this.conditions.splice(1, this.conditions.length - 1);
    this.displayedColumns = [];
    this.init(0);
  }


  searchRetrieval() {
    this.condition_search = [];
    let selectedInt;
    let startTime1;
    let endTime1;
    this.conditions.forEach((element, index) => {
      if (element.startTime) {
        startTime1 = this.TimeSelected(element.startTime);
      }
      if (element.endTime) {
        endTime1 = this.TimeSelected(element.endTime);
      }
      if (element.selectedValue === '男') {
        selectedInt = 1;
      }
      if (element.selectedValue === '女') {
        selectedInt = 2;
      }
      this.condition_search.push(Object.assign({},
        {  isNotNumber: element.isNotNumber, isNumber: element.isNumber,
          isSelect: element.isSelect, isTime: element.isTime,
          form_type:  element.form_type , databaseField: element.databaseField,
          inputValue:  element.inputValue, inputValue1: element.inputValue1,
          inputValue2: element.inputValue2, logicValue: element.logicValue,
          startTime:  startTime1 , endTime: endTime1,
          selectedValue: element.selectedValue, selectedInt: selectedInt
        }));
    });

    this.searchMode=2;
    const tableData = [];
    const isAll = false;
    this.service.getFilterList(this.start, this.paginatorConfig.pageSize, isAll, this.condition_search).subscribe( (data) => {
      this.paginatorConfig.length = data.count_num;
      const recordList = data.data;
      recordList.forEach((element, index) => {
        tableData.push(Object.assign({}, element));
      });
      this.PatientList = new MatTableDataSource(recordList);
      this.displayedColumns = Object.keys(data.data[0]);
      console.log(this.displayedColumns);
      console.log(recordList);
      console.log(this.PatientList);
      this.displayedColumns.push('operate');
    });
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
