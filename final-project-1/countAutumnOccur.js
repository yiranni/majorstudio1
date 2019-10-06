const fs = require('fs');
const _ = require('underscore');

let autumnData = fs.readFileSync('data/allAutumnnData.json');

var autumnContent = JSON.parse(autumnData);

// console.log(typeof autumnContent);

// console.log(autumnContent[0]);

var autumnCounts = [];
// all autumn objects in 500-699
var autumn500_600 = [];
var autumn500_600Counts = {};
autumn500_600Counts.era = '500-699'
for (var i = 0; i < autumnContent.length; i++) {
    if ((autumnContent[i].objectBeginDate) >= 500 && (autumnContent[i].objectBeginDate) < 700) {
        autumn500_600.push(autumnContent[i]);
        // console.log(autumnContent[i].classification)
    }
}


var numSculpture500_600 = autumn500_600.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
autumn500_600Counts.sculpture = numSculpture500_600;

var numPaintings500_600 = autumn500_600.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings") + (artwork.classification == "Drawings");
}, 0);
autumn500_600Counts.paintings = numPaintings500_600;

var numDrawings500_600 = autumn500_600.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
autumn500_600Counts.drawings = numDrawings500_600;

var numUnknowns500_600 = autumn500_600.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
autumn500_600Counts.unknown = numUnknowns500_600;
autumn500_600Counts.other = autumn500_600.length - numSculpture500_600 - numPaintings500_600 - numDrawings500_600 - numUnknowns500_600;
autumnCounts.push(autumn500_600Counts);


// console.log(autumn500_600Counts)

// all autumn objects in 700-899
var autumn700_899 = [];
var autumn700_899Counts = {};
autumn700_899Counts.era = '700-899'
for (var i = 0; i < autumnContent.length; i++) {
    if ((autumnContent[i].objectBeginDate) >= 700 && (autumnContent[i].objectBeginDate) < 900) {
        autumn700_899.push(autumnContent[i]);
        // console.log(autumnContent[i].classification)
    }
}


var numSculpture700_899 = autumn700_899.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
autumn700_899Counts.sculpture = numSculpture700_899;

var numPaintings700_899 = autumn700_899.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
autumn700_899Counts.paintings = numPaintings700_899;

var numDrawings700_899 = autumn700_899.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
autumn700_899Counts.drawings = numDrawings700_899;

var numUnknowns700_899 = autumn700_899.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
autumn700_899Counts.unknown = numUnknowns700_899;
autumn700_899Counts.other = autumn700_899.length - numSculpture700_899 - numPaintings700_899 - numDrawings700_899 - numUnknowns700_899;
autumnCounts.push(autumn700_899Counts);


// console.log(autumn700_899Counts)

// all autumn objects in 900-1099
var autumn900_1099 = [];
var autumn900_1099Counts = {};
autumn900_1099Counts.era = '900_1099'
for (var i = 0; i < autumnContent.length; i++) {
    if ((autumnContent[i].objectBeginDate) >= 900 && (autumnContent[i].objectBeginDate) < 1100) {
        autumn900_1099.push(autumnContent[i]);
        // console.log(autumnContent[i].classification)
    }
}


var numSculpture900_1099 = autumn900_1099.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
autumn900_1099Counts.sculpture = numSculpture900_1099;

var numPaintings900_1099 = autumn900_1099.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
autumn900_1099Counts.paintings = numPaintings900_1099;

var numDrawings900_1099 = autumn900_1099.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
autumn900_1099Counts.drawings = numDrawings900_1099;

var numUnknowns900_1099 = autumn900_1099.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
autumn900_1099Counts.unknown = numUnknowns900_1099;
autumn900_1099Counts.other = autumn900_1099.length - numSculpture900_1099 - numPaintings900_1099 - numDrawings900_1099 - numUnknowns900_1099;
autumnCounts.push(autumn900_1099Counts);


// console.log(autumn900_1099Counts)

// all autumn objects in 1100-1299
var autumn1100_1299 = [];
var autumn1100_1299Counts = {};
autumn1100_1299Counts.era = '1100_1299'
for (var i = 0; i < autumnContent.length; i++) {
    if ((autumnContent[i].objectBeginDate) >= 1100 && (autumnContent[i].objectBeginDate) < 1300) {
        autumn1100_1299.push(autumnContent[i]);
        // console.log(autumnContent[i].classification)
    }
}


var numSculpture1100_1299 = autumn1100_1299.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
autumn1100_1299Counts.sculpture = numSculpture1100_1299;

var numPaintings1100_1299 = autumn1100_1299.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
autumn1100_1299Counts.paintings = numPaintings1100_1299;

var numDrawings1100_1299 = autumn1100_1299.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
autumn1100_1299Counts.drawings = numDrawings1100_1299;

var numUnknowns1100_1299 = autumn1100_1299.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
autumn1100_1299Counts.unknown = numUnknowns1100_1299;
autumn1100_1299Counts.other = autumn1100_1299.length - numSculpture1100_1299 - numPaintings1100_1299 - numDrawings1100_1299- numUnknowns1100_1299;
autumnCounts.push(autumn1100_1299Counts);


// console.log(autumn1100_1299Counts)

