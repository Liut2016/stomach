import { Component } from '@angular/core';
import { ITreeState, ITreeOptions } from 'angular-tree-component';
import { v4 } from 'uuid';
import { getnodes, getnodes1 } from '../shared/data';
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  nodes = getnodes();
  nodes1 = getnodes1();
  get state(): ITreeState {
    return localStorage.treeState && JSON.parse(localStorage.treeState);
  }
  set state(state: ITreeState) {
    localStorage.treeState = JSON.stringify(state);
  }
  options: ITreeOptions = {
    allowDrag: (node) => node.isLeaf,
  };
  options1: ITreeOptions = {
    getNodeClone: (node) => ({
      ...node.data,
      id: v4(),
      name: `copy of ${node.data.name}`
    })
  };
}

