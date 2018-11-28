import { Component, OnInit, ViewChild } from '@angular/core';
import { carsData, getProcessedCars, getCars, getCarsTSNE, getCarsDimTSNE } from '../shared/cars';
import { ScatterPlot } from './scatter-plot';
import { ScatterMatrixPlot } from './scatter-plot-matrix';

@Component({
  selector: 'app-dimension-reduction',
  templateUrl: './dimension-reduction.component.html',
  styleUrls: ['./dimension-reduction.component.css']
})
export class DimensionReductionComponent implements OnInit {
  scatterPlotForData: ScatterPlot;
  scatterPlotForDim: ScatterPlot;
  scatterMatrixPlot: ScatterMatrixPlot;
  @ViewChild('dataTsne') dataTarget;
  @ViewChild('dimTsne') dimTarget;
  @ViewChild('drResult') drResultTarget;
  constructor() { }

  ngOnInit() {
    /* console.log(carsData); */
    // const cars = getProcessedCars();
    /* console.log(cars); */

    // let str2output = '';
    // cars.forEach(car => {
    //   car.forEach(c => {
    //     str2output += ',' + c;
    //   });
    // });
    // console.log(str2output);
    // feed str2output to python-tsne model, and get result as carsTSNE
    const carsTSNEMatrix = getCarsTSNE();
    const carsDimTSNEMatrix = getCarsDimTSNE();
    const carsDataMatrix = getCars();
    this.scatterPlotForData = new ScatterPlot(this.dataTarget.nativeElement, carsTSNEMatrix);
    this.scatterPlotForDim = new ScatterPlot(this.dimTarget.nativeElement, carsDimTSNEMatrix);
    this.scatterMatrixPlot = new ScatterMatrixPlot(this.drResultTarget.nativeElement, carsDataMatrix);
    this.scatterPlotForData.render();
    this.scatterPlotForDim.render();
    this.scatterMatrixPlot.render();
   /*  console.log(carsTSNEMatrix);
    console.log(carsDimTSNEMatrix);
    console.log(carsOrigins); */


    // ----------------------------- try tf.tsne ------------------------------------------- //
    // // const data = tf.tensor(carsTSNEMatrix);

    // // Create some data
    // const data = tf.randomUniform([200, 10]);
    // // console.log(data);
    // // console.log(data.dataSync());
    // // const data = [[1.0, 0.1, 0.2], [1.0, 0.1, 0.2], [1.0, 0.1, 0.2], [1.0, 0.1, 0.2]];
    // // console.log(data);
    // // // Initialize the tsne optimizer
    // const tsneOpt = tsne.tsne(data);

    // // Compute a T-SNE embedding, returns a promise.
    // // Runs for 1000 iterations by default.
    // tsneOpt.compute(10).then(() => {
    //   // tsne.coordinate returns a *tensor* with x, y coordinates of
    //   // the embedded data.
    //   const coordinates = tsneOpt.coordinates();
    //   console.log(coordinates.dataSync());
    // });

    // -------------------------------- try tsne.js --------------------------------------------------//
    // const model = new TSNE({
    //   dim: 2,
    //   perplexity: 30.0,
    //   earlyExaggeration: 1.0,
    //   learningRate: 100.0,
    //   nIter: 1000,
    //   metric: 'euclidean'
    // });

    // const inputData = [[1.0, 0.1, 0.2], [1.0, 0.1, 0.2], [1.0, 0.1, 0.2], [1.0, 0.1, 0.2]];

    // console.log(inputData);
    // // inputData is a nested array which can be converted into an ndarray
    // // alternatively, it can be an array of coordinates (second argument should be specified as 'sparse')
    // model.init({
    //   data: carsData,
    //   type: 'dense'
    // });

    // // `error`,  `iter`: final error and iteration number
    // // note: computation-heavy action happens here
    // const [error, iter] = model.run();

    // // rerun without re-calculating pairwise distances, etc.
    // // let [error, iter] = model.rerun();

    // // `output` is unpacked ndarray (regular nested javascript array)
    // const output = model.getOutput();

    // // `outputScaled` is `output` scaled to a range of [-1, 1]
    // const outputScaled = model.getOutputScaled();

    // console.log(error, iter, output, outputScaled);
  }


}
