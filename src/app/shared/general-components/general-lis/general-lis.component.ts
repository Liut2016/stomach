
import { Component, OnInit ,ViewChildren,AfterViewInit,QueryList} from '@angular/core';
import { ConfInterface } from '@app/shared/conf-interface';
import { MatPaginator, MatTableDataSource,PageEvent} from '@angular/material';
import { DataSource } from '@angular/cdk/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-general-lis',
  templateUrl: './general-lis.component.html',
  styleUrls: ['./general-lis.component.css']
})
export class GeneralLisComponent extends ConfInterface implements OnInit,AfterViewInit{

  length: number[] = [];
  pageSize: 10;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any[] = [];
  panelOpenState = false;
  data_list : any[] = [];

  @ViewChildren(MatPaginator) paginator= new QueryList<MatPaginator>();
 
  constructor() {
    super();
   
  }
  keys: string[];


  ngOnInit() {
    this.keys = Object.keys(this.conf.data[0].data[0].data[0]);
    this.displayedColumns = this.keys; 
  }

  ngAfterViewInit(){  
    setTimeout(()=>{
     for (let index = 0; index < this.conf.data.length; index++) {
       this.data_list = this.conf.data;
       console.log(this.data_list);
      this.dataSource.push([]);
      this.dataSource[index]=new MatTableDataSource(this.conf.data.data.data[index]);
      this.dataSource[index].paginator = this.paginator.toArray()[index];
      this.length[index]=this.conf.data[index].data.length;
      }},1000);
  }
}
