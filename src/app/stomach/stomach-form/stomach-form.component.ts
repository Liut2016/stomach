import { Component, OnInit } from '@angular/core';
import { survey_list } from '../surveyList';
import { HttpService } from '@app/core/services/http.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-stomach-form',
  templateUrl: './stomach-form.component.html',
  styleUrls: ['./stomach-form.component.css']
})
export class StomachFormComponent implements OnInit {

  stomach_list = survey_list;
  pid;
  constructor(
    private http: HttpService,
    private router: ActivatedRoute,
    private route : Router
  ) { }

  ngOnInit() {
   this.pid = this.router.params['value']['PID'];
    console.log(this.pid);
    this.initForm().subscribe((res) => {
      console.log(res);
      // fill in the answer right here
      // const part1 = this.mammary_list[0].items[0]['layout'][1];
 
      // if (part1.hasOwnProperty("key_value")) {
      //   console.log(part1.key_value._key);
      //   console.log(res.data);
      //   part1.key_value._value = res.data[part1.key_value._key];
      // }
      for ( let i = 0; i < this.stomach_list[0].items[0]['layout'].length; i++) {
        const part1 = this.stomach_list[0].items[0]['layout'][i];
        if (part1.key_value) {
           console.log(part1.key_value._key);
           console.log(res.data);
          part1.key_value._value = res.data[part1.key_value._key];
        }
      }
    });
  
  }

  initForm() {
    return this.http.getPatient(this.pid);
  }
}
