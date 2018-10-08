import { Component, OnInit } from '@angular/core';
import { ConfInterface} from '@app/follow/shared/conf-interface';

@Component({
  selector: 'app-dc-general-date-year-month',
  templateUrl: './general-date-year-month.component.html',
  styleUrls: ['./general-date-year-month.component.css']
})
export class GeneralDateYearMonthComponent extends ConfInterface implements OnInit {
  years = [];
  months = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
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
      const key_values = this.conf.key_value;
      let flag = false
      for (const item of key_values) {
        if (!item._value || item._value === '') {
          flag = true;
        }
      }
      if (flag) { this.valid_confirmed = true; } else { this.valid_confirmed = false; }
      this.conf.valid_confirmed = this.valid_confirmed;
    }
  }
}
