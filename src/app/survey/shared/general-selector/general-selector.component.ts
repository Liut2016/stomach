import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ConfInterface} from '@app/survey/shared/conf-interface';

@Component({
  selector: 'app-dc-general-selector',
  templateUrl: './general-selector.component.html',
  styleUrls: ['./general-selector.component.css']
})
export class GeneralSelectorComponent extends ConfInterface implements OnInit {
  @Output() onVoted = new EventEmitter< any >();
  ngOnInit() { this.validator(); }
  constructor() {
    super();
  }
  answerChange() { this.validator();}
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
