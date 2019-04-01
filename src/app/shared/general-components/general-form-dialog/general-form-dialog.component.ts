import { Component, OnInit, Inject, AfterViewInit , ViewChild } from '@angular/core';
import { ConfInterface } from '@app/shared/conf-interface';
import { MatPaginator, MatTableDataSource, PageEvent, MatTabChangeEvent} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import * as _ from 'lodash';

export interface DialogData {
  confs: any[];
  cols: number;
  layout_values: any[];
  indexs: number;
}

@Component({
  selector: 'app-general-form-dialog',
  templateUrl: './general-form-dialog.component.html',
  styleUrls: ['./general-form-dialog.component.css']
})

export class GeneralFormDialogComponent extends ConfInterface implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;


    length: 15;
    pageSize: 10;
    // MatPaginator Output
  pageEvent: PageEvent;
  start = 1;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  displayedColumns = ['no', 'part5_zyh', 'part5_hzxm', 'part5_jclb', 'part5_jcsj', 'reference', 'operate'];
  dataSource = new MatTableDataSource();
  keys: string[];

  data_list = [];
  layout_list = [];
  position: number[];

  confs: any[];
  layout: any[];
  cols: number;
  layout_values: any[];

  constructor(
    public dialog: MatDialog,
  ) {
    super();
  }



  ngOnInit() {
    console.log(this.conf.data);
    this.length = this.conf.data.length;
    this.layout = this.conf.layout;
    this.cols = this.conf.cols;
    this.dataSource = new MatTableDataSource(this.conf.data);

    this.conf.data.forEach(part => {
      const temp_layout = _.cloneDeep(this.conf.layout);
      this.layout_list.push(temp_layout);
    });
    for (let index = 0; index < this.conf.data.length; index++) {
      this.data_list.push(this.conf.data[index]);
      }

    this.layout_list.forEach((part, index) => {
      part.forEach(item => {
        if (item.key_value) {
          item.key_value._value = this.data_list[index][item.key_value._key];
        }
      });
    });
    this.layout_values = this.layout_list;
    console.log(this.layout_values);
    }

  openDialog(indexs: number): void {

    const dialogRef = this.dialog.open(DialogOverviewData, {
      width: '1100px',
      data: {
        confs: this.layout,
        cols : this.cols,
        layout_values: this.layout_values,
        indexs: indexs
      }
    });
    console.log(indexs);
    console.log(this.layout_values[indexs]);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-overview-data',
  templateUrl: 'dialog-overview-data.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogOverviewData {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewData>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
