import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog, MatTable} from '@angular/material';
import {PageEvent} from '@angular/material';

import { ManagementDialogComponent } from '../management-dialog/management-dialog.component';
import { SettingsService } from './../../shared/service/settings.service';
/** Constants used to fill up our data base. */

import { HttpForNowService } from '../../shared/service/http-for-now.service';
import { users as mockUsers } from './mock-userlist';
import { formatDate } from '@angular/common';
import { communitiesDict, roleDict } from '../../shared/config-items/static-item';


interface User {
  id: string;
  name: string;
  userName: string;
  role: string;
  supervisor: string;
  dateSignUp: any;
  community?: string;
}

const sortDict = {
  id: 'username',
  name: 'full_name',
  role: 'role',
  supervisor: 'supervisor',
  dateSignUp: 'date_joined',
  community: 'community',
  operation: 'None'
};

const comunities = [
  {
    value: 'ChangAn',
    label: '长安区'
  }, {
    value: 'BeiLin',
    label: '碑林区'
  }, {
    value: 'LianHu',
    label: '莲湖区'
  }, {
    value: 'YanLiang',
    label: '阎良区'
  }, {
    value: 'YanTa',
    label: '雁塔区'
  }
];

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements AfterViewInit {
  displayedColumns = ['id', 'name', 'role', 'supervisor', 'community', 'dateSignUp', 'operation'];
 dataSource: MatTableDataSource<User>;
 userList: User[] = [];
 roles2create = [];
 users2 = mockUsers;
 paginatorConfig = {
   length: 15,
   pageSize: 5
 };
   // MatPaginator Output
  pageEvent: PageEvent;
 filters = {
   id: '',
   name: '',
   role: '',
   supervisor: '',
   startDate: null,
   endDate: null,
   community: ''
 };
 communities = [
  {
    value: 'ChangAn',
    label: '长安区'
  }, {
    value: 'BeiLin',
    label: '碑林区'
  }, {
    value: 'LianHu',
    label: '莲湖区'
  }, {
    value: 'YanLiang',
    label: '阎良区'
  }, {
    value: 'YanTa',
    label: '雁塔区'
  }
];
communityDic = communitiesDict;
roleDict = roleDict;

//  used to get user list
 sortedKey = 'username';
 username = this.settings.user.id;
 start = 0;


 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;
 @ViewChild(MatTable) table: MatTable<any>;

 constructor(public dialog: MatDialog, public settings: SettingsService, public httpService: HttpForNowService) {
  this.getUserList();
  // mockUsers.forEach(n => {
  //   this.userList.push(<User>{
  //     id: 'testID',
  //     name: n.last_name + n.first_name,
  //     role: n.role,
  //     supervisor: n.supervisor,
  //     userName: n.username,
  //     dateSignUp: n.date_joined
  //   });
  // });
  // this.dataSource = new MatTableDataSource(this.userList);
  console.log(this.settings.user.role);
  this.settings.initUser().then(() => {
    this.roles2create = [];
    const roles2create = this.settings.authService.getRoles2DoAction(this.settings.user.role, 'createUserAccording2Role');
    roles2create.forEach(n => this.roles2create.push(n));
  });

  //  this.roles2create = ["community ", "doctor", "patient"];
 }
 startDateSelected(e) {
   console.log(e);
   this.filters.startDate = Math.round(e.value.getTime() / 1000);
   this.filter();
 }

 endDateSelected(e) {
  console.log(e);
  this.filters.endDate = Math.round(e.value.getTime() / 1000);
  this.filter();
}
 sortData(e) {
   if (sortDict[e.active] === 'None') {
     return;
   }
   console.log(e);
   if (e.direction === 'asc') {
     this.sortedKey = sortDict[e.active];
   } else if (e.direction === 'desc') {
     this.sortedKey = '-' + sortDict[e.active];
   } else {
     this.sortedKey = 'username';
   }
   this.getUserList();
 }

 ngAfterViewInit() {
 }

 applyFilter() {

 }

 triggerManagement() {
   const dialogRef = this.dialog.open(ManagementDialogComponent, {
     data: {
      roles2create: this.roles2create
     }
    });
   dialogRef.afterClosed().subscribe(result => {
     console.log(result);
     if (result === 'done') {
       this.getUserList();
     }
   });
 }

 pageChanged(e) {
   this.pageEvent = e;
   this.paginatorConfig.pageSize = this.pageEvent.pageSize;
   this.start = this.pageEvent.pageIndex * this.pageEvent.pageSize;
   console.log(e);
   console.log(this.filters);
   this.getUserList();
 }

 deleteUser(username) {
   console.log('delete user ', username);
   this.httpService.deleteUser(username).then(res => {
     console.log(res);
     this.getUserList();
   });
 }

 getUserList() {
  //  console.log(this.table);
  this.httpService.getUserList(this.username, this.start, this.sortedKey, this.filters, this.paginatorConfig.pageSize).then(res => {
    console.log(res);
    this.paginatorConfig.length = res.Count_total;
    this.userList = [];
    res.Users.forEach(n => {
      // console.log(n.date_joined);
      this.userList.push(<User>{
        id: n.username,
        name: n.full_name || '未知',
        role: n.role,
        supervisor: n.supervisor,
        dateSignUp: formatDate(n.date_joined * 1000, 'yyyy-MM-dd', 'en'),
        community: n.community
      });
    });
    console.log(this.userList);
    if (this.table) {
      this.table.renderRows();
    }
    // this.dataSource = new MatTableDataSource(this.userList);
  });
 }

 filter() {
   this.getUserList();
 }
}
