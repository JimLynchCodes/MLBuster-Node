import * as tf from '@tensorflow/tfjs';
import DataCollector from './data-collector'


// const dataCollector = new DataCollector();
// console.log(dataCollector.derp());

// const locationToSaveModel = './pretrainedModels/firstModel.json'
// Create a sequential model because we watch to build a "linear classification" model
const model = tf.sequential();

// // Add the different "layers" of data points that are thought to influence the outcome.
// model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// // TODO - add layers of actual MLB data

// // Set some config for how to train the model
// model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

// // Generate some synthetic data for training.
// // TODO - use real data from https://www.mysportsfeeds.com
// const xs = tf.tensor2d([[1], [2], [3], [4]], [4, 1]);
// const ys = tf.tensor2d([[1], [3], [5], [7]], [4, 1]);

// (async () => {
//    // Train model with fit().
//    await model.fit(xs, ys, {epochs: 1000});

//    // Save the trained model
// 	await model.save(locationToSaveModel)
// })();

// console.log('your model has been successfully saved to ' + locationToSaveModel + '!')


