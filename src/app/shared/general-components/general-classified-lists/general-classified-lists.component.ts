import { Component, OnInit } from '@angular/core';
import { ConfInterface } from '@app/shared/conf-interface';

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
  selector: 'app-general-classified-lists',
  templateUrl: './general-classified-lists.component.html',
  styleUrls: ['./general-classified-lists.component.css']
})



export class GeneralClassifiedListsComponent extends ConfInterface implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() {
    super();
  }
  keys: string[];

  ngOnInit() {
    console.log(this.conf);
    console.log(this.conf.data[0].data[0]);
    this.keys = Object.keys(this.conf.data[0].data[0]);

    this.displayedColumns = this.keys;
    console.log(this.conf.data[0].data);
    console.log(this.displayedColumns);
    setTimeout(() => {
      this.conf.title = '列表变了';
    }, 3000);
  }

}
