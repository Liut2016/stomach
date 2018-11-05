import { Component, OnInit } from '@angular/core';
import { survey_list } from '../surveyList';

@Component({
  selector: 'app-mammary-form',
  templateUrl: './mammary-form.component.html',
  styleUrls: ['./mammary-form.component.css']
})
export class MammaryFormComponent implements OnInit {

  mammary_list = survey_list;

  constructor() { }

  ngOnInit() {
    console.log(this.mammary_list);
  }

}
