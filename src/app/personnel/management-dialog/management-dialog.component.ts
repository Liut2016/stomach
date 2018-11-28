import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpForNowService } from '@app/core/services/http-for-now.service';
import { SettingsService } from '@app/core/services/settings.service';
import { CustomValidators } from 'ng2-validation';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-management-dialog',
  templateUrl: './management-dialog.component.html',
  styleUrls: ['./management-dialog.component.css']
})
export class ManagementDialogComponent implements OnInit {
  public form: FormGroup;

  newUser = {
    username: '',
    firstname:'',
    lastname:'',
    community: '',
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
  public httpService: HttpForNowService, public settings: SettingsService,private fb: FormBuilder) {
    console.log(data);
    this.roles2select = data.roles2create;
    console.log(this.roles2select);
  }

  ngOnInit() {
    this.form = this.fb.group( {
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      password: password,
      confirmPassword: confirmPassword
    } );
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
    this.httpService.signUpUser(newUser.username, newUser.firstname,newUser.lastname,newUser.community, newUser.password,
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
