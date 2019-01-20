import {Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource;

  @Input() data: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // console.log(this.data);
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
    this.dataSource = this.data;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data);
    // this.getDataForm(this.data);
    this.dataSource = this.data;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getDataForm(data) {
    const dataForm = [];
    const dims = Object.keys(data[0]);
    const newArr = dims.map((v) => {
      const item = {};
      item[v] = [];
      return item;
    });
    console.log(newArr);
    data.forEach((v) => {
      for (const key in v) {
        if (v.hasOwnProperty(key)) {
          newArr[key].push(v[key]);
        }
      }
    });
    console.log(newArr);
    return dataForm;
  }
}