// all autumn objects in 1300-1499
var autumn1300_1499 = [];
var autumn1300_1499Counts = {};
autumn1300_1499Counts.era = '1300_1499'
for (var i = 0; i < autumnContent.length; i++) {
    if ((autumnContent[i].objectBeginDate) >= 1300 && (autumnContent[i].objectBeginDate) < 1500) {
        autumn1300_1499.push(autumnContent[i]);
        // console.log(autumnContent[i].classification)
    }
}


var numSculpture1300_1499 = autumn1300_1499.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
autumn1300_1499Counts.sculpture = numSculpture1300_1499;

var numPaintings1300_1499 = autumn1300_1499.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
autumn1300_1499Counts.paintings = numPaintings1300_1499;

var numDrawings1300_1499 = autumn1300_1499.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
autumn1300_1499Counts.drawings = numDrawings1300_1499;

var numUnknowns1300_1499 = autumn1300_1499.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
autumn1300_1499Counts.unknown = numUnknowns1300_1499;
autumn1300_1499Counts.other = autumn1300_1499.length - numSculpture1300_1499 - numPaintings1300_1499 -numDrawings1300_1499 - numUnknowns1300_1499;
autumnCounts.push(autumn1300_1499Counts);


// console.log(autumn1300_1499Counts)

// all autumn objects in 1500-1699
var autumn1500_1699 = [];
var autumn1500_1699Counts = {};
autumn1500_1699Counts.era = '1500_1699'
for (var i = 0; i < autumnContent.length; i++) {
    if ((autumnContent[i].objectBeginDate) >= 1500 && (autumnContent[i].objectBeginDate) < 1700) {
        autumn1500_1699.push(autumnContent[i]);
        // console.log("*******************")
        // console.log(autumnContent[i].classification)
    }
}


var numSculpture1500_1699 = autumn1500_1699.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
autumn1500_1699Counts.sculpture = numSculpture1500_1699;

var numPaintings1500_1699 = autumn1500_1699.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
autumn1500_1699Counts.paintings = numPaintings1500_1699;

var numDrawings1500_1699 = autumn1500_1699.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
autumn1500_1699Counts.drawings = numDrawings1500_1699;

var numUnknowns1500_1699 = autumn1500_1699.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
autumn1500_1699Counts.unknown = numUnknowns1500_1699;
autumn1500_1699Counts.other = autumn1500_1699.length - numSculpture1500_1699 - numPaintings1500_1699 - numDrawings1500_1699 - numUnknowns1500_1699;
autumnCounts.push(autumn1500_1699Counts);


// console.log(autumn1500_1699Counts)

// all autumn objects in 1700-1899
var autumn1700_1899 = [];
var autumn1700_1899Counts = {};
autumn1700_1899Counts.era = '1700_1899'
for (var i = 0; i < autumnContent.length; i++) {
    if ((autumnContent[i].objectBeginDate) >= 1700 && (autumnContent[i].objectBeginDate) < 1899) {
        autumn1700_1899.push(autumnContent[i]);
        // console.log(autumnContent[i].classification)
    }
}


var numSculpture1700_1899 = autumn1700_1899.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
autumn1700_1899Counts.sculpture = numSculpture1700_1899;

var numPaintings1700_1899 = autumn1700_1899.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
autumn1700_1899Counts.paintings = numPaintings1700_1899;

var numDrawings1700_1899 = autumn1700_1899.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
autumn1700_1899Counts.drawings = numDrawings1700_1899;

var numUnknowns1700_1899 = autumn1700_1899.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
autumn1700_1899Counts.unknown = numUnknowns1700_1899;
autumn1700_1899Counts.other = autumn1700_1899.length - numSculpture1700_1899 - numDrawings1700_1899 - numPaintings1700_1899 - numUnknowns1700_1899;
autumnCounts.push(autumn1700_1899Counts);


// console.log(autumn1700_1899Counts)

// all autumn objects in 1900-present
var autumn1900_present = [];
var autumn1900_presentCounts = {};
autumn1900_presentCounts.era = '1900_present'
for (var i = 0; i < autumnContent.length; i++) {
    if ((autumnContent[i].objectBeginDate) >= 1900) {
        autumn1900_present.push(autumnContent[i]);
        // console.log(autumnContent[i].classification)
    }
}


var numSculpture1900_present = autumn1900_present.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
autumn1900_presentCounts.sculpture = numSculpture1900_present;

var numPaintings1900_present = autumn1900_present.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
autumn1900_presentCounts.paintings = numPaintings1900_present;

var numDrawings1900_present = autumn1900_present.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
autumn1900_presentCounts.drawings = numDrawings1900_present;

var numUnknowns1900_present = autumn1900_present.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
autumn1900_presentCounts.unknown = numUnknowns1900_present;
autumn1900_presentCounts.other = autumn1900_present.length - numSculpture1900_present - numPaintings1900_present - numDrawings1900_present - numUnknowns1900_present;
autumnCounts.push(autumn1900_presentCounts);


// console.log(autumn1900_presentCounts)

console.log(autumnCounts)

fs.writeFileSync('./data/autumnCounts.json', JSON.stringify(autumnCounts));



