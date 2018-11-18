import {Component, VERSION, OnInit, Output, EventEmitter} from '@angular/core';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
import { DataLoadService } from '../shared/data-load.service';
import { testData } from '../shared/weball';
import {Sort} from '@angular/material';

export interface Dessert {
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
}

@Component({
  selector: 'app-data-pane',
  templateUrl: './data-pane.component.html',
  styleUrls: ['./data-pane.component.css']
})
export class DataPaneComponent{

    @Output('visData') data = new EventEmitter<any>();
    desserts: Dessert[] = [
        {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
        {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
        {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
        {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
        {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
    ];

    sortedData: Dessert[];

    constructor() {
        this.sortedData = this.desserts.slice();
    }

    sortData(sort: Sort) {
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }

        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(a.calories, b.calories, isAsc);
                case 'fat': return compare(a.fat, b.fat, isAsc);
                case 'carbs': return compare(a.carbs, b.carbs, isAsc);
                case 'protein': return compare(a.protein, b.protein, isAsc);
                default: return 0;
            }
        });
    }

    getData(){
        this.data.emit(new testData().weball);
    }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}