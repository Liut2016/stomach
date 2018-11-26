import { Component, OnInit } from '@angular/core';
import { carsData, getProcessedCars, carsTSNE } from '../shared/cars';
import { TSNE } from 'tsne-js';
import * as tf from '@tensorflow/tfjs';
import * as tsne from '@tensorflow/tfjs-tsne';

@Component({
  selector: 'app-dimension-reduction',
  templateUrl: './dimension-reduction.component.html',
  styleUrls: ['./dimension-reduction.component.css']
})
export class DimensionReductionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(carsData);
    const cars = getProcessedCars();
    console.log(cars);

    // let str2output = '';
    // cars.forEach(car => {
    //   car.forEach(c => {
    //     str2output += ',' + c;
    //   });
    // });
    // console.log(str2output);
    // feed str2output to python-tsne model, and get result as carsTSNE

    const carsTSNEMatrix = [];
    const values = carsTSNE.split(',');
    for (let index = 0; index < values.length / 2; index++) {
      carsTSNEMatrix.push([+(values[index * 2]), +values[index * 2] + 1]);
    }
    console.log(carsTSNEMatrix);

    // const data = tf.tensor(carsTSNEMatrix);

    // Create some data
    const data = tf.randomUniform([200, 10]);
    // console.log(data);
    // console.log(data.dataSync());
    // const data = [[1.0, 0.1, 0.2], [1.0, 0.1, 0.2], [1.0, 0.1, 0.2], [1.0, 0.1, 0.2]];
    // console.log(data);
    // // Initialize the tsne optimizer
    const tsneOpt = tsne.tsne(data);

    // Compute a T-SNE embedding, returns a promise.
    // Runs for 1000 iterations by default.
    tsneOpt.compute(10).then(() => {
      // tsne.coordinate returns a *tensor* with x, y coordinates of
      // the embedded data.
      const coordinates = tsneOpt.coordinates();
      console.log(coordinates.dataSync());
    });

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
