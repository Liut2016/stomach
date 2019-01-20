import {Component, OnInit, Input, OnChanges} from '@angular/core';
import vegaEmbed from 'vega-embed';
import {EmbedOptions, Actions} from 'vega-embed/src/embed';
import {ShortlistService} from '../shared/shortlist.service';

@Component({
  selector: 'app-plot-pane',
  templateUrl: './plot-pane.component.html',
  styleUrls: ['./plot-pane.component.css']
})
export class PlotPaneComponent implements OnInit, OnChanges {

  @Input() data: any;
  isAdded = false;

  constructor(private shortlistService: ShortlistService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log(this.data);
    this.render();
  }

  render() {
    if (this.data) {
      const embedOpts = <EmbedOptions>{
        actions: <Actions>{
          export: {png: true, svg: false},
          editor: false,
          source: false,
          compiled: false
        }
      };
      vegaEmbed('#embed-view', this.data, embedOpts);
    }
  }

  add2Shortlist(item) {
    if (!this.data) {
      alert('There is no gragh!');
    } else {
      this.shortlistService.add(item);
      /* this.isAdded = true; */
      item.isAdded = true;
    }
  }

  delete(item) {
    this.shortlistService.deleteByIndex(item);
    item.isAdded = false;
  }
}
