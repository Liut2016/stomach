import { Component, OnInit } from '@angular/core';
import { ConfInterface} from '@app/shared/conf-interface';

@Component({
  selector: 'app-general-select',
  templateUrl: './general-select.component.html',
  styleUrls: ['./general-select.component.css']
})
export class GeneralSelectComponent extends ConfInterface implements OnInit {

  condition1 = false;
  condition2 = false;
  target_value1 = '';
  target_value2 = '';

  constructor() {
    super();
  }

  ngOnInit() {
    this.target_value1 = this.conf.target_value1;
    this.target_value2 = this.conf.target_value2;
  }

  checkAnswer() {
    this.condition1 = this.conf.key_value._value === this.target_value1;
    this.condition2 = this.conf.key_value._value === this.target_value2;
  }
}
