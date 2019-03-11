const tf = require("@tensorflow/tfjs");
require('@tensorflow/tfjs-node');
// import DataCollector from './data-collector'
const DataCollector = require('./data-collector.service.js')

// const dataCollector = new DataCollector();
// console.log(dataCollector.derp());

console.log('dc: ', DataCollector.derp())
const nowString = (new Date()).toISOString().replace(/-/g,"");

const locationToSaveModel = 'file://./src/pretrainedModels/trained-model-' + nowString + '.json'
// Create a sequential model because we watch to build a "linear classification" model
const model = tf.sequential();

// // Add the different "layers" of data points that are thought to influence the outcome.
// "units" represents "the dimentiality of the ouput space".
 
model.add(tf.layers.dense({units: 1, inputShape: [4]}));

// // TODO - add layers of actual MLB data

// // Set some config for how to train the model
model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

// // Generate some synthetic data for training.
// // TODO - use real data from https://www.mysportsfeeds.com
// const xs = tf.tensor2d([[1], [2], [3], [4]], [4, 1]);
// const xs = tf.tensor2d([[[1, 1, 1], [1,1,1]], [[2, 2, 2], [2,2,2]], [[3, 3, 3], [3,3,3]], [[4, 4, 4], [4, 4, 4]]], [4, 3]);
// const ys = tf.tensor2d([[5, 5, 5], [6, 6, 6], [7, 7, 7], [8, 8, 8]], [4, 3]);
// const ys = tf.tensor2d([[1], [3], [5], [7]], [4, 1]);

xs = tf.tensor2d([[0,0,0,0],[0,1,1,1],[1,0,1,1],[1,1,1,1]], [4, 4]);
ys = tf.tensor2d([[0],[1],[1],[0]], [4,1]);


(async () => {

    // console.log('shape: ', tf.tensor([50,50]).shape)
//    // Train model with fit().
   await model.fit(xs, ys, {epochs: 1000});

//    // Save the trained model
   await model.save(locationToSaveModel)
   
    console.log(model.predict(tf.tensor([50, 50,50,50], [1, 4])).print());
   
    console.log('your model has been successfully saved to ' + locationToSaveModel + '!');

})();



