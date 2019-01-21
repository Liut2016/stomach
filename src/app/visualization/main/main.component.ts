import {Component, OnInit, Inject, ViewChild, NgZone} from '@angular/core';
import vegaEmbed from 'vega-embed';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, PageEvent, MatPaginator} from '@angular/material';
import {carsData} from '../shared/cars';
import {ShortlistService} from '../shared/shortlist.service';
import {DataLoadService} from '../shared/data-load.service';

export interface DialogData {
  animal: string;
  name: string;
}

export interface FilterData {
  keys: string[];
  res: any;
  conditions: any;
}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data;

  step = null; step1 = 1;
  panelOpenState = true;

  setStep(index: number) {
    if (index === 0) {
      this.step = 1;
    } else if (index === 1) {
      this.step1 = 1;
    }
  }

  constructor(public dialog: MatDialog,
              public dataService: DataLoadService) {
  }

  ngOnInit() {
  }

  getData($event) {
    console.log($event);
    this.data = $event;
    vegaEmbed('#embed-view', $event, {actions: false});
  }

  initRecommend() {
    this.dataService.getDimensions();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MainComponentDialogComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

import {ViewChildren, QueryList, ElementRef, AfterViewInit} from '@angular/core';
// import {DataLoadService} from "@app/visualization/shared/data-load.service";

@Component({
  selector: 'app-main-example',
  templateUrl: 'app-main-example.html',
})
export class MainComponentDialogComponent implements AfterViewInit {

  @ViewChildren('div2vis') elements2Vis: QueryList<ElementRef>;

  constructor(
    public dialogRef: MatDialogRef<MainComponentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public shortlistService: ShortlistService) {
  }

  ngAfterViewInit() {
    this.elements2Vis.forEach((ele, i) => {
      vegaEmbed(ele.nativeElement, this.shortlistService.getShortlist[i], {actions: false});
    });
    console.log(this.elements2Vis);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete(item) {
    this.shortlistService.deleteByIndex(item);
    item.isAdded = false;
  }

  getSpec(): any {
    const spec = {
      '$schema': 'https://vega.github.io/schema/vega-lite/v3.json',
      'data': {'values': carsData},
      'vconcat': this.shortlistService.getShortlist.map((ele, i) => {
        return {
          'transform': [{'filter': {'selection': 'click'}}],
          'selection': {'click': {'type': 'multi', 'encodings': ['x']}},
          'mark': this.getParse(ele).mark,
          'encoding': {
            'x': this.getParse(ele).encoding.x,
            'y': this.getParse(ele).encoding.y,
            'color': {
              'condition': {
                'selection': 'click',
              },
              'value': 'steelblue'
            }
          }
        };
      })
    };
    return spec;

  }

  merge() {
    console.log(this.shortlistService.getShortlist);
    const spec = this.getSpec();
    vegaEmbed('#graphn', spec, {actions: false});

  }

  getParse(parentJSON) {
    const string = JSON.stringify(parentJSON);
    return JSON.parse(string);
  }

}

import { HttpService} from '@app/core/services/http.service';
import { SettingsService} from '@app/core/services/settings.service';
import { ActivatedRoute, Router } from '@angular/router';

import {FormBuilder} from '@angular/forms';
import { stateGroups1 } from '@app/visualization/shared/types';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.html',
  styleUrls: ['./main.component.css']
})
export class FilterDiagComponent implements OnInit, AfterViewInit {
  user;
  startTime = '';
  endTime = '';
  idNumber = '';
  // doctorList = [];
  // communityList = [];
  paginatorConfig = {
    length: 15,
    pageSize: 5
  };
  pageEvent: PageEvent;
  start = 1;
  displayedColumns: string[] = [];
  PatientList = [];
  columns = [];
  keys;

