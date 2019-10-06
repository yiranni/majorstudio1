const fs = require('fs');
const _ = require('underscore');

let winterData = fs.readFileSync('data/allWinterData.json');

var winterContent = JSON.parse(winterData);

// console.log(typeof winterContent);

// console.log(winterContent[0]);

var winterCounts = [];
// all winter objects in 500-699
var winter500_600 = [];
var winter500_600Counts = {};
winter500_600Counts.era = '500-699'
for (var i = 0; i < winterContent.length; i++) {
    if ((winterContent[i].objectBeginDate) >= 500 && (winterContent[i].objectBeginDate) < 700) {
        winter500_600.push(winterContent[i]);
        // console.log(winterContent[i].classification)
    }
}


var numSculpture500_600 = winter500_600.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
winter500_600Counts.sculpture = numSculpture500_600;

var numPaintings500_600 = winter500_600.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings") + (artwork.classification == "Drawings");
}, 0);
winter500_600Counts.paintings = numPaintings500_600;

var numDrawings500_600 = winter500_600.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
winter500_600Counts.drawings = numDrawings500_600;

var numUnknowns500_600 = winter500_600.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
winter500_600Counts.unknown = numUnknowns500_600;
winter500_600Counts.other = winter500_600.length - numSculpture500_600 - numPaintings500_600 - numDrawings500_600 - numUnknowns500_600;
winterCounts.push(winter500_600Counts);


// console.log(winter500_600Counts)

// all winter objects in 700-899
var winter700_899 = [];
var winter700_899Counts = {};
winter700_899Counts.era = '700-899'
for (var i = 0; i < winterContent.length; i++) {
    if ((winterContent[i].objectBeginDate) >= 700 && (winterContent[i].objectBeginDate) < 900) {
        winter700_899.push(winterContent[i]);
        // console.log(winterContent[i].classification)
    }
}


var numSculpture700_899 = winter700_899.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
winter700_899Counts.sculpture = numSculpture700_899;

var numPaintings700_899 = winter700_899.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
winter700_899Counts.paintings = numPaintings700_899;

var numDrawings700_899 = winter700_899.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
winter700_899Counts.drawings = numDrawings700_899;

var numUnknowns700_899 = winter700_899.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
winter700_899Counts.unknown = numUnknowns700_899;
winter700_899Counts.other = winter700_899.length - numSculpture700_899 - numPaintings700_899 - numDrawings700_899 - numUnknowns700_899;
winterCounts.push(winter700_899Counts);


// console.log(winter700_899Counts)

// all winter objects in 900-1099
var winter900_1099 = [];
var winter900_1099Counts = {};
winter900_1099Counts.era = '900_1099'
for (var i = 0; i < winterContent.length; i++) {
    if ((winterContent[i].objectBeginDate) >= 900 && (winterContent[i].objectBeginDate) < 1100) {
        winter900_1099.push(winterContent[i]);
        // console.log(winterContent[i].classification)
    }
}


var numSculpture900_1099 = winter900_1099.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
winter900_1099Counts.sculpture = numSculpture900_1099;

var numPaintings900_1099 = winter900_1099.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
winter900_1099Counts.paintings = numPaintings900_1099;

var numDrawings900_1099 = winter900_1099.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
winter900_1099Counts.drawings = numDrawings900_1099;

var numUnknowns900_1099 = winter900_1099.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
winter900_1099Counts.unknown = numUnknowns900_1099;
winter900_1099Counts.other = winter900_1099.length - numSculpture900_1099 - numPaintings900_1099 - numDrawings900_1099 - numUnknowns900_1099;
winterCounts.push(winter900_1099Counts);


// console.log(winter900_1099Counts)

// all winter objects in 1100-1299
var winter1100_1299 = [];
var winter1100_1299Counts = {};
winter1100_1299Counts.era = '1100_1299'
for (var i = 0; i < winterContent.length; i++) {
    if ((winterContent[i].objectBeginDate) >= 1100 && (winterContent[i].objectBeginDate) < 1300) {
        winter1100_1299.push(winterContent[i]);
        // console.log(winterContent[i].classification)
    }
}


var numSculpture1100_1299 = winter1100_1299.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
winter1100_1299Counts.sculpture = numSculpture1100_1299;

var numPaintings1100_1299 = winter1100_1299.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
winter1100_1299Counts.paintings = numPaintings1100_1299;

var numDrawings1100_1299 = winter1100_1299.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
winter1100_1299Counts.drawings = numDrawings1100_1299;

var numUnknowns1100_1299 = winter1100_1299.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
winter1100_1299Counts.unknown = numUnknowns1100_1299;
winter1100_1299Counts.other = winter1100_1299.length - numSculpture1100_1299 - numPaintings1100_1299 - numDrawings1100_1299- numUnknowns1100_1299;
winterCounts.push(winter1100_1299Counts);


// console.log(winter1100_1299Counts)

