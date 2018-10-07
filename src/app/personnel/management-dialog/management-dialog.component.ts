import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { HttpForNowService } from '../../shared/service/http-for-now.service';
import { SettingsService } from '../../shared/service/settings.service';


@Component({
  selector: 'app-management-dialog',
  templateUrl: './management-dialog.component.html',
  styleUrls: ['./management-dialog.component.css']
})
export class ManagementDialogComponent implements OnInit {
  newUser = {
    username: '',
    community: '',
    firstName: '',
    lastName: '',
    role: '',
    password: '',
    email: '',
    idNumber: ''
  };
  pwdHide = true;
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
  roles2select;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ManagementDialogComponent>,
  public httpService: HttpForNowService, public settings: SettingsService) {
    console.log(data);
    this.roles2select = data.roles2create;
    console.log(this.roles2select);
  }

  ngOnInit() {
  }

  sure() {
    this.signUpUser();
    // this.httpService.signUpUser(this.newUser.username, this.newUser.supervisor, this.newUser.role);
  }

  cancel() {
    this.dialogRef.close('canceled');
  }

  signUpUser() {
    const newUser = this.newUser;
    this.httpService.signUpUser(newUser.username, newUser.firstName, newUser.lastName, newUser.community, newUser.password,
      newUser.email, newUser.idNumber)
      .then(res => {
        console.log(res);
        if (res.Return === 1) {
          console.log(res);
          if (res.Result) {
            alert(res.Result);
          }
        } else {
          this.dialogRef.close('done');
        }
      });
  }

}
