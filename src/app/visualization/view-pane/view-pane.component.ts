import {Component, OnInit, OnChanges, Input, EventEmitter, Output, ChangeDetectorRef} from '@angular/core';
import vegaEmbed from 'vega-embed';
import {DataLoadService} from '../shared/data-load.service';
import {ShortlistService} from '@app/visualization/shared/shortlist.service';

@Component({
  selector: 'app-view-pane',
  templateUrl: './view-pane.component.html',
  styleUrls: ['./view-pane.component.css']
})
export class ViewPaneComponent implements OnInit, OnChanges {

  @Input() data: any;
  @Output() visJson = new EventEmitter<any>();
  @Output() selected = new EventEmitter();
  test = [];

  constructor(  private shortlistService: ShortlistService,
                public dataService: DataLoadService,
                private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log(this.data);
    this.test = this.dataService.getVisArray().slice(0, 4);
    this.cdr.detectChanges();
    // 6) Use the result.  In this case, the tree has only 2 levels (the root and leaves).
    // We can just get the top visualization by accessing the 0-th item.
    for (let i = 0; i < this.test.length && i < 4; i++) {
      vegaEmbed('#test' + i, this.test[i], {actions: false});
    }
  }

  select(item) {
    // console.log(item.id);
    this.selected.emit(item);
    this.dataService.setSelectedJson(item);
  }

  add2Shortlist(item) {
    item.isAdded = true;
    this.shortlistService.add(item);
  }
  delete(item) {
    this.shortlistService.deleteByIndex(item);
    item.isAdded = false;
  }

}