// all winter objects in 1300-1499
var winter1300_1499 = [];
var winter1300_1499Counts = {};
winter1300_1499Counts.era = '1300_1499'
for (var i = 0; i < winterContent.length; i++) {
    if ((winterContent[i].objectBeginDate) >= 1300 && (winterContent[i].objectBeginDate) < 1500) {
        winter1300_1499.push(winterContent[i]);
        // console.log(winterContent[i].classification)
    }
}


var numSculpture1300_1499 = winter1300_1499.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
winter1300_1499Counts.sculpture = numSculpture1300_1499;

var numPaintings1300_1499 = winter1300_1499.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
winter1300_1499Counts.paintings = numPaintings1300_1499;

var numDrawings1300_1499 = winter1300_1499.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
winter1300_1499Counts.drawings = numDrawings1300_1499;

var numUnknowns1300_1499 = winter1300_1499.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
winter1300_1499Counts.unknown = numUnknowns1300_1499;
winter1300_1499Counts.other = winter1300_1499.length - numSculpture1300_1499 - numPaintings1300_1499 -numDrawings1300_1499 - numUnknowns1300_1499;
winterCounts.push(winter1300_1499Counts);


// console.log(winter1300_1499Counts)

// all winter objects in 1500-1699
var winter1500_1699 = [];
var winter1500_1699Counts = {};
winter1500_1699Counts.era = '1500_1699'
for (var i = 0; i < winterContent.length; i++) {
    if ((winterContent[i].objectBeginDate) >= 1500 && (winterContent[i].objectBeginDate) < 1700) {
        winter1500_1699.push(winterContent[i]);
        // console.log("*******************")
        // console.log(winterContent[i].classification)
    }
}


var numSculpture1500_1699 = winter1500_1699.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
winter1500_1699Counts.sculpture = numSculpture1500_1699;

var numPaintings1500_1699 = winter1500_1699.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
winter1500_1699Counts.paintings = numPaintings1500_1699;

var numDrawings1500_1699 = winter1500_1699.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
winter1500_1699Counts.drawings = numDrawings1500_1699;

var numUnknowns1500_1699 = winter1500_1699.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
winter1500_1699Counts.unknown = numUnknowns1500_1699;
winter1500_1699Counts.other = winter1500_1699.length - numSculpture1500_1699 - numPaintings1500_1699 - numDrawings1500_1699 - numUnknowns1500_1699;
winterCounts.push(winter1500_1699Counts);


// console.log(winter1500_1699Counts)

// all winter objects in 1700-1899
var winter1700_1899 = [];
var winter1700_1899Counts = {};
winter1700_1899Counts.era = '1700_1899'
for (var i = 0; i < winterContent.length; i++) {
    if ((winterContent[i].objectBeginDate) >= 1700 && (winterContent[i].objectBeginDate) < 1899) {
        winter1700_1899.push(winterContent[i]);
        // console.log(winterContent[i].classification)
    }
}


var numSculpture1700_1899 = winter1700_1899.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
winter1700_1899Counts.sculpture = numSculpture1700_1899;

var numPaintings1700_1899 = winter1700_1899.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
winter1700_1899Counts.paintings = numPaintings1700_1899;

var numDrawings1700_1899 = winter1700_1899.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
winter1700_1899Counts.drawings = numDrawings1700_1899;

var numUnknowns1700_1899 = winter1700_1899.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
winter1700_1899Counts.unknown = numUnknowns1700_1899;
winter1700_1899Counts.other = winter1700_1899.length - numSculpture1700_1899 - numDrawings1700_1899 - numPaintings1700_1899 - numUnknowns1700_1899;
winterCounts.push(winter1700_1899Counts);


// console.log(winter1700_1899Counts)

// all winter objects in 1900-present
var winter1900_present = [];
var winter1900_presentCounts = {};
winter1900_presentCounts.era = '1900_present'
for (var i = 0; i < winterContent.length; i++) {
    if ((winterContent[i].objectBeginDate) >= 1900) {
        winter1900_present.push(winterContent[i]);
        // console.log(winterContent[i].classification)
    }
}


var numSculpture1900_present = winter1900_present.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
winter1900_presentCounts.sculpture = numSculpture1900_present;

var numPaintings1900_present = winter1900_present.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
winter1900_presentCounts.paintings = numPaintings1900_present;

var numDrawings1900_present = winter1900_present.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
winter1900_presentCounts.drawings = numDrawings1900_present;

var numUnknowns1900_present = winter1900_present.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
winter1900_presentCounts.unknown = numUnknowns1900_present;
winter1900_presentCounts.other = winter1900_present.length - numSculpture1900_present - numPaintings1900_present - numDrawings1900_present - numUnknowns1900_present;
winterCounts.push(winter1900_presentCounts);


// console.log(winter1900_presentCounts)

console.log(winterCounts)

fs.writeFileSync('./data/winterCounts.json', JSON.stringify(winterCounts));



