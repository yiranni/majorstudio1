const fs = require('fs');
const _ = require('underscore');

let springData = fs.readFileSync('data/allSpringData.json');

var springContent = JSON.parse(springData);

// console.log(typeof springContent);

// console.log(springContent[0]);

var springCounts = [];
// all spring objects in 500-699
var spring500_600 = [];
var spring500_600Counts = {};
spring500_600Counts.era = '500-699'
for (var i = 0; i < springContent.length; i++) {
    if ((springContent[i].objectBeginDate) >= 500 && (springContent[i].objectBeginDate) < 700) {
        spring500_600.push(springContent[i]);
        // console.log(springContent[i].classification)
    }
}


var numSculpture500_600 = spring500_600.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
spring500_600Counts.sculpture = numSculpture500_600;

var numPaintings500_600 = spring500_600.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings") + (artwork.classification == "Drawings");
}, 0);
spring500_600Counts.paintings = numPaintings500_600;

var numDrawings500_600 = spring500_600.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
spring500_600Counts.drawings = numDrawings500_600;

var numUnknowns500_600 = spring500_600.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
spring500_600Counts.unknown = numUnknowns500_600;
spring500_600Counts.other = spring500_600.length - numSculpture500_600 - numPaintings500_600 - numDrawings500_600 - numUnknowns500_600;
springCounts.push(spring500_600Counts);


// console.log(spring500_600Counts)

// all spring objects in 700-899
var spring700_899 = [];
var spring700_899Counts = {};
spring700_899Counts.era = '700-899'
for (var i = 0; i < springContent.length; i++) {
    if ((springContent[i].objectBeginDate) >= 700 && (springContent[i].objectBeginDate) < 900) {
        spring700_899.push(springContent[i]);
        // console.log(springContent[i].classification)
    }
}


var numSculpture700_899 = spring700_899.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
spring700_899Counts.sculpture = numSculpture700_899;

var numPaintings700_899 = spring700_899.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
spring700_899Counts.paintings = numPaintings700_899;

var numDrawings700_899 = spring700_899.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
spring700_899Counts.drawings = numDrawings700_899;

var numUnknowns700_899 = spring700_899.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
spring700_899Counts.unknown = numUnknowns700_899;
spring700_899Counts.other = spring700_899.length - numSculpture700_899 - numPaintings700_899 - numDrawings700_899 - numUnknowns700_899;
springCounts.push(spring700_899Counts);


// console.log(spring700_899Counts)

// all spring objects in 900-1099
var spring900_1099 = [];
var spring900_1099Counts = {};
spring900_1099Counts.era = '900_1099'
for (var i = 0; i < springContent.length; i++) {
    if ((springContent[i].objectBeginDate) >= 900 && (springContent[i].objectBeginDate) < 1100) {
        spring900_1099.push(springContent[i]);
        // console.log(springContent[i].classification)
    }
}


var numSculpture900_1099 = spring900_1099.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
spring900_1099Counts.sculpture = numSculpture900_1099;

var numPaintings900_1099 = spring900_1099.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
spring900_1099Counts.paintings = numPaintings900_1099;

var numDrawings900_1099 = spring900_1099.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
spring900_1099Counts.drawings = numDrawings900_1099;

var numUnknowns900_1099 = spring900_1099.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
spring900_1099Counts.unknown = numUnknowns900_1099;
spring900_1099Counts.other = spring900_1099.length - numSculpture900_1099 - numPaintings900_1099 - numDrawings900_1099 - numUnknowns900_1099;
springCounts.push(spring900_1099Counts);


// console.log(spring900_1099Counts)

// all spring objects in 1100-1299
var spring1100_1299 = [];
var spring1100_1299Counts = {};
spring1100_1299Counts.era = '1100_1299'
for (var i = 0; i < springContent.length; i++) {
    if ((springContent[i].objectBeginDate) >= 1100 && (springContent[i].objectBeginDate) < 1300) {
        spring1100_1299.push(springContent[i]);
        // console.log(springContent[i].classification)
    }
}


var numSculpture1100_1299 = spring1100_1299.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
spring1100_1299Counts.sculpture = numSculpture1100_1299;

var numPaintings1100_1299 = spring1100_1299.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
spring1100_1299Counts.paintings = numPaintings1100_1299;

var numDrawings1100_1299 = spring1100_1299.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
spring1100_1299Counts.drawings = numDrawings1100_1299;

var numUnknowns1100_1299 = spring1100_1299.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
spring1100_1299Counts.unknown = numUnknowns1100_1299;
spring1100_1299Counts.other = spring1100_1299.length - numSculpture1100_1299 - numPaintings1100_1299 - numDrawings1100_1299- numUnknowns1100_1299;
springCounts.push(spring1100_1299Counts);


// console.log(spring1100_1299Counts)

