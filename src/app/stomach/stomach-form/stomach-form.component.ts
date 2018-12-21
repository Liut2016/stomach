import { Component, OnInit } from '@angular/core';
import { survey_list } from '../surveyList';
import { HttpService } from '@app/core/services/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import { dictionary } from '@app/shared/config-items/dictionary-items';

@Component({
  selector: 'app-stomach-form',
  templateUrl: './stomach-form.component.html',
  styleUrls: ['./stomach-form.component.css']
})
export class StomachFormComponent implements OnInit {

  stomach_list = survey_list;
  pid;
  zyh;
  advice_dic = dictionary.part2_yz;
  constructor(
    private http: HttpService,
    private router: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
   this.pid = this.router.params['value']['PID'];
   this.zyh = this.router.params['value']['ZYH'];
    this.initForm().subscribe((res) => {
      const home_data = res.data['home'][0];
      console.log(res.data['advice']);
      console.log(this.stomach_list[2].items[0]);
      this.stomach_list[2].items[0]['data'] = res.data['advice'];
      this.stomach_list[2].items[0]['dic'] = this.advice_dic;
      for ( let i = 0; i < this.stomach_list[0].items[0]['layout'].length; i++) {
        const part1 = this.stomach_list[0].items[0]['layout'][i];
        if (part1.key_value) {
          part1.key_value._value = home_data[part1.key_value._key];
        }
      }
    });
  }

  initForm() {
    return this.http.getPatient(this.pid, this.zyh);
  }
}
