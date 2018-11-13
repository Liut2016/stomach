import { Component, OnInit } from '@angular/core';
import { ConfInterface } from '@app/shared/conf-interface';

@Component({
  selector: 'app-general-expansion-panel',
  templateUrl: './general-expansion-panel.component.html',
  styleUrls: ['./general-expansion-panel.component.css']
})
export class GeneralExpansionPanelComponent extends ConfInterface implements OnInit {

  panelOpenState = false;
  
  constructor() {
    super();
  }

  ngOnInit() {
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

