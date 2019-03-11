const tf = require("@tensorflow/tfjs");
require('@tensorflow/tfjs-node');

//Just disables the warning, doesn't enable AVX/FMA
// const os = require("os");
// os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2"


// TODO - parameterize this somehow. Possibly take command line arg and/or expose browser UI.


(async () => {
    console.log('running...')
    const trainedModelLocation = 'file://./src/pretrainedModels/trained-model-20190310T00:56:36.434Z.json'
    // Load one of our pre-trained models
    const model = await tf.loadModel(trainedModelLocation);
    
    console.lof('running2...')
    // Run inference with predict().
    model.predict(tf.tensor2d([[5]], [1, 1])).print();
    
    console.log('running3...')
console.log(model.predict(tf.tensor2d([[5]], [1, 1])).print());

})