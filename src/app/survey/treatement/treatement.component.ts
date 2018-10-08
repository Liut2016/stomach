import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@app/shared/local.storage';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-treatement',
  templateUrl: './treatement.component.html',
  styleUrls: ['./treatement.component.css']
})

export class TreatementComponent implements OnInit {
  constructor( private ls: LocalStorage, private router: Router) {
  }
  ngOnInit() {
  }
  next() {
    this.router.navigate(['survey/hypertensionMS']);
  }
}
