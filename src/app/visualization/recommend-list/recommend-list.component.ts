import { Component, OnInit, Input, Output, AfterViewInit, ElementRef, ViewChildren, QueryList,
  ChangeDetectorRef, ViewChild, EventEmitter } from '@angular/core';
import vegaEmbed from 'vega-embed';
import { NguCarouselConfig } from '@app/shared/modules/carousel';
import { slider } from './slider-animation';
import { DataLoadService } from '../shared/data-load.service';

import { ShortlistService } from '../shared/shortlist.service';

@Component({
  selector: 'app-recommend-list',
  templateUrl: './recommend-list.component.html',
  styleUrls: ['./recommend-list.component.scss'],
  animations: [slider],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendListComponent implements OnInit, AfterViewInit {
  @Input() data: Array<any>;
  @Output() selected = new EventEmitter();
  @ViewChildren('div2vis') elements2Vis: QueryList<ElementRef>;
  @ViewChild('myCarousel') myCarousel;
  num = 0;
  test = [];
  prevTest = [];
  prevData = [];
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 500,
    slide: 1,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 1500 },
    animation: 'lazy'
  };

  constructor(private elementRef: ElementRef,
              private cdr: ChangeDetectorRef,
              private shortlistService: ShortlistService,
              public dataService: DataLoadService ) { }

  ngOnInit() {
    this.dataService.jsonUpdated.subscribe((val) => {
      this.test = this.dataService.getVal('json');
      this.cdr.detectChanges();
      console.log(this.test);
      console.log(this.myCarousel);
      this.elements2Vis.forEach((ele, i) => {
        this.cdr.detectChanges();
        vegaEmbed(ele.nativeElement, this.test[i], { actions: false });
      });
      this.myCarousel.moveTo(0);
    });
  }

  ngAfterViewInit() {
    this.test = this.dataService.getVisArray();
    this.cdr.detectChanges();
    console.log(this.data);
    console.log(this.myCarousel);
    // 6) Use the result.  In this case, the tree has only 2 levels (the root and leaves).
    // We can just get the top visualization by accessing the 0-th item.
    console.log(this.elementRef.nativeElement.querySelector('.tile'));
    console.log(this.elements2Vis);
    this.elements2Vis.forEach((ele, i) => {
      this.cdr.detectChanges();
      vegaEmbed(ele.nativeElement, this.test[i], { actions: false });
    });
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
