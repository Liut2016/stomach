import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShortlistService {
  shortlist = [];

  constructor() {
  }
  public get getShortlist() {
    return this.shortlist;
  }

  public set setShortlist(shortlist) {
    this.shortlist = shortlist;
  }

  add(json) {
    this.shortlist.push(json);
    console.log(this.shortlist);
  }

  deleteById(id) {
    this.shortlist.forEach((n, i) => {
      if (n.id === id) {
        this.shortlist.splice(id - 1, 1);
      }
    });
  }
  deleteByIndex(i) {
    const temp = this.shortlist.indexOf(i);
    this.shortlist.splice(temp, 1);
    console.log(temp);
}
}
