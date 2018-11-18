import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-encoding-pane',
  templateUrl: './encoding-pane.component.html',
  styleUrls: ['./encoding-pane.component.css']
})
export class EncodingPaneComponent implements OnInit {

  @Input('tabledata') data: any;
  @Output('visJson') json = new EventEmitter<any>();

  dims = [];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    console.log(this.data);
    this.getKeys(this.data);
  }

  getKeys(data){
    for( let key in data[0]){
      this.dims.push(key);
    }
  }

  getJson(){
    this.json.emit(this.data);
  }

}