// all spring objects in 1300-1499
var spring1300_1499 = [];
var spring1300_1499Counts = {};
spring1300_1499Counts.era = '1300_1499'
for (var i = 0; i < springContent.length; i++) {
    if ((springContent[i].objectBeginDate) >= 1300 && (springContent[i].objectBeginDate) < 1500) {
        spring1300_1499.push(springContent[i]);
        // console.log(springContent[i].classification)
    }
}


var numSculpture1300_1499 = spring1300_1499.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
spring1300_1499Counts.sculpture = numSculpture1300_1499;

var numPaintings1300_1499 = spring1300_1499.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
spring1300_1499Counts.paintings = numPaintings1300_1499;

var numDrawings1300_1499 = spring1300_1499.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
spring1300_1499Counts.drawings = numDrawings1300_1499;

var numUnknowns1300_1499 = spring1300_1499.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
spring1300_1499Counts.unknown = numUnknowns1300_1499;
spring1300_1499Counts.other = spring1300_1499.length - numSculpture1300_1499 - numPaintings1300_1499 -numDrawings1300_1499 - numUnknowns1300_1499;
springCounts.push(spring1300_1499Counts);


// console.log(spring1300_1499Counts)

// all spring objects in 1500-1699
var spring1500_1699 = [];
var spring1500_1699Counts = {};
spring1500_1699Counts.era = '1500_1699'
for (var i = 0; i < springContent.length; i++) {
    if ((springContent[i].objectBeginDate) >= 1500 && (springContent[i].objectBeginDate) < 1700) {
        spring1500_1699.push(springContent[i]);
        // console.log("*******************")
        // console.log(springContent[i].classification)
    }
}


var numSculpture1500_1699 = spring1500_1699.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
spring1500_1699Counts.sculpture = numSculpture1500_1699;

var numPaintings1500_1699 = spring1500_1699.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
spring1500_1699Counts.paintings = numPaintings1500_1699;

var numDrawings1500_1699 = spring1500_1699.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
spring1500_1699Counts.drawings = numDrawings1500_1699;

var numUnknowns1500_1699 = spring1500_1699.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
spring1500_1699Counts.unknown = numUnknowns1500_1699;
spring1500_1699Counts.other = spring1500_1699.length - numSculpture1500_1699 - numPaintings1500_1699 - numDrawings1500_1699 - numUnknowns1500_1699;
springCounts.push(spring1500_1699Counts);


// console.log(spring1500_1699Counts)

// all spring objects in 1700-1899
var spring1700_1899 = [];
var spring1700_1899Counts = {};
spring1700_1899Counts.era = '1700_1899'
for (var i = 0; i < springContent.length; i++) {
    if ((springContent[i].objectBeginDate) >= 1700 && (springContent[i].objectBeginDate) < 1899) {
        spring1700_1899.push(springContent[i]);
        // console.log(springContent[i].classification)
    }
}


var numSculpture1700_1899 = spring1700_1899.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
spring1700_1899Counts.sculpture = numSculpture1700_1899;

var numPaintings1700_1899 = spring1700_1899.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
spring1700_1899Counts.paintings = numPaintings1700_1899;

var numDrawings1700_1899 = spring1700_1899.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
spring1700_1899Counts.drawings = numDrawings1700_1899;

var numUnknowns1700_1899 = spring1700_1899.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
spring1700_1899Counts.unknown = numUnknowns1700_1899;
spring1700_1899Counts.other = spring1700_1899.length - numSculpture1700_1899 - numDrawings1700_1899 - numPaintings1700_1899 - numUnknowns1700_1899;
springCounts.push(spring1700_1899Counts);


// console.log(spring1700_1899Counts)

// all spring objects in 1900-present
var spring1900_present = [];
var spring1900_presentCounts = {};
spring1900_presentCounts.era = '1900_present'
for (var i = 0; i < springContent.length; i++) {
    if ((springContent[i].objectBeginDate) >= 1900) {
        spring1900_present.push(springContent[i]);
        // console.log(springContent[i].classification)
    }
}


var numSculpture1900_present = spring1900_present.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
spring1900_presentCounts.sculpture = numSculpture1900_present;

var numPaintings1900_present = spring1900_present.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
spring1900_presentCounts.paintings = numPaintings1900_present;

var numDrawings1900_present = spring1900_present.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
spring1900_presentCounts.drawings = numDrawings1900_present;

var numUnknowns1900_present = spring1900_present.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
spring1900_presentCounts.unknown = numUnknowns1900_present;
spring1900_presentCounts.other = spring1900_present.length - numSculpture1900_present - numPaintings1900_present - numDrawings1900_present - numUnknowns1900_present;
springCounts.push(spring1900_presentCounts);


// console.log(spring1900_presentCounts)

console.log(springCounts)

fs.writeFileSync('./data/springCounts.json', JSON.stringify(springCounts));



