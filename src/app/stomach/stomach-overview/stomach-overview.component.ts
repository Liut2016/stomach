import { Component, OnInit, AfterViewInit , ViewChild, NgZone, Pipe, PipeTransform, Inject} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatPaginator, MatTableDataSource, PageEvent, MatTabChangeEvent} from '@angular/material';
import { HttpService} from '@app/core/services/http.service';
import { SettingsService} from '@app/core/services/settings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalConfigure} from '@app/shared/local-configure';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { IfStmt } from '@angular/compiler';
import { dictionary } from '@app/shared/config-items/dictionary-items';
import { MyPipePipe } from '@app/shared/pipe/html-pipe';
import { MatChipInputEvent } from '@angular/material';
import _ from 'lodash';

export interface Keyword {
  name: string;
}

export interface DialogData {
  confs: any[];
  exportrules: any[];
  selectrules:any[];
}

@Pipe({
  name: 'Html'
})

@Component({
  selector: 'app-stomach-overview',
  templateUrl: './stomach-overview.component.html',
  styleUrls: ['./stomach-overview.component.css']
})



export class StomachOverviewComponent implements OnInit, AfterViewInit, PipeTransform {

  @ViewChild(MatPaginator) paginator: MatPaginator;
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

  searchParam = '';
  displayedColumns: string[] = [];
  PatientList = new MatTableDataSource();
  searchMode = 1;
  searchModeList: string[] = ['全点位搜索'];
  listLenth = 200;
  columns = [];
  columnsInterface ;
  stateGroups =  dictionary.filter_keys;
  condition_search = [];
  conditions: any = [];

  /*key worlds related*/
  searchField = '影像报告';
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  keywords: Keyword[] = [];
  indexCondition = -1;

  exportrules = [];
  seletrules = [];

