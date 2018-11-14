import { Component, OnInit, Injectable } from '@angular/core';
import {components_list  } from '../cmpList';
import {NestedTreeControl} from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

export class JsonNode {
  children: JsonNode[];
  name: string;
  type: any;
}


const TREE_DATA = JSON.stringify(components_list[0]);

@Injectable()
export class NodeDatabase {
  dataChange = new BehaviorSubject<JsonNode[]>([]);
  get data(): JsonNode[] {return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    const dataObject = JSON.parse(TREE_DATA);
    const data = this.buildJsonTree(dataObject, 0);
    this.dataChange.next(data);
  }

  buildJsonTree(obj: {[key: string]: any}, level: number): JsonNode[] {
    return Object.keys(obj).reduce<JsonNode[]>((accumulator, key) => {
        const value = obj[key];
        const node = new JsonNode();
        node.name = key;
        if (value != null) {
            if (typeof value === 'object') {
                node.children = this.buildJsonTree(value, level + 1);
            } else {
                node.type = value;
            }
        }
        return accumulator.concat(node);
    }, []);
  }
}

@Component({
  selector: 'app-general-components-list',
  templateUrl: './general-components-list.component.html',
  styleUrls: ['./general-components-list.component.css'],
  providers: [NodeDatabase]
})
export class GeneralComponentsListComponent implements OnInit {

  nestedTreeControl: NestedTreeControl<JsonNode>;
  nestedDataSource: MatTreeNestedDataSource<JsonNode>;
  components_list = components_list;
  show_source = false;
  source_code = JSON.stringify(this.components_list[0]);

  constructor(database: NodeDatabase) {
    this.nestedTreeControl = new NestedTreeControl<JsonNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  hasNestedChild = (_: number, nodeData: JsonNode) => !nodeData.type;

  private _getChildren = (node: JsonNode) => node.children;

  ngOnInit() {
  }

  changeTab(e) {
    this.source_code = JSON.stringify(this.components_list[e.index]);
  }

  showSource() {
    this.show_source = !this.show_source;
  }

}
