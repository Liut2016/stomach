import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ConfInterface} from '@app/survey/shared/conf-interface';

@Component({
  selector: 'app-dc-general-checkbox',
  templateUrl: './general-checkbox.component.html',
  styleUrls: ['./general-checkbox.component.css']
})
export class GeneralCheckboxComponent extends ConfInterface implements OnInit {
  ngOnInit() { this.validator(); }
  constructor() {
    super();
  }
  answerChange() { this.validator(); }
  validator() {
    if (this.conf.required) {
      const key_values = this.conf.key_value;
      let flag = false;
      for (const item of key_values ) { if (item._value) { flag = true; } }
      this.valid_confirmed = flag;
      this.conf.valid_confirmed = this.valid_confirmed;
    }
  }
}
