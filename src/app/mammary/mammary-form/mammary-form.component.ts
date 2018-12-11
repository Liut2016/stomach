import { Component, OnInit } from '@angular/core';
import { survey_list } from '../surveyList';
import { HttpService } from '@app/core/services/http.service';
import { ActivatedRoute } from '@angular/router';
import {init} from 'protractor/built/launcher';

@Component({
  selector: 'app-mammary-form',
  templateUrl: './mammary-form.component.html',
  styleUrls: ['./mammary-form.component.css']
})
export class MammaryFormComponent implements OnInit {

  mammary_list = survey_list;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.initForm().subscribe((res) => {
      console.log(res);
      // fill in the answer right here
      // const part1 = this.mammary_list[0].items[0]['layout'][1];
 
      // if (part1.hasOwnProperty("key_value")) {
      //   console.log(part1.key_value._key);
      //   console.log(res.data);
      //   part1.key_value._value = res.data[part1.key_value._key];
      // }
      for ( let i = 0; i < this.mammary_list[0].items[0]['layout'].length; i++) {
        const part1 = this.mammary_list[0].items[0]['layout'][i];
        if (part1.key_value) {
           console.log(part1.key_value._key);
           console.log(res.data);
          part1.key_value._value = res.data[part1.key_value._key];
        }
      }
    });
  }

  initForm() {
    return this.http.getPatient('415124');
  }
}
