import { Component, OnInit } from '@angular/core';
import { ConfInterface} from '@app/shared/conf-interface';

@Component({
  selector: 'app-general-select',
  templateUrl: './general-select.component.html',
  styleUrls: ['./general-select.component.css']
})
export class GeneralSelectComponent extends ConfInterface implements OnInit {

  condition = false;
  target_value = '';

  constructor() {
    super();
  }

  ngOnInit() {
    this.target_value = this.conf.target_value;
  }

  checkAnswer() {
    this.condition = this.conf.key_value._value === this.target_value;
  }
}