  constructor(
      private service: HttpService,
      private settingService: SettingsService,
      private route: ActivatedRoute,
      private router: Router,
      private zone: NgZone,
      public dialog: MatDialog
  ) {
    this.user = this.settingService.user;

  }
  ngOnInit() {
    this.start = 1;
    this.condition_search = [];
    this.searchRetrieval();
  }
  ngAfterViewInit() {
    this.PatientList.paginator = this.paginator;
  }
  transform(value: any, ...args): any {
  }
  /**
   * 这是关键字输入框添加关键字的函数，可以根据当前选择的field来生成对应的关键字chip
   * @param event
   */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our Keyword
    if ((value || '').trim()) {
      this.keywords.push({name: `${this.searchField}: ${value.trim()}`});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /**
   * 删除chip的函数，根据field的值不同，可以选择是删除关键字输入框中的，还是删除下面过滤框的
   * @param keyword
   * @param field 关键字or过滤条件
   */
  remove(keyword: Keyword, field: any): void {
    const index = field.indexOf(keyword);

    if (index >= 0) {
      field.splice(index, 1);
    }
    console.log(this.conditions);
  }

  /**
   * 添加过滤条件
   * @param item
   */
  addFilterCondition(item: any) {
    this.indexCondition = this.conditions.length;
    this.addRetrieval(item);
  }

  openDialog(selectedItem) {
    this.indexCondition = this.conditions.indexOf(selectedItem);
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '620px',
      data: { singleCondition: this.conditions[this.indexCondition]}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.conditions[this.indexCondition] = result.return;
    });
    console.log(this.conditions[this.indexCondition]);
    console.log(this.conditions);

  }

  openRuleDialog(element): void {
    this.exportrules=[];
    this.seletrules=[];
    this.service.getRuleList().subscribe(res => {
      console.log(res);
      this.paginatorConfig.length = res.length;
      res.data.forEach(n => {
        // console.log(n.date_joined);
        /*this.exportrules.push({
          id: n.part6_pid,
          name: n.part6_name,
        });*/
       this.exportrules.push(n);
      });
      console.log(this.exportrules);
    });
    const dialogRef = this.dialog.open(DialogOverviewRule, {
      width: '500px',
      data: {
        exportrules: this.exportrules,
        seletrules:this.seletrules
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.seletrules = result;
      console.log(this.seletrules);
      this.downloadFile(element.part1_zylsh,this.seletrules);
      }     
    });
  }

  openRuleDialogAll(): void {
    this.exportrules=[];
    this.seletrules=[];
    this.service.getRuleList().subscribe(res => {
      console.log(res);
      this.paginatorConfig.length = res.length;
      res.data.forEach(n => {
        // console.log(n.date_joined);
        /*this.exportrules.push({
          id: n.part6_pid,
          name: n.part6_name,
        });*/
       this.exportrules.push(n);
      });
      console.log(this.exportrules);
    });
    const dialogRef = this.dialog.open(DialogOverviewRule, {
      width: '500px',
      data: {
        exportrules: this.exportrules,
        seletrules:this.seletrules
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.seletrules = result;
      console.log(this.seletrules);
      this.downloadAllFile(this.seletrules);
      }     
    });
  }



    /*downloadFile(pid,rules) {
      const params = {
        ruleId:rules,
        patients:pid,      
        isAll:0
      };
      this.service.downloadFile( params, 'SinglepatientData.csv' );
    }*/

    downloadFile(pid,rules) {
      const params = {
        "ruleId":rules.id,
        "patients":[pid],
        "isAll":0
      }
      this.service.downloadFile( params, 'SinglepatientData.zip' );
    }

    downloadAllFile(rules) {
      const params = {
        "ruleId":rules.id,
        "patients":[],     
        "isAll":1
      };
      this.service.downloadFile(params,'AllStomochData.zip' );
    }

  pageChanged(e) {
    this.pageEvent = e;
    this.paginatorConfig.pageSize = this.pageEvent.pageSize;
    this.start = this.pageEvent.pageIndex * this.pageEvent.pageSize + 1;
    console.log(e);
    this.searchRetrieval();
  }

  getPageData() {
    // this.searchMode = 0;
          this.service.getRecordList(this.start, this.paginatorConfig.pageSize, this.setCondition()).subscribe( (data) => {
              this.paginatorConfig.length = data.count_num;
              this.PatientList = new MatTableDataSource(data.data);
            this.displayedColumns = Object.keys(data.data[0]);
            this.displayedColumns.push('operate');
            this.displayedColumns.push('export');
            });
  }

  getSearchData(query) {
    this.searchMode = 1;
    if (!query) {
      console.log('null query');
    } else {
      const query_params = {
        q: query,
        pageindex: this.start,
        pagesize: this.paginatorConfig.pageSize
      };
      this.service.getElasticList(query_params).subscribe((data) => {
        this.paginatorConfig.length = data.count_num;
        this.PatientList = new MatTableDataSource(data.data);
        this.displayedColumns = Object.keys(data.data[0]).slice(0, Object.keys(data.data[0]).length - 1);
        console.log(this.PatientList);
        this.displayedColumns.push('highlight');
        this.displayedColumns.push('operate');
        this.displayedColumns.push('export');
      });
    }
  }

  onLinkClick(event: MatTabChangeEvent) {
    console.log('event => ', event);
    console.log('index => ', event.index);
    console.log('tab => ', event.tab);
    this.cleaRetrieval();
    this.paginator.pageIndex = 0;
  }

  goToDetail(ele) {
    console.log(ele);
     this.router.navigate([`../detail`, ele.part1_pid, ele.part1_zylsh], {relativeTo: this.route});
  }


  setCondition() {
    return {
      timeRage: [this.startTime, this.endTime],
      patientID: this.patientID,
      patientName: this.patientName,
      Disease: this.Disease,
    };
  }

  addRetrieval(selectedItem) {
    this.conditions.push({
      isTime: false,
      isNumber: false,
      isNotNumber: true,
      isSelect: false,
      stateGroupOptions: null,
      operators: [],
      inputTypeValue: null,
      selectedValue: null,
      inputValue: null,
      inputValue1: null,
      inputValue2: null,
      startTime: null,
      endTime: null,
      form_type: null,
      databaseField: null,
      text: null
    });
    this.conditions[this.conditions.length - 1].stateGroupOptions = this.stateGroups;
    this.selectChange(selectedItem);
  }

  selectChange(selectedItem) {
    const e = selectedItem.text;
    const arr = this.stateGroups;
    this.conditions[this.indexCondition].text = selectedItem.text;
    for (let i = 0; i < arr.length; i++) {
      const obj = arr[i];
      for (const m in obj) {
        if (obj.hasOwnProperty(m)) {
          const ft = obj.medicalforms;
          const medicalformsoptions = obj.medicalformsoptions; // medicalformsoptions是数组;
          for (let j = 0; j < medicalformsoptions.length; j++) {
            const item = medicalformsoptions[j];
            if (e === item.text && item.type === 'number') {
              this.conditions[this.indexCondition].isNumber = true;
              this.conditions[this.indexCondition].isNotNumber = false;
              this.conditions[this.indexCondition].isTime = false;
              this.conditions[this.indexCondition].isSelect = false;
              this.conditions[this.indexCondition].form_type = ft;
              this.conditions[this.indexCondition].databaseField = item._key;
            }
            if (e === item.text && item.type === 'time') {
              this.conditions[this.indexCondition].isNumber = false;
              this.conditions[this.indexCondition].isNotNumber = false;
              this.conditions[this.indexCondition].isTime = true;
              this.conditions[this.indexCondition].isSelect = false;
              this.conditions[this.indexCondition].form_type = ft;
              this.conditions[this.indexCondition].databaseField = item._key;
            }
            if (e === item.text && item.type === 'string') {
              this.conditions[this.indexCondition].isNumber = false;
              this.conditions[this.indexCondition].isNotNumber = true;
              this.conditions[this.indexCondition].isTime = false;
              this.conditions[this.indexCondition].isSelect = false;
              this.conditions[this.indexCondition].operators = [ '包含', '等于'];
              this.conditions[this.indexCondition].form_type = ft;
              this.conditions[this.indexCondition].databaseField = item._key;
              // if (item.elastic) {
              //   this.conditions[this.indexCondition].elastic = true;
              // }
            }
            if (e === item.text && item.type === 'select') {
              this.conditions[this.indexCondition].isNumber = false;
              this.conditions[this.indexCondition].isNotNumber = true;
              this.conditions[this.indexCondition].isTime = false;
              this.conditions[this.indexCondition].isSelect = true;
              this.conditions[this.indexCondition].form_type = ft;
              this.conditions[this.indexCondition].databaseField = item._key;
              if ( e.indexOf('性别') !== -1 ) {
                this.conditions[this.indexCondition].operators = [ '男', '女'];
              }
              if (e.indexOf('入院病室') !== -1) {
                this.conditions[this.indexCondition].operators = [ '肿瘤科VIP病区', '肿瘤一病区', '肿瘤二病区', '肿瘤四病区'];
              }
              if (e.indexOf('肿瘤大小(T)') !== -1 ) {
                this.conditions[this.indexCondition].operators = [ 'T0', 'Tis', 'Tis(DCIS)', 'Tis(LCIS)', 'Tis(Pagets)', 'T1a', 'T1b',
                          'T1c', 'T2', 'T3', 'T4a', 'T4b', 'T1c', 'T1d'];
              }
              if (e.indexOf('淋巴结(N)') !== -1) {
                this.conditions[this.indexCondition].operators = [ 'Nx', 'N0', 'N1', 'N2a', 'N2b', 'N3a', 'N3b', 'N3c'];
              }
              if (e.indexOf('远处转移(M)') !== -1) {
                this.conditions[this.indexCondition].operators = [ 'M0', 'M1'];
              }
              if (e.indexOf('tnm分期') !== -1) {
                this.conditions[this.indexCondition].operators = [ 'T0', 'Tis', 'Tis(DCIS)', 'Tis(LCIS)', 'Tis(Pagets)', 'T1a',
                                           'T1b', 'T1c', 'T2', 'T3', 'T4a', 'T4b', 'T1c', 'T1d'];
              }
              if (e.indexOf('组织学分级') !== -1) {
                this.conditions[this.indexCondition].operators = [ '低分化', '中分化', '高分化'];
              }
              if (e.indexOf('生存状态') !== -1) {
                this.conditions[this.indexCondition].operators = [ '生存', '死亡', '缓解'];
              }
              if (e.indexOf('疾病进展') !== -1) {
                this.conditions[this.indexCondition].operators = [ '脑转移', '肺转移', '骨转移'];
              }
            }
          }
        }
      }
    }
    this.openDialog(this.conditions[this.indexCondition]);
  }


  TimeSelected(e) {
    const y = e.getFullYear();
    const m = e.getMonth() + 1;
    // m = m < 10 ? ('0' + m) : m;
    const d = e.getDate();
    const ji = '日一二三四五六'.charAt(e.getDay());
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
    this.conditions[i].operators = [],
    this.conditions[i].form_type = null;
    this.conditions[i].databaseField = null;
    this.conditions[i].elastic = null;
    this.conditions[i].text = null;
    // this.paginatorConfig.pageSize = 5;
    // this.start = 1;
    // this.condition_search = [];
    // this.getPageData();
  }




  cleaRetrieval() {
    this.conditions = [];
    this.keywords = [];
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
        {  isNotNumber: element.isNotNumber, isNumber: element.isNumber, isSelect: element.isSelect, isTime: element.isTime,
          form_type:  element.form_type , databaseField: element.databaseField, inputValue:  element.inputValue,
          inputValue1: element.inputValue1, inputValue2: element.inputValue2, startTime:  startTime1 , endTime: endTime1,
          selectedValue: element.selectedValue, selectedInt: selectedInt,
        }));
    });
    console.log(this.start, this.paginatorConfig.pageSize, this.keywords, this.condition_search);
    const tableData = [];
    this.service.getFilterList(this.start, this.paginatorConfig.pageSize, this.keywords, this.condition_search).subscribe( (data) => {
      this.paginatorConfig.length = data.count_num;
      const recordList = data.data;
      recordList.forEach((element, index) => {
        if (element.hasOwnProperty('part1_sr')) {
          element.part1_sr = element.part1_sr.split(' ')[0];
        }
        tableData.push(Object.assign({}, element));
      });
      this.PatientList = new MatTableDataSource(recordList);
      console.log('data1', data);
      console.log('data', data.data[0]);
      this.displayedColumns = Object.keys(data.data[0]);
      this.displayedColumns.push('operate');
      this.displayedColumns.push('export');
      //this.displayedColumns.push('export');
      // if (_.indexOf(this.displayedColumns, 'highlight') > 0) {
      //   this.searchMode = 2;
      // } else {
      //   this.searchMode = 1;
      // }
      console.log(this.displayedColumns);
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


export interface FilterData {
  singleCondition: any;
}



@Component({
  selector: 'app-filter-dialog',
  templateUrl: 'filter-dialog.html',
})
export class FilterDialogComponent implements OnInit, AfterViewInit {

  constructor(
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FilterData) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log();
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  OK() {
    console.log( this.data.singleCondition);
    this.dialogRef.close({'return': this.data.singleCondition});
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-overview-rule',
  templateUrl: 'dialog-overview-rule.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogOverviewRule {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewRule>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
