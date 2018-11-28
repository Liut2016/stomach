import { Component, OnInit, Injectable } from '@angular/core';
import {components_list  } from '../cmpList';
import {NestedTreeControl} from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-general-components-list',
  templateUrl: './general-components-list.component.html',
  styleUrls: ['./general-components-list.component.css'],
})
export class GeneralComponentsListComponent implements OnInit {

  components_list = components_list;
  show_source = false;
  source_code = this.components_list[0];

  constructor() {
  }

  ngOnInit() {
  }

  changeTab(e) {
    this.source_code = this.components_list[e.index];
    this.show_source = false;
  }

  showSource() {
    this.show_source = !this.show_source;
  }

}