  logic: string;
  logics: string[] = ['AND', 'OR', 'NOT'];
  stateGroups = stateGroups1;
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
    private zone: NgZone,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MainComponentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FilterData,
    public shortlistService: ShortlistService
  ) {
  }

  ngOnInit() {
    console.log(this.data.conditions);
    this.user = this.settingService.user;
    this.paginatorConfig.pageSize = 5;
    this.start = 1;
    this.condition_search = [];
   if (this.data.conditions) {
     this.conditions = this.data.conditions;
     this.getPageData();
   } else {
     this.init(0);
   }
    this.getPageData();
  }

  ngAfterViewInit() {
    console.log(this.data.keys);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  OK() {
    console.log(this.PatientList);
    this.dialogRef.close({'data': this.PatientList, 'conditions': this.conditions});
  }
  delete(item) {
    this.shortlistService.deleteByIndex(item);
    item.isAdded = false;
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

      for (let j = 0; j < medicalformsoptions.length; j++) {
        const medicalObj = medicalformsoptions[j];
        const text = medicalObj.text;
        if (text.indexOf(e) !== -1) {
          tempArray.push(medicalObj);
        }
      }
      if (tempArray.length > 0) {
        tempSelectVals.push({medicalforms: medicalforms, medicalformsoptions: tempArray});
      }
    }
    if (tempSelectVals.length > 0) {
      selectedItem.stateGroupOptions = tempSelectVals;
    }
    for (let i = 0; i < arr.length; i++) {
      const obj = arr[i];
      for (const m in obj) {
        // const medicalforms = obj.medicalforms;
        // selectedItem.form_type = obj.medicalforms;
        const ft = obj.medicalforms;
        const medicalformsoptions = obj.medicalformsoptions; // medicalformsoptions是数组
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
            selectedItem.isTime = true;
            selectedItem.isSelect = false;
            selectedItem.form_type = ft;
            selectedItem.databaseField = item._key;
          }

          if (e === item.text && item.type === 'string') {
            selectedItem.isNumber = false;
            selectedItem.isNotNumber = true;
            selectedItem.isTime = false;
            selectedItem.isSelect = false;
            selectedItem.operators = ['包含', '等于'];
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
            if (e.indexOf('性别') !== -1) {
              selectedItem.operators = ['男', '女'];
            }
            if (e.indexOf('入院病室') !== -1) {
              selectedItem.operators = ['肿瘤科VIP病区', '肿瘤一病区', '肿瘤二病区', '肿瘤四病区'];
            }
            if (e.indexOf('肿瘤大小(T)') !== -1) {
              selectedItem.operators = ['T0', 'Tis', 'Tis(DCIS)', 'Tis(LCIS)', 'Tis(Pagets)',
                'T1a', 'T1b', 'T1c', 'T2', 'T3', 'T4a', 'T4b', 'T1c', 'T1d'];
            }
            if (e.indexOf('淋巴结(N)') !== -1) {
              selectedItem.operators = ['Nx', 'N0', 'N1', 'N2a', 'N2b', 'N3a', 'N3b', 'N3c'];
            }
            if (e.indexOf('远处转移(M)') !== -1) {
              selectedItem.operators = ['M0', 'M1'];
            }
            if (e.indexOf('tnm分期') !== -1) {
              selectedItem.operators = ['T0', 'Tis', 'Tis(DCIS)', 'Tis(LCIS)', 'Tis(Pagets)',
                'T1a', 'T1b', 'T1c', 'T2', 'T3', 'T4a', 'T4b', 'T1c', 'T1d'];
            }
            if (e.indexOf('组织学分级') !== -1) {
              selectedItem.operators = ['低分化', '中分化', '高分化'];
            }
            if (e.indexOf('生存状态') !== -1) {
              selectedItem.operators = ['生存', '死亡', '缓解'];
            }
            if (e.indexOf('疾病进展') !== -1) {
              selectedItem.operators = ['脑转移', '肺转移', '骨转移'];
            }

          }
        }
      }
    }
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

        } else {
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
    console.log(this.conditions);
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
        {
          isNotNumber: element.isNotNumber, isNumber: element.isNumber,
          isSelect: element.isSelect, isTime: element.isTime,
          form_type: element.form_type, databaseField: element.databaseField,
          inputValue: element.inputValue, inputValue1: element.inputValue1,
          inputValue2: element.inputValue2, logicValue: element.logicValue,
          startTime: startTime1, endTime: endTime1,
          selectedValue: element.selectedValue, selectedInt: selectedInt
        }));
    });
    this.getPageData();
  }

  pageChanged(e) {
    alert(JSON.parse(e));
    this.pageEvent = e;
    this.paginatorConfig.pageSize = this.pageEvent.pageSize;
    this.start = this.pageEvent.pageIndex * this.pageEvent.pageSize + 1;
    this.searchRetrieval();
    // this.getPageData();

  }


  getPageData() {
    console.log(this.condition_search);
    const tableData = [];
    const isAll = true;
    const keys = this.data.keys.filter((v) => v );
    this.service.getRFilterList(this.start, this.paginatorConfig.pageSize, isAll, this.condition_search, keys).subscribe((data) => {
      this.displayedColumns = [];
      this.columns = [];
      this.paginatorConfig.length = data.count_num;
      const recordList = data.data;
      recordList.forEach((element, index) => {
        tableData.push(Object.assign({}, element));
      });
      this.PatientList = tableData;
      this.columns = Object.keys(this.PatientList[0]);
      this.displayedColumns = this.columns;
      console.log(this.PatientList);
      console.log(this.displayedColumns);

    });
  }

}

