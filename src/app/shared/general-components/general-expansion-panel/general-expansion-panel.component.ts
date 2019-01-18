import { Component, OnInit } from '@angular/core';
import { ConfInterface } from '@app/shared/conf-interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-general-expansion-panel',
  templateUrl: './general-expansion-panel.component.html',
  styleUrls: ['./general-expansion-panel.component.css']
})
export class GeneralExpansionPanelComponent extends ConfInterface implements OnInit {

  panelOpenState = false;
  data_list = [];
  layout_list = [];

  constructor() {
    super();
  }

  ngOnInit() {
    this.conf.data.forEach(part => {
      const temp_layout = _.cloneDeep(this.conf.layout);
      this.layout_list.push(temp_layout);
    });
    for (let index = 0; index < this.conf.data.length; index++) {
      this.data_list.push(this.conf.data[index]);
      }

    this.layout_list.forEach((part, index) => {
      part.forEach(item => {
        if (item.key_value) {
          item.key_value._value = this.data_list[index][item.key_value._key];  
        }
      });

    });
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

