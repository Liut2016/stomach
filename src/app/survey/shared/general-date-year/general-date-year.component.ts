import { Component, OnInit } from '@angular/core';
import { ConfInterface} from '../conf-interface';

@Component({
  selector: 'app-dc-general-date-year',
  templateUrl: './general-date-year.component.html',
  styleUrls: ['./general-date-year.component.css']
})

export class GeneralDateYearComponent extends ConfInterface implements OnInit {
  years = [];
  ngOnInit() {
    this.init_year();
    this.validator();
  }
  constructor() {
    super();
  }
  init_year() {
    const years_temp = [];
    const current_year = new Date().getFullYear();
    let year_span = 200;
    if (this.conf.year_span && typeof(this.conf.year_span) === 'number') {
      year_span = this.conf.year_span;
    }
    for (let y = 0; y < year_span; y++ ) {
      years_temp.push((current_year - y) + '');
    }
    this.years = years_temp;
  }
  answerChange() {
    this.validator();
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
}
