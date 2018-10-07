import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConfInterface} from '../conf-interface';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-dc-general-input',
  templateUrl: './general-input.component.html',
  styleUrls: ['./general-input.component.css']
})
export class GeneralInputComponent extends ConfInterface implements OnInit, AfterViewInit {
  options: any;
  public result: string;
  required: boolean;
  disabled = true;
  ngOnInit() {
    this.result = '';
    this.required = this.conf.required;
    // this.disabledAll();
  }
  constructor(fb: FormBuilder) {
    super();
    this.options = fb.group(
      {
        id_card: ['', [this.id_card_validator]],
        other: ['', [this.other_validator]],
        float_number: ['', [this.float_number_validator]],
        zip_code: ['', [this.zip_code_validator]]
      }
    );
    // this.options.control['id_card'].disabled = true;
    // this.options = {
    //   id_card: FormControl,
    //   other: FormControl,
    //   zip_code: FormControl,
    //   float_number: FormControl,
    // }
    // this.options.id_card = fb.control({disabled: true}, this.id_card_validator);
    // this.options.other = fb.control({disabled: true}, this.other_validator);
    // this.options.float_number = fb.control({disabled: true}, this.float_number_validator);
    // this.options.zip_code = fb.control({disabled: true}, this.zip_code_validator);
  }
  // disabledAll() {
  //   if (this.edit_disabled === true) {
  //     this.disabled = true;
  //   }
  // }
  ngAfterViewInit() {
    this.validator();
  }
  answerChange() {
    this.conf.valid_confirmed = this.valid_confirmed;
  }
  validator() {
    if (this.conf.required) {
      if (this.conf.key_value._value && this.conf.key_value._value !== '') {
        this.valid_confirmed = true;
      } else {
        this.valid_confirmed = false;
      }
      this.conf.valid_confirmed = this.valid_confirmed;
    }
  }
  getErrorMessage(type) {
    switch (type) {
      case 'id_card':
      {
        const controler = this.options.controls['id_card'];
        return controler.hasError( 'required') ? '必填项！' : controler.hasError( 'idc') ?
          '身份证格式不合法！' : '';
      }
      case 'other':
      {
        const controler = this.options.controls['other'];
        return controler.hasError( 'required') ? '必填项！' : '';
      }
      case 'float_number':
      {
        const controler = this.options.controls['float_number'];
        return controler.hasError( 'required') ? '必填项！' : controler.hasError( 'float_number') ?
          '请输入数字' : '';
      }
      case 'zip_code':
      {
        const controler = this.options.controls['zip_code'];
        return controler.hasError( 'required') ? '必填项！' : controler.hasError( 'zip_code') ?
          '邮编格式不合法' : '';
      }
    }
  }
  /**默认验证，只验证必填项**/
  other_validator = ( control: FormControl): { [s: string]: boolean } => {
    if (this.required && (!control.value || control.value.length === 0)) {
      this.valid_confirmed = false; return { required: true};
    } else {
      this.valid_confirmed = true;
    }
  }
  /**身份证验证，验证身份证号格式**/
  id_card_validator = ( control: FormControl): { [s: string]: boolean} => {
    // control.disabled = this.edit_disabled;
    const IDC_REGEXP = /((^\d{18}$)|(^\d{17}(\d|X|x)$))/;
    if (this.required) {
      if (!control.value || control.value.length === 0) {
        this.valid_confirmed = false;
        return {required: true};
      }
    }
    if (control.value.length !== 18 || !IDC_REGEXP.test(control.value)) {
      this.valid_confirmed = false;
      return {idc: true};
    }else {
      this.valid_confirmed = true;
    }
  }
  /**number类型验证，验证是否是数字**/
  float_number_validator = ( control: FormControl): { [s: string]: boolean } => {
    const NUM_REGEXP = /^\d+(\.\d+)?$/;
    if (this.required) {
      if (!control.value || control.value.length === 0) { this.valid_confirmed = false; return { required: true }; }
    }
    if (!NUM_REGEXP.test(control.value)) {
      this.valid_confirmed = false;
      return { float_number: true };
    } else {
      this.valid_confirmed = true;
    }
  }
  zip_code_validator = ( control: FormControl): { [s: string]: boolean } => {
    const ZIP_REGEXP = /^[0-9]{6}$/;
    if (this.required) {
      if ( !control.value || control.value.length === 0) {
        this.valid_confirmed = false;
        return { required: true };
      }
      if ( !ZIP_REGEXP.test(control.value)) {
        this.valid_confirmed = false;
        return { zip_code: true };
      } else {
        this.valid_confirmed = true;
      }
    }
  }
}

