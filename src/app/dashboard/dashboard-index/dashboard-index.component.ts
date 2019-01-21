import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService} from '@app/core/services/http.service';
import { DashboardService } from './dashboard.service';
import { View } from './view.component';
import {ViewSubsection } from './view-subsection.component';
import { Map } from './map.component';
import { MapCity } from './mapcity.component';
import { StackedBar } from '@app/dashboard/dashboard-index/stackedbar.component';
import { Pie } from './pie.component';
import { Bubble } from './bubble.component';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css']
})
export class DashboardIndexComponent implements OnInit {
  ViewForPaymentMethod: View;
  ViewForPatientAge: ViewSubsection;
  ViewForProvice: Map;
  ViewForOperativeMethod: View;
  ViewForCity: MapCity;
  ViewForStacked1: StackedBar;
  ViewForStacked2: StackedBar;
  ViewForPie: Pie;
  ViewForpathology: Bubble;
  ViewForProviceBar: View;
  ViewForCityBar: View;
  PaymentMethod = []; // 付款方式
  PatientAge = []; // 年龄
  Provice = []; // 省份
  OperativeMethod = []; // 手术方式
  City = []; // 市级
  chart; // pie图表内容
  Pathology;
constructor(private service: HttpService,
            private serviceDashboard: DashboardService) { }
  @ViewChild('viewPaymentMethod') viewPaymentMethod;
  @ViewChild('viewPatientAge') viewPatientAge;
  @ViewChild('viewProvice') viewProvice;
  @ViewChild('viewOperativeMethod') viewOperativeMethod;
  @ViewChild('viewCity') viewCity;
  @ViewChild('stackedbar1') stackedbar1;
  @ViewChild('stackedbar2') stackedbar2;
  @ViewChild('viewPathology') bubble;
  @ViewChild('viewProviceBar') viewProviceBar;
  @ViewChild('viewCityBar') viewCityBar;
ngOnInit() {
  this.service.getViewList().subscribe( (data) => {
    this.PaymentMethod = this.serviceDashboard.Statistics(data.paymentMethod);
    this.PatientAge = this.serviceDashboard.Statistics(data.age);
    this.Provice = this.serviceDashboard.Statistics(this.serviceDashboard.splitProvinceName(data.province));
    this.OperativeMethod = this.serviceDashboard.Statistics(data.surgicalName);
    this.City = this.serviceDashboard.getCity(this.serviceDashboard.Statistics(data.city));
    this.ViewForPaymentMethod = new View(this.viewPaymentMethod.nativeElement, this.PaymentMethod, [580, 350 , 5, 30, 120, 100, 0]);
    this.ViewForPaymentMethod.render();
    this.ViewForOperativeMethod = new View(this.viewOperativeMethod.nativeElement, this.OperativeMethod, [580, 350 , 5, 100, 120, 100, 1]);
    this.ViewForOperativeMethod.render();
    this.ViewForPatientAge = new ViewSubsection(this.viewPatientAge.nativeElement, this.serviceDashboard.resetAge(this.PatientAge));
    this.ViewForPatientAge.render();
    this.ViewForProvice = new Map(this.viewProvice.nativeElement, this.Provice);
    this.ViewForProvice.render();
    this.ViewForCity = new MapCity(this.viewCity.nativeElement, this.City);
    this.ViewForCity.render();
    this.ViewForStacked1 = new StackedBar(this.stackedbar1.nativeElement, data.paymentMethod, data.surgicalName);
    this.ViewForStacked1.render();
    this.ViewForStacked2 = new StackedBar(this.stackedbar2.nativeElement, this.serviceDashboard.resetData(data.age), data.surgicalName);
    this.ViewForStacked2.render();
    this.ViewForPie = new Pie(this.serviceDashboard.getRegion(this.Provice));
    this.chart = this.ViewForPie.render();
    this.ViewForProviceBar = new View(this.viewProviceBar.nativeElement, this.Provice , [380, 200 , 5, 50, 40, 5, 1]);
    this.ViewForProviceBar.render();
    this.ViewForCityBar = new View(this.viewCityBar.nativeElement, this.City , [220, 150 , 5, 50, 40, 5, 1]);
    this.ViewForCityBar.render();
 });
}
}
