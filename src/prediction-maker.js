import * as tf from '@tensorlowjs/tfjs';

// TODO - parameterize this somehow. Possibly take command line arg and/or expose browser UI.
const = './pretrained-models/model.json'

// Load one of our pre-trained models
const model = await tf.loadModel(trainedModel);

// Run inference with predict().
model.predict(tf.tensor2d([[5]], [1, 1])).print();