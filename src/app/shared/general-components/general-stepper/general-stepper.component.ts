import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ConfInterface} from '@app/shared/conf-interface';

@Component({
  selector: 'app-general-stepper',
  templateUrl: './general-stepper.component.html',
  styleUrls: ['./general-stepper.component.css']
})
export class GeneralStepperComponent extends ConfInterface implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
