import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { jsons } from '../shared/specification';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  data;
  visData;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {

    console.log()
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  getData($event){
    console.log($event);
    this.data = $event;
  }

  draw($event){
    this.visData = $event;
  }
}
