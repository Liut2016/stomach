import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ConfInterface } from '@app/shared/conf-interface';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dc-general-card-group',
  templateUrl: './general-card-group.component.html',
  styleUrls: ['./general-card-group.component.css']
})
export class GeneralCardGroupComponent extends ConfInterface implements OnInit, AfterViewInit {
  options: FormGroup;
  required: boolean;
  validator_type = 'id_card';
  card_type_class = [];
  input_disabled = true;
  selector_disabled = false;
  ngOnInit() {
    if (this.conf.key_value[0] !== '' ) {
      this.input_disabled = false;
    }
    this.disabled_all();
    this.card_type_class = ['二代身份证', '军官证', '护照', '驾驶证'];
    this.required = this.conf.required;
  }
  ngAfterViewInit() {
    this.update_validator_type();
    this.validator();
  }
  constructor(fb: FormBuilder) {
    super();
    this.options = fb.group(
      {
        id_card: ['', [this.id_card_validator]],
        military_card: ['', [this.military_card_validator]],
        passport_card: ['', [this.passport_card_validator]],
        other: ['', [this.other_validator]]
      }
    );
  }
  answerChange() {
    this.update_validator_type();
    this.input_disabled_controler();
    this.validator();
  }
  validator() {
    this.conf.valid_confirmed = this.valid_confirmed;
  }
  /**默认验证，只验证必填项**/
  other_validator = ( control: FormControl): { [s: string]: boolean } => {
    if (this.required && (!control.value || control.value.length === 0)) { return { required: true}; }
  }
  /**身份证验证，验证身份证号格式**/
  id_card_validator = ( control: FormControl): { [s: string]: boolean} => {
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
  /**军官证，验证军官证格式**/
  military_card_validator = ( control: FormControl): { [s: string]: boolean } => {
    const MIC_REGEXP = /^[a-zA-Z0-9]{7,21}$/;
    if (this.required) {
      if (!control.value || control.value.length === 0) {
        this.valid_confirmed = false;
        return {required: true};
      }
    }
    if (!MIC_REGEXP.test(control.value)) {
      this.valid_confirmed = false;
      return {military: true};
    }else {
      this.valid_confirmed = true;
    }
  }
  /**护照，验证护照格式**/
  passport_card_validator = ( control: FormControl): { [s: string]: boolean } => {
    const PASS_REGEXP =  /^[a-zA-Z0-9]{3,21}$/;
    if (this.required) {
      if (!control.value || control.value.length === 0) {
        this.valid_confirmed = false;
        return {required: true};
      }
    }
    if (!PASS_REGEXP.test(control.value)) {
      this.valid_confirmed = false;
      return {passport: true};
    }else {
      this.valid_confirmed = true;
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
      case 'military_card':
      {
        const controler = this.options.controls['military_card'];
        return controler.hasError('required') ? '必填项！' : controler.hasError('military') ?
          '军官证格式不合法！' : '';
      }
      case 'passport_card':
      {
        const controler = this.options.controls['passport_card'];
        return controler.hasError('required') ? '必填项' : controler.hasError('passport') ?
          '护照格式不合法！' : '';
      }
      case 'other':
      {
        const controler = this.options.controls['other'];
        return controler.hasError( 'required') ? '必填项！' : '';
      }
    }
  }
  disabled_all() {
    if (this.edit_disabled === true) { this.selector_disabled = true; this.input_disabled = true; }
  }
  update_validator_type() {
    if (this.conf.key_value[0]._value === '二代身份证') {
      this.validator_type = 'id_card';
    } else if (this.conf.key_value[0]._value === '军官证') {
      this.validator_type = 'military_card';
    } else if (this.conf.key_value[0]._value === '护照') {
      this.validator_type = 'passport_card';
    } else {
      this.validator_type = 'other';
    }
  }
  input_disabled_controler() {
    if (this.conf.key_value[0]._value && this.conf.key_value[0]._value !== '') {
      this.input_disabled = false;
    } else {
      this.input_disabled = true;
      this.conf.key_value[1]._value = '';
    }
  }
}
