
## MLBuster3000
a cool tensorflow.js project for predicting baseball outcomes


## The Model-Trainer and The Predictor
This repository basically contains two independent "node projects" where the model-trainer creates a "trained model object" that can be saved to a json file, and the other predictor project just loads this trained model, takes into the current state of the world as input data, and outputs a prediction of <i><b>the number of runs that team will get in a given upcoming game.</b></i>

## Why Seperate It Into Two?
The actual training of the model is he piece that takes the most time and computational power, and also you need to have the entire set of data used to to train the model (which can be very large). If we had a cool UI that just tok input data and made predictions then we wouldn't need to train the model every time we wanted a prediction. Another cool thing about this is that we can use the node.js specific version that uses [native C++ bindings](https://js.tensorflow.org/setup/) and also [feed tensorflow models made in python into a javascript UI to just keep hammering <i>.predict()</i>!  


## Initial Designs

Here is an image of some initial thoughts and designs for displaying the probabilities visually. 

<img src=./imgs/mlbuster-design-1.png />

## Input Data Shape
The input data in each case is really just an of integers! Yep

Input data shape:
```
const inputShape = [ 
    1,  // average number of runs for a team. [this season, prev season, 2 seasons ago]
    2,  // average number of runs team got prev season vs opponent team. [this season, prev season, 2 seasons ago]
    4,  // average batting average of team [this season, prev season, 2 seasons ago]
    4   // avg team singles [this season, prev season, 2 seasons ago]
    5,  // avg total doubles doubles [this season, prev season, 2 seasons ago]
    6,  // avg total triples [this season, prev season, 2 seasons ago]
    7,  // avg total hr's [this season, prev season, 2 seasons ago]
     
    [1, 2, 3, 4, 5, 6, 7, 8],  // individual player prev season batting stats (all teams)
        - for each player [
            1, batting avg [this season, prev, 2 seasons ago]
            2,  // avg singles per game [this season, prev season, 2 seasons ago]
            5,  // avg doubles per game [this season, prev season, 2 seasons ago]
            6,  // avg triples per game [this season, prev season, 2 seasons ago]
            7,  // avg hr's per game [this season, prev season, 2 seasons ago]
        ]
    [1, 2, 3, 4, 5, 6, 7, 8],  // individual player prev season batting stats (vs this team)
    [1, 2, 3],  // vector of opponent team pitcher stats? (general and specific to opponent)
        - for each pitcher in bullpen - [
            1. avr runs given up per inning [this season, prev season, 2 seasons ago]
            2, avg strikeouts per inning, [this season, prev season, 2 seasons ago]
            3, avg hits given up [this season, prev season, 2 seasons ago]
            4, number of innings pitched recently.
        ]
]
```

<i>note: here's a good article that pretty nicely explains how tensorflow inputs work with a simple example: https://dzone.com/articles/getting-started-with-tensorflowjs</i>

## Output Data Shape
The output data is even simpler than the input data- it's just one single integer! I mean yeah, the number of runs that team got (or will get) in that particular game. It's just one single number, and it has to be an integer!

Output data shape:
```
const outputShape = [1]
```



## Solving It As A Linear Classification Problem
The number of points a baseball team can get can't be less than zerp, and it realistically won't be more than around 10 or 20. Also, the numbers of points a team has is always a whole number and can never be a fraction. Therefore, we can frame it as different "buckets" that a team could fall into after this game. The team must fall into exactly one bucket, and our predictor should output a probability for each number of runs the team could get.

In terms of tensorflow.js syntax it means we create the initial model object with `tf.sequential()`.


## Initial Setup
First clone the project, move into it, and install the dependencies from npm:

`https://github.com/JimTheMan/MLBuster3000.git`
`cd MLBuster3000`
`npm i`

<i>You might need to also install babel-cli globally</i>
`npm install -g babel-cli`


## Running The Files
It seems like tensorflow currently only supports es2017 syntax. These commands might not work, but in theory this is how you would do it:

To create a new model:
`npm run train-model <model-name> <training-data-set>`

To make a prediction from a trained model:
`npm run predict <model-name> <prediction-data-set>`


<i>Note: the `model-name` is used to actually name the files and store them in the "trained-models" folder.</i>

## Help
Ummm, if anyone knows how to fix random babel errors that it would be pretty helpful if you could try to install the correct dependencies, convert the es2017 code to something we can run, and actually create a trained model json file... :)

## Credits 

If you like this project then feel free to say thanks to it's initial creator, [JimTheMan](https://github.com/JimTheMan). Feel free to use this code and contribute by opening issues or pull requests, but disclaimer - if you use and lose your money, your life, or anything else then that's on you, and you can't hold me responsible. 😜 

