import { Component, OnInit, AfterViewInit, ViewChild, NgZone, Inject} from '@angular/core';
import { MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
import { ConfInterface } from '@app/shared/conf-interface';
import { HttpService} from '@app/core/services/http.service';
import { SettingsService} from '@app/core/services/settings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalConfigure} from '@app/shared/local-configure';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  confs: any[];
  exportrules: any[];
}

@Component({
  selector: 'app-general-button-dialog',
  templateUrl: './general-button-dialog.component.html',
  styleUrls: ['./general-button-dialog.component.css']
})



export class GeneralButtonDialogComponent extends ConfInterface implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;


  length: 15;
  pageSize: 10;
  // MatPaginator Output
  pageEvent: PageEvent;
  start = 1;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource = new MatTableDataSource();
  keys: string[];

  position: number[];

  confs: any[];
  exportrules = ['导出规则1', '导出规则2', '导出规则3', '导出规则4'];

  constructor(
    public dialog: MatDialog,
    private service: HttpService,
    private settingService: SettingsService,
    private route: ActivatedRoute,
    private router: Router,
    private zone: NgZone
  ) {
    super();
  }



  ngOnInit() {
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogOverviewRule, {
      width: '500px',
      data: {
        confs: [],
        exportrules: this.exportrules
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  downloadFile() {
    const params = {
        disease: 'hypertension',
        follow: '0',
    };
    this.service.downloadFile( params, 'AllHypertensionData.csv' );
}
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-overview-rule',
  templateUrl: 'dialog-overview-rule.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogOverviewRule {
  
  // for prod
  exportData(e) {}


  constructor(
    public dialogRef: MatDialogRef<DialogOverviewRule>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

