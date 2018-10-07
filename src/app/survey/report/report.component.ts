import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../../core/common/local.storage';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {
  public reportInformation;
  constructor( private ls: LocalStorage, private router: Router) {
  }
  ngOnInit() {
    this.reportInformation = this.ls.getObject('reportInformation');
    console.log(this.reportInformation);
  }
  next() {
    this.router.navigate(['survey/diagnosisMS']);
  }
}
