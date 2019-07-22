import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpService } from '@app/core/services/http.service';
import { SettingsService } from '@app/core/services/settings.service';
import { CustomValidators } from 'ng2-validation';
import { dictionary } from '@app/shared/config-items/dictionary-items';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-export-dialog',
  templateUrl: './export-dialog.component.html',
  styleUrls: ['./export-dialog.component.css']
})
export class ExportDialogComponent implements OnInit {

  public form: FormGroup;
  stateGroups =  dictionary.filter_keys;
  dic1 = dictionary.part1_home;
  dic5 = dictionary.part5_dicresult;
  key_list = {};
  key_list1 = [];
  key_list2 = [];
  key:string;
  name:string;
  creator:string;
  rule:any;
  username = this.settings.user.id;

  addFilterCondition1(item: any) {
    console.log(item);
    this.key_list1.push(item._key);
  }

  addFilterCondition2(item: any) {
    console.log(item);
    this.key_list2.push(item._key);
  }


  remove(key:any, keys: any): void {
    const index = keys.indexOf(key);

    if (index >= 0) {
      keys.splice(index, 1);
    }
    console.log(this.key_list);
  }


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    public dialogRef: MatDialogRef<ExportDialogComponent>,
    public httpService:HttpService, 
    public settings: SettingsService,
    ){
    if(data){
      this.httpService.getRule(data.id).subscribe(res => {
        console.log(res);
        this.rule = res.data[0];
        console.log(this.rule);
        this.name=this.rule.part6_name;
        this.key_list=JSON.parse(this.rule.part6_rule);
        if(this.key_list["FIRST_HOME"]){
          this.key_list1=this.key_list["FIRST_HOME"];
        }else{
          this.key_list1=[];
        }
        if(this.key_list["FIRST_RESULTS"]){
           this.key_list2=this.key_list["FIRST_RESULTS"];  
        }else{
          this.key_list2=[];
        }
        
        
      });   
    };
  }

  ngOnInit() {
  }

  sure() {
    this.initRule();
    // this.httpService.signUpUser(this.newUser.username, this.newUser.supervisor, this.newUser.role);
  }

  cancel() {
    this.dialogRef.close('canceled');
  }

  initRule() {
    this.key_list={};
    this.key_list1.forEach(element=>{

    });
    if(this.key_list1.length>0)
    {
      this.key_list['FIRST_HOME']=this.key_list1;
    }
    if(this.key_list2.length>0){
      this.key_list['FIRST_RESULTS']=this.key_list2;
    }
    console.log(this.key_list);
    this.httpService.initRule(this.name,this.key_list,this.username)
      .subscribe(res => {
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
