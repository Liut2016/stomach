import { Component, OnInit } from '@angular/core';
import { ConfInterface} from '@app/shared/conf-interface';

@Component({
  selector: 'app-general-input-condition',
  templateUrl: './general-input-condition.component.html',
  styleUrls: ['./general-input-condition.component.css']
})
export class GeneralInputConditionComponent extends ConfInterface implements OnInit {

  condition = false;
  condition_value = '';
  target_value = '';

  constructor() {
    super();
  }

  ngOnInit() {
    this.target_value = this.conf.target_value;
  }

  checkAnswer() {
    this.condition = this.condition_value === this.target_value;
  }
}
