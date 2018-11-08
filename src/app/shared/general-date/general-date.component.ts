import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ConfInterface} from '@app/shared/conf-interface';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-dc-general-date',
  templateUrl: './general-date.component.html',
  styleUrls: ['./general-date.component.css']
})
export class GeneralDateComponent extends ConfInterface implements OnInit {
  date = new Date();
  ngOnInit() {
    if ( this.conf.key_value._value ) {
      this.date = this.conf.key_value._value;
    }
    this.validator();
  }
  constructor(public changeDetectorRef: ChangeDetectorRef) {
    super();
  }
  answerChange() {
    this.changeDetectorRef.markForCheck();
    this.conf.key_value._value = this.date;
    this.validator();
    this.date = this.conf.key_value._value;
    this.changeDetectorRef.detectChanges();
  }
  validator() {
    if (this.conf.required) {
      if (this.conf.key_value._value && this.conf.key_value !== '') {
        this.valid_confirmed = true;
      } else {
        this.valid_confirmed = false;
      }
      this.conf.valid_confirmed = this.valid_confirmed;
    }
  }
}
