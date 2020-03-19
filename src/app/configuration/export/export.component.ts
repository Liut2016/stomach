
import {Component, ViewChild, AfterViewInit,OnInit,Inject} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatTable} from '@angular/material';
import {PageEvent} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { ExportDialogComponent } from '@app/configuration/export-dialog/export-dialog.component';
import { SettingsService } from '@app/core/services/settings.service';
/** Constants used to fill up our data base. */

import { HttpService } from '@app/core/services/http.service';
import { formatDate } from '@angular/common';
import { dictionary } from '@app/shared/config-items/dictionary-items';

interface Rules {
  id: string;
  name: string;
  creator: string;
  modificaor: string;
  createtime: any;
  updatetime: any;
}

export interface DialogData {
  name: string;
  id: string;
}

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit,AfterViewInit {

 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatTable) table: MatTable<any>;

  stateGroups =  dictionary.filter_keys;
  key_list = [];
  key:string;


 displayedColumns = ['id', 'name', 'creator', 'modificator', 'createtime', 'updatetime','delete','update'];
 dataSource: MatTableDataSource<Rules>;
 ruleList: Rules[] = [];
 rule:[];

 id:number;
 name:string;
 creator:string;
 modificator:string;
 createtime:string;
 updatetime:string;

 // for prod 
 startDateSelected(e) {}
 endDateSelected(e) {}
 sortData(e) {}



 paginatorConfig = {
   length: 15,
   pageSize: 5
 };
   // MatPaginator Output
 pageEvent: PageEvent;
 
 filters = {
   id: '',
   name: '',
   creator: '',
   startDate: null,
   endDate: null,
   community: ''
 };

//  used to get user list
 sortedKey = 'username';
 username = this.settings.user.id;
 start = 0;



 constructor(public dialog: MatDialog, public settings: SettingsService, public httpService: HttpService) {
  this.getRuleList();
 }

  ngOnInit() {
  }

  addFilterCondition(item: any) {
    this.key_list.push(item);
  }

  remove(key:any, keys: any): void {
    const index = keys.indexOf(key);

    if (index >= 0) {
      keys.splice(index, 1);
    }
    console.log(this.key_list);
  }
 ngAfterViewInit() {
 }

 applyFilter() {

 }

 triggerManagement() {
   const dialogRef = this.dialog.open(ExportDialogComponent, {
     width:'500px',
    });
   dialogRef.afterClosed().subscribe(result => {
     console.log(result);
     if (result === 'done') {
       this.getRuleList();
     }
   });
 }

 pageChanged(e) {
   this.pageEvent = e;
   this.paginatorConfig.pageSize = this.pageEvent.pageSize;
   this.start = this.pageEvent.pageIndex * this.pageEvent.pageSize;
   console.log(e);
   console.log(this.filters);
   this.getRuleList();
 }

 deleteRule(rule) {
   console.log('delete rule ', rule);
   const dialogRef = this.dialog.open(DeleteDialog, {
    width:'200px',
    data: {
      id:rule.id,
      name:rule.name
    }
   });
  dialogRef.afterClosed().subscribe(result => {
    //console.log(result);
    this.delete(result);

   });   
 }

delete(id){
  this.httpService.deleteRule(id).subscribe(res => {
     this.getRuleList();
   });
}

 saveRule(id:number){

  const dialogRef = this.dialog.open(ExportDialogComponent, {
    width:'500px',
    data: {
      id:id
    }
   });

  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
    if (result === 'done') {

      this.getRuleList();
    }
  });
 }


 getRuleList() {
  //  console.log(this.table);
  this.httpService.getRuleList().subscribe(res => {
    console.log(res);
    this.paginatorConfig.length = res.length;
    this.ruleList = [];
    res.data.forEach(n => {
      // console.log(n.date_joined);
      this.ruleList.push(<Rules>{
        id: n.part6_pid,
        name: n.part6_name,
        creator:n.part6_creatorUser,
        modificaor: n.part6_updateUser,
        createtime: n.part6_createTime.substring(0,10),
        updatetime: n.part6_updateTime.substring(0,10),
      });
    });
    console.log(this.ruleList);
    /*if (this.table) {
      this.table.renderRows();
    }*/
    this.dataSource = new MatTableDataSource(this.ruleList);
    this.dataSource.paginator=this.paginator;
  });
 }

 filter() {
   this.getRuleList();
 }
}

@Component({
  selector: 'delete-dialog',
  templateUrl: 'delete-dialog.html',
})
export class DeleteDialog {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
