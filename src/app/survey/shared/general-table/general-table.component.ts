import { Component, OnInit } from '@angular/core';
import { ConfInterface} from '@app/survey/shared/conf-interface';
import { el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-dc-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.css']
})
export class GeneralTableComponent extends ConfInterface implements OnInit {
  displayControl = false;
  ngOnInit() {
    if ( this.conf.displayControl ) {
      if ( this.conf.displayControl.check === true ) { this.displayControl = true; } else { this.displayControl = false; }
    } else {
      this.displayControl = true;
    }
    this.disabled_all();
    this.init_year_selector();
    this._validator();
  }
  constructor() {
    super();
  }
  displayControlChange() {
    this.conf.displayControl.check = this.displayControl;
  }
  init_year_selector () {
    for (let i = 0; i < this.conf.layout.length; i++) {
      if (this.conf.layout[i].type === 'year_selector') {
        const this_year = new Date().getFullYear();
        const options_tem = [];
        for ( let ago = 0; ago < 150; ago ++) {
          options_tem.push((this_year - ago) + '年');
        }
        this.conf.layout[i].options = options_tem;
      }
    }
  }
  _validator() {
    if ( typeof (this.conf.displayControl) !== 'undefined') {
      if (this.conf.displayControl.check === true) {
        let flag = false;
        for ( const item of this.conf.layout) {
          if ( item.type !== 'text') {
            if (item.key_value instanceof Array) {
              for (const k of item.key_value ) {
                if ( k._value && k._value !== '') { flag = true; break; }
              }
            } else {
              if (item.key_value._value && item.key_value._value !== '') { flag = true; break; }
            }
          }
        }
        this.valid_confirmed = flag;
        this.conf.valid_confirmed = this.valid_confirmed;
      }
    } else {
      if (this.conf.required === true) {
        let flag = false;
        for ( const item of this.conf.layout) {
          if ( item.type !== 'text') {
            if (item.key_value instanceof Array) {
              for (const k of item.key_value ) {
                if ( k._value && k._value !== '') { flag = true; break; }
              }
            } else {
              if (item.key_value._value && item.key_value._value !== '') { flag = true; break; }
            }
          }
        }
        this.valid_confirmed = flag;
        this.conf.valid_confirmed = this.valid_confirmed;
      }
    }
  }
  uploadFile(event, item) {
    // let file: FormData = new FormData();
    const fileList: FileList = event.target.files;
    if ( fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append( '心电图',  file , file.name);
      item.key_value._value = formData;
      item.fileName = file.name;
    }
  }
  answerChange() {
    this.reference();
    this._validator();
  }
  reference() {
    for (let i = 0; i < this.conf.layout.length; i++) {
      const current_iter = this.conf.layout[i];
      this.disabledReferenceIndex(current_iter);
      this.disabledReferenceContent(current_iter);
      this.optionsReference(current_iter);
      this.calculateReference(current_iter);
    }
  }
  calculateReference( currtent_iter) {
    if (currtent_iter.calculate) {

      if (currtent_iter.calculate.calculate_type === '血压差') {
        const rightUp = parseFloat(this.conf.layout[currtent_iter.calculate.calculate_refs[1]].key_value[0]._value);
        const leftUp = parseFloat(this.conf.layout[currtent_iter.calculate.calculate_refs[0]].key_value[0]._value);
        const rightDown = parseFloat(this.conf.layout[currtent_iter.calculate.calculate_refs[3]].key_value[0]._value);
        const leftDown = parseFloat(this.conf.layout[currtent_iter.calculate.calculate_refs[2]].key_value[0]._value);
        if ( Math.abs( rightUp - leftUp ) > 20) {
          this.conf.layout[currtent_iter.calculate.calculate_refs[4]].key_value._value = '有';
        } else {
          this.conf.layout[currtent_iter.calculate.calculate_refs[4]].key_value._value = '无';
        }

        if ( (rightUp - rightDown >= 40) || (leftUp - leftDown) >= 40 ) {
          this.conf.layout[currtent_iter.calculate.calculate_refs[5]].key_value._value = '有';
        } else {
          this.conf.layout[currtent_iter.calculate.calculate_refs[5]].key_value._value = '无';
        }
      }
      const ref_iter = this.conf.layout[currtent_iter.calculate.calculate_ref];
      if ( currtent_iter.calculate.calculate_type === 'BMI') {

        let height = 0;
        let weight = 0;
        for (const ob of currtent_iter.key_value ) {
          if ( ob._key === currtent_iter.calculate.key_ref[0]) { height = parseFloat(ob._value); }
          if ( ob._key === currtent_iter.calculate.key_ref[1]) { weight = parseFloat(ob._value); }
        }
        if ( height && weight ) {
          height = height / 100;
          ref_iter.key_value._value =  (weight / (height * height)).toFixed(2) + '';
        } else {
          ref_iter.key_value._value = '';
        }
      }
      if ( currtent_iter.calculate.calculate_type === 'A/G') {
        let ALB = 0;
        let GLO = 0;
        for ( const ob of currtent_iter.key_value ) {
          if ( ob._key === currtent_iter.calculate.key_ref[0]) { ALB = parseFloat(ob._value); }
          if ( ob._key === currtent_iter.calculate.key_ref[1]) { GLO = parseFloat(ob._value); }
        }
        if ( ALB && GLO) {
          ref_iter.key_value._value = (ALB / GLO).toFixed(2) + '';
        } else {
          ref_iter.key_value._value = '';
        }
      }
      if ( currtent_iter.calculate.calculate_type === 'IBIL') {
        let TBIL = 0;
        let DBIL = 0;
        for ( const ob of currtent_iter.key_value ) {
          if ( ob._key === currtent_iter.calculate.key_ref[0]) { TBIL = parseFloat(ob._value); }
          if ( ob._key === currtent_iter.calculate.key_ref[1]) { DBIL = parseFloat(ob._value); }
        }
        if ( TBIL && DBIL) {
          ref_iter.key_value._value = (TBIL - DBIL) + '';
        } else {
          ref_iter.key_value._value = '';
        }
      }
      if ( currtent_iter.calculate.calculate_type === 'QTC') {
        let RR = 0;
        let QT = 0;
        for ( const ob of currtent_iter.key_value ) {
          if ( ob._key === currtent_iter.calculate.key_ref[0]) { RR = parseFloat(ob._value); }
          if ( ob._key === currtent_iter.calculate.key_ref[1]) { QT = parseFloat(ob._value); }
        }
        if ( RR && QT) {
          ref_iter.key_value._value = (QT / Math.pow(RR, 0.5)).toFixed(2) + '';
        } else {
          ref_iter.key_value._value = '';
        }
      }
      if ( currtent_iter.calculate.calculate_type === 'RV5+SV1') {
        let RV5 = 0;
        let SV1 = 0;
        for ( const ob of currtent_iter.key_value ) {
          if ( ob._key === currtent_iter.calculate.key_ref[0]) { RV5 = parseFloat(ob._value); }
          if ( ob._key === currtent_iter.calculate.key_ref[1]) { SV1 = parseFloat(ob._value); }
        }
        if ( RV5 && SV1) {
          ref_iter.key_value._value = ( RV5 + SV1).toFixed(2) + '';
        } else {
          ref_iter.key_value._value = '';
        }
      }
    }
  }
  disabledReferenceIndex( current_iter) {
    /** disabled_ref **/
    if (current_iter.disabled_ref === 0 || current_iter.disabled_ref) {
      const ref_iter = this.conf.layout[current_iter.disabled_ref];
      if ( ref_iter.type === 'checkbox') {
        let check_flag = false;
        for ( let j = 0; j < ref_iter.key_value.length; j++) {
          if ( ref_iter.key_value[j]._value === true) {
            current_iter.disabled = false;
            check_flag = true;
            break;
          }
          if (check_flag === false) {
            current_iter.disabled = true;
            if (current_iter.type === 'checkbox') {
              for (const citer of current_iter.key_value) {
                citer._value = false;
              }
            } else {
              current_iter.key_value._value = '';
            }
          }
        }
      } else {
        if ( ref_iter.key_value._value && ref_iter.key_value._value !== '') {
          current_iter.disabled = false;
        } else {
          current_iter.disabled = true;
        }
      }
    }
  }
  disabledReferenceContent(current_iter) {
    /** disabled_ref_c **/
    if (current_iter.disabled_ref_c) {
      const ref_iter = this.conf.layout[current_iter.disabled_ref_c.id];
      if (ref_iter.type === 'checkbox') { // 如果依赖的类型是 checkbox， 检查选项是否匹配
        if (this.check_option_exist(ref_iter, current_iter.disabled_ref_c)) {
          current_iter.disabled = false;
        } else {
          current_iter.disabled = true;
          this.clear_value(current_iter);
        }
      } else { // 如果依赖项的类型是其它，检查选项是否匹配
        if (this.check_option_exist(ref_iter, current_iter.disabled_ref_c.condition)) {
          current_iter.disabled = false;
        } else {
          current_iter.disabled = true;
          this.clear_value(current_iter);
        }
      }
    }
  }
  optionsReference(current_iter) {
    if (current_iter.options_reference && current_iter.ref_options) {
      const ref_iter = this.conf.layout[current_iter.options_reference];
      if (ref_iter.key_value._value && ref_iter.key_value._value !== '') {
        current_iter.options = current_iter.ref_options[ref_iter.options.indexOf(ref_iter.key_value._value)];
      }
    }
  }
  check_option_exist( iter, options) {
    if (iter.type === 'checkbox') {
      for ( const c of options) {
        if (iter.options && iter.options.indexOf(c) !== -1 && iter.key_value[iter.options.indexOf(c)]._value === true) {
          return true;
        }
      }
      return false;
    } else {
      for ( const c of options) {
        if (iter.options && iter.options.indexOf(c) !== -1 && iter.key_value._value === c ) {
          return true;
        }
      }
      return false;
    }
  }
  clear_value (iter) {
    if (iter.type === 'checkbox') {
      for (const kv of iter.key_value) {
        kv._value = false;
      }
    } else {
      iter.key_value._value = '';
    }
  }
  disabled_all() {
    if ( this.edit_disabled === true) {
      for ( const item of this.conf.layout) {  item.disabled = true;  }
    }
  }
}
