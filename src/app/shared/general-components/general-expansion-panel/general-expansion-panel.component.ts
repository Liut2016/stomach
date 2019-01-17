import { Component, OnInit } from '@angular/core';
import { ConfInterface } from '@app/shared/conf-interface';

@Component({
  selector: 'app-general-expansion-panel',
  templateUrl: './general-expansion-panel.component.html',
  styleUrls: ['./general-expansion-panel.component.css']
})
export class GeneralExpansionPanelComponent extends ConfInterface implements OnInit {

  panelOpenState = false;

  data_list = [];

  constructor() {
    super();
  }

  ngOnInit() {
    for (let index = 0; index < this.conf.data.length; index++) {
      this.data_list.push(this.conf.data[index]);
      }
    console.log(this.data_list);
    for(let j = 0;j < this.data_list.length;j++)
    {
       for ( let i = 0; i < this.conf['layout'].length; i++) {
      const part5 = this.conf['layout'][i];
      if (part5.key_value) {
        part5.key_value._value = this.data_list[j][part5.key_value._key];
        console.log(part5.key_value._value);
      }
    }
    }
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

