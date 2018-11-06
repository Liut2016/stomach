import { Component, OnInit } from '@angular/core';
import {components_list  } from '../cmpList';

@Component({
  selector: 'app-general-components-list',
  templateUrl: './general-components-list.component.html',
  styleUrls: ['./general-components-list.component.css']
})
export class GeneralComponentsListComponent implements OnInit {

  components_list = components_list;

  constructor() { }

  ngOnInit() {
  }

}
