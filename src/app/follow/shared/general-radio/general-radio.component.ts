import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ConfInterface} from '@app/follow/shared/conf-interface';
@Component({
  selector: 'app-dc-general-radio',
  templateUrl: './general-radio.component.html',
  styleUrls: ['./general-radio.component.css']
})
export class GeneralRadioComponent extends ConfInterface implements OnInit  {
  public result: string;
  @Output() onVoted = new EventEmitter< any >();
  ngOnInit() {
    this.validator();
  }
  constructor() {
    super();
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

