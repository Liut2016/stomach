import { Component, OnInit, ViewChild } from '@angular/core';
import { carsData, getProcessedCars, getCars, getCarsTSNE, getCarsDimTSNE } from '../shared/cars';
import { ScatterPlot } from './scatter-plot';
import { ScatterMatrixPlot } from './scatter-plot-matrix';
import { HttpForNowService } from '@app/core/services/http-for-now.service';

@Component({
  selector: 'app-dimension-reduction',
  templateUrl: './dimension-reduction.component.html',
  styleUrls: ['./dimension-reduction.component.css']
})
export class DimensionReductionComponent implements OnInit {
  scatterPlotForData: ScatterPlot;
  scatterPlotForDim: ScatterPlot;
  scatterMatrixPlot: ScatterMatrixPlot;

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

  dimensionProjectionConfiguration = {
    indexes: [],
    dimensions: [],
    isDataProjection: 0,
    tsneConfiguration: {
      randomState: 50,
      perplexity: 30
    }
  };

  @ViewChild('dataTsne') dataTarget;
  @ViewChild('dimTsne') dimTarget;
  @ViewChild('drResult') drResultTarget;
  constructor(public httpService: HttpForNowService) { }

  ngOnInit() {
    const carsTSNEMatrix = getCarsTSNE();
    const carsDimTSNEMatrix = getCarsDimTSNE();
    this.carsDataMatrix = getCars();
    this.scatterPlotForData = new ScatterPlot(this.dataTarget.nativeElement, carsTSNEMatrix);
    this.scatterPlotForDim = new ScatterPlot(this.dimTarget.nativeElement, carsDimTSNEMatrix);
    this.scatterPlotForData.render();
    this.scatterPlotForDim.render();
    this.scatterMatrixPlot = new ScatterMatrixPlot(this.drResultTarget.nativeElement, this.carsDataMatrix);
    this.drawScatterMatrx();

    this.scatterPlotForData.bind(this.dataProjectionConfiguration, this.dimensionProjectionConfiguration, 1);
    this.scatterPlotForDim.bind(this.dataProjectionConfiguration, this.dimensionProjectionConfiguration, 0);

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
      this.scatterPlotForData.setData(projections);
      // this.scatterPlotForData.render();
      this.scatterPlotForData.refresh();
      this.scatterPlotForData.bind(this.dataProjectionConfiguration, this.dimensionProjectionConfiguration, 1);
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
      this.scatterPlotForDim.setData(projections);
      // this.scatterPlotForData.render();
      this.scatterPlotForDim.refresh();
      this.scatterPlotForDim.bind(this.dataProjectionConfiguration, this.dimensionProjectionConfiguration, 0);
    });
  }

  recoverDataProjection() {
    this.dataProjectionConfiguration.dimensions = [];
    this.dataProjectionConfiguration.indexes = [];
    this.freshDataProjection();
  }

  recoverDimensionProjection() {
    this.dataProjectionConfiguration.dimensions = [];
    this.dimensionProjectionConfiguration.dimensions = [];
    this.freshDimensionProjection();
  }

  drawScatterMatrx() {
    let points = [];
    const allDimensions = ['Acceleration', 'Cylinders', 'Displacement', 'Horsepower', 'Miles_per_Gallon', 'Origin',
     'Weight_in_lbs', 'Year'];
    let dimensions = [];
    if (this.dataProjectionConfiguration.indexes.length === 0) {
      points = this.carsDataMatrix;
    } else {
      this.dataProjectionConfiguration.indexes.forEach(n => {
        // points.push([this.carsDataMatrix[n], n]);
        points.push(this.carsDataMatrix[n]);
      });
    }
    if (this.dataProjectionConfiguration.dimensions.length !== 0) {
      this.dataProjectionConfiguration.dimensions.forEach(n => {
        if (n < 5) {
          dimensions.push(allDimensions[n]);
        } else if (n === 8) {
          dimensions.push(allDimensions[n - 2]);
        } else if (dimensions.indexOf('Origin') === -1) {
          // dimensions.push('Origin');
        }
      });
    } else {
      dimensions = ['Acceleration', 'Cylinders', 'Displacement', 'Horsepower', 'Miles_per_Gallon', 'Weight_in_lbs'];
    }
    this.scatterMatrixPlot.draw(points, dimensions);
    console.log(points, dimensions);
  }
}
