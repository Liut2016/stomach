import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {carsData, getProcessedCars, getCars, getCarsTSNE, getCarsDimTSNE} from '../shared/cars';
import {ScatterPlot} from './scatter-plot';
// import { ScatterMatrixPlot } from './scatter-plot-matrix';
import {HttpForNowService} from '@app/core/services/http-for-now.service';
import {DataLoadService} from '../shared/data-load.service';

@Component({
  selector: 'app-dimension-reduction',
  templateUrl: './dimension-reduction.component.html',
  styleUrls: ['./dimension-reduction.component.css']
})
export class DimensionReductionComponent implements OnInit {
  scatterPlotForData: ScatterPlot;
  scatterPlotForDim: ScatterPlot;
  dataTSNE; dimTSNE;
  // scatterMatrixPlot: ScatterMatrixPlot;

  // Dimensions = ['Acceleration', 'Cylinders', 'Displacement', 'Horsepower', 'Miles_per_Gallon', 'Origin.USA',
  //   'Origin.Europe', ' Origin.Japan', 'Weight_in_lbs', 'Year'];
  Dimensions = this.dataService.getVal('dim');
  carsDataMatrix;

  dataProjectionConfiguration = {
    indexes: [],
    dimensions: [],
    isDataProjection: 1,
    tsneConfiguration: {
      randomState: 50,
      perplexity: 30
    }
  };
  initdataProjectionConfiguration = {
    indexes: new Array(500).fill(1).map( (v, i) => {
      return i;
    }),
    dimensions: new Array(19).fill(1).map( (v, i) => {
      return i;
    }),
    isDataProjection: 1,
    tsneConfiguration: {
      randomState: 50,
      perplexity: 30
    }
  };
  initdimProjectionConfiguration = {
    indexes: new Array(500).fill(1).map( (v, i) => {
      return i;
    }),
    dimensions: new Array(19).fill(1).map( (v, i) => {
      return i;
    }),
    isDataProjection: 0,
    tsneConfiguration: {
      randomState: 50,
      perplexity: 30
    }
  };

  dimensionProjectionConfiguration = {
    indexes: [],
    dimensions: [],
    isDataProjection: 0,
    tsneConfiguration: {
      randomState: 50,
      perplexity: 30
    }
  };
  @Output() data = new EventEmitter<any>();
  @ViewChild('dataTsne') dataTarget;
  @ViewChild('dimTsne') dimTarget;
  @ViewChild('drResult') drResultTarget;

  constructor(public httpService: HttpForNowService,
              public dataService: DataLoadService) {
  }

  ngOnInit() {
    this.httpService.getDRResult(this.initdataProjectionConfiguration).then((res) => {
      console.log(res);
      this.dataTSNE = res.data.map((v, i) => {
        return v.concat(i);
      });
      this.scatterPlotForData = new ScatterPlot(this.dataTarget.nativeElement, this.dataTSNE, []);
      this.scatterPlotForData.render();
      this.scatterPlotForData.bind(this.dataProjectionConfiguration, this.dimensionProjectionConfiguration, this.dataService, 1);
      this.httpService.getDRResult(this.initdimProjectionConfiguration).then((result) => {
        console.log(result);
        this.dimTSNE = result.data.map((v, i) => {
          return v.concat(i);
        });
        this.dataService.getDisArr(this.dimTSNE);
        this.scatterPlotForDim = new ScatterPlot(this.dimTarget.nativeElement, this.dimTSNE, this.Dimensions);
        this.scatterPlotForDim.render();
        this.scatterPlotForDim.bind(this.dataProjectionConfiguration, this.dimensionProjectionConfiguration, this.dataService, 0);
      });
    });

  }

  freshDataProjection() {
    this.httpService.getDRResult(this.dataProjectionConfiguration).then(res => {
      console.log(res);
      const projections = res.data;
      if (this.dataProjectionConfiguration.indexes.length === 0) {
        projections.forEach((n, i) => {
          n.push(i);
        });
      } else {
        projections.forEach((n, i) => {
          n.push(this.dataProjectionConfiguration.indexes[i]);
        });
      }
      console.log(projections);
      this.dataService.setSelectedData(projections);
      this.scatterPlotForData.setData(projections);
      // this.scatterPlotForData.render();
      this.scatterPlotForData.refresh();
      this.scatterPlotForData.bind(this.dataProjectionConfiguration, this.dimensionProjectionConfiguration, this.dataService, 1);
    });
  }

  freshDimensionProjection() {
    this.httpService.getDRResult(this.dimensionProjectionConfiguration).then(res => {
      console.log(res);
      const projections = res.data;
      if (this.dimensionProjectionConfiguration.dimensions.length === 0) {
        projections.forEach((n, i) => {
          n.push(i);
        });
      } else {
        projections.forEach((n, i) => {
          n.push(this.dimensionProjectionConfiguration.dimensions[i]);
        });
      }
      console.log(projections);
      // this.data.emit(projections);
      this.dataService.setSelectedDims(projections);
      this.scatterPlotForDim.setData(projections);
      // this.scatterPlotForData.render();
      this.scatterPlotForDim.refresh();
      this.scatterPlotForDim.bind(this.dataProjectionConfiguration, this.dimensionProjectionConfiguration, this.dataService, 0);
    });
  }

  recoverDataProjection() {
    this.dataProjectionConfiguration.dimensions = [];
    this.dataProjectionConfiguration.indexes = [];
    this.freshDataProjection();
    this.dataService.initVisArray();
  }

  recoverDimensionProjection() {
    this.dataProjectionConfiguration.dimensions = [];
    this.dimensionProjectionConfiguration.dimensions = [];
    this.freshDimensionProjection();
    this.dataService.initVisArray();
  }
}
