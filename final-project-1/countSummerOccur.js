const fs = require('fs');
const _ = require('underscore');

let summerData = fs.readFileSync('data/allSummerData.json');

var summerContent = JSON.parse(summerData);

// console.log(typeof summerContent);

// console.log(summerContent[0]);

var summerCounts = [];
// all summer objects in 500-699
var summer500_600 = [];
var summer500_600Counts = {};
summer500_600Counts.era = '500-699'
for (var i = 0; i < summerContent.length; i++) {
    if ((summerContent[i].objectBeginDate) >= 500 && (summerContent[i].objectBeginDate) < 700) {
        summer500_600.push(summerContent[i]);
        // console.log(summerContent[i].classification)
    }
}


var numSculpture500_600 = summer500_600.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
summer500_600Counts.sculpture = numSculpture500_600;

var numPaintings500_600 = summer500_600.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings") + (artwork.classification == "Drawings");
}, 0);
summer500_600Counts.paintings = numPaintings500_600;

var numDrawings500_600 = summer500_600.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
summer500_600Counts.drawings = numDrawings500_600;

var numUnknowns500_600 = summer500_600.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
summer500_600Counts.unknown = numUnknowns500_600;
summer500_600Counts.other = summer500_600.length - numSculpture500_600 - numPaintings500_600 - numDrawings500_600 - numUnknowns500_600;
summerCounts.push(summer500_600Counts);


// console.log(summer500_600Counts)

// all summer objects in 700-899
var summer700_899 = [];
var summer700_899Counts = {};
summer700_899Counts.era = '700-899'
for (var i = 0; i < summerContent.length; i++) {
    if ((summerContent[i].objectBeginDate) >= 700 && (summerContent[i].objectBeginDate) < 900) {
        summer700_899.push(summerContent[i]);
        // console.log(summerContent[i].classification)
    }
}


var numSculpture700_899 = summer700_899.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
summer700_899Counts.sculpture = numSculpture700_899;

var numPaintings700_899 = summer700_899.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
summer700_899Counts.paintings = numPaintings700_899;

var numDrawings700_899 = summer700_899.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
summer700_899Counts.drawings = numDrawings700_899;

var numUnknowns700_899 = summer700_899.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
summer700_899Counts.unknown = numUnknowns700_899;
summer700_899Counts.other = summer700_899.length - numSculpture700_899 - numPaintings700_899 - numDrawings700_899 - numUnknowns700_899;
summerCounts.push(summer700_899Counts);


// console.log(summer700_899Counts)

// all summer objects in 900-1099
var summer900_1099 = [];
var summer900_1099Counts = {};
summer900_1099Counts.era = '900_1099'
for (var i = 0; i < summerContent.length; i++) {
    if ((summerContent[i].objectBeginDate) >= 900 && (summerContent[i].objectBeginDate) < 1100) {
        summer900_1099.push(summerContent[i]);
        // console.log(summerContent[i].classification)
    }
}


var numSculpture900_1099 = summer900_1099.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
summer900_1099Counts.sculpture = numSculpture900_1099;

var numPaintings900_1099 = summer900_1099.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
summer900_1099Counts.paintings = numPaintings900_1099;

var numDrawings900_1099 = summer900_1099.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
summer900_1099Counts.drawings = numDrawings900_1099;

var numUnknowns900_1099 = summer900_1099.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
summer900_1099Counts.unknown = numUnknowns900_1099;
summer900_1099Counts.other = summer900_1099.length - numSculpture900_1099 - numPaintings900_1099 - numDrawings900_1099 - numUnknowns900_1099;
summerCounts.push(summer900_1099Counts);


// console.log(summer900_1099Counts)

// all summer objects in 1100-1299
var summer1100_1299 = [];
var summer1100_1299Counts = {};
summer1100_1299Counts.era = '1100_1299'
for (var i = 0; i < summerContent.length; i++) {
    if ((summerContent[i].objectBeginDate) >= 1100 && (summerContent[i].objectBeginDate) < 1300) {
        summer1100_1299.push(summerContent[i]);
        // console.log(summerContent[i].classification)
    }
}


var numSculpture1100_1299 = summer1100_1299.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
summer1100_1299Counts.sculpture = numSculpture1100_1299;

var numPaintings1100_1299 = summer1100_1299.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
summer1100_1299Counts.paintings = numPaintings1100_1299;

var numDrawings1100_1299 = summer1100_1299.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
summer1100_1299Counts.drawings = numDrawings1100_1299;

var numUnknowns1100_1299 = summer1100_1299.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
summer1100_1299Counts.unknown = numUnknowns1100_1299;
summer1100_1299Counts.other = summer1100_1299.length - numSculpture1100_1299 - numPaintings1100_1299 - numDrawings1100_1299- numUnknowns1100_1299;
summerCounts.push(summer1100_1299Counts);


// console.log(summer1100_1299Counts)

// all summer objects in 1300-1499
var summer1300_1499 = [];
var summer1300_1499Counts = {};
summer1300_1499Counts.era = '1300_1499'
for (var i = 0; i < summerContent.length; i++) {
    if ((summerContent[i].objectBeginDate) >= 1300 && (summerContent[i].objectBeginDate) < 1500) {
        summer1300_1499.push(summerContent[i]);
        // console.log(summerContent[i].classification)
    }
}


var numSculpture1300_1499 = summer1300_1499.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
summer1300_1499Counts.sculpture = numSculpture1300_1499;

var numPaintings1300_1499 = summer1300_1499.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
summer1300_1499Counts.paintings = numPaintings1300_1499;

var numDrawings1300_1499 = summer1300_1499.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
summer1300_1499Counts.drawings = numDrawings1300_1499;

var numUnknowns1300_1499 = summer1300_1499.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
summer1300_1499Counts.unknown = numUnknowns1300_1499;
summer1300_1499Counts.other = summer1300_1499.length - numSculpture1300_1499 - numPaintings1300_1499 -numDrawings1300_1499 - numUnknowns1300_1499;
summerCounts.push(summer1300_1499Counts);


// console.log(summer1300_1499Counts)

// all summer objects in 1500-1699
var summer1500_1699 = [];
var summer1500_1699Counts = {};
summer1500_1699Counts.era = '1500_1699'
for (var i = 0; i < summerContent.length; i++) {
    if ((summerContent[i].objectBeginDate) >= 1500 && (summerContent[i].objectBeginDate) < 1700) {
        summer1500_1699.push(summerContent[i]);
        // console.log("*******************")
        // console.log(summerContent[i].classification)
    }
}


var numSculpture1500_1699 = summer1500_1699.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
summer1500_1699Counts.sculpture = numSculpture1500_1699;

var numPaintings1500_1699 = summer1500_1699.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
summer1500_1699Counts.paintings = numPaintings1500_1699;

var numDrawings1500_1699 = summer1500_1699.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
summer1500_1699Counts.drawings = numDrawings1500_1699;

var numUnknowns1500_1699 = summer1500_1699.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
summer1500_1699Counts.unknown = numUnknowns1500_1699;
summer1500_1699Counts.other = summer1500_1699.length - numSculpture1500_1699 - numPaintings1500_1699 - numDrawings1500_1699 - numUnknowns1500_1699;
summerCounts.push(summer1500_1699Counts);


// console.log(summer1500_1699Counts)

// all summer objects in 1700-1899
var summer1700_1899 = [];
var summer1700_1899Counts = {};
summer1700_1899Counts.era = '1700_1899'
for (var i = 0; i < summerContent.length; i++) {
    if ((summerContent[i].objectBeginDate) >= 1700 && (summerContent[i].objectBeginDate) < 1899) {
        summer1700_1899.push(summerContent[i]);
        // console.log(summerContent[i].classification)
    }
}


var numSculpture1700_1899 = summer1700_1899.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
summer1700_1899Counts.sculpture = numSculpture1700_1899;

var numPaintings1700_1899 = summer1700_1899.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
summer1700_1899Counts.paintings = numPaintings1700_1899;

var numDrawings1700_1899 = summer1700_1899.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
summer1700_1899Counts.drawings = numDrawings1700_1899;

var numUnknowns1700_1899 = summer1700_1899.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
summer1700_1899Counts.unknown = numUnknowns1700_1899;
summer1700_1899Counts.other = summer1700_1899.length - numSculpture1700_1899 - numDrawings1700_1899 - numPaintings1700_1899 - numUnknowns1700_1899;
summerCounts.push(summer1700_1899Counts);


// console.log(summer1700_1899Counts)

// all summer objects in 1900-present
var summer1900_present = [];
var summer1900_presentCounts = {};
summer1900_presentCounts.era = '1900_present'
for (var i = 0; i < summerContent.length; i++) {
    if ((summerContent[i].objectBeginDate) >= 1900) {
        summer1900_present.push(summerContent[i]);
        // console.log(summerContent[i].classification)
    }
}


var numSculpture1900_present = summer1900_present.reduce(function (n, artwork) {
    return n + (artwork.classification == "Sculpture");
}, 0);
summer1900_presentCounts.sculpture = numSculpture1900_present;

var numPaintings1900_present = summer1900_present.reduce(function (n, artwork) {
    return n + (artwork.classification == "Paintings");
}, 0);
summer1900_presentCounts.paintings = numPaintings1900_present;

var numDrawings1900_present = summer1900_present.reduce(function (n, artwork) {
    return n +  (artwork.classification == "Drawings");
}, 0);
summer1900_presentCounts.drawings = numDrawings1900_present;

var numUnknowns1900_present = summer1900_present.reduce(function (n, artwork) {
    return n + (artwork.classification == "");
}, 0)
summer1900_presentCounts.unknown = numUnknowns1900_present;
summer1900_presentCounts.other = summer1900_present.length - numSculpture1900_present - numPaintings1900_present - numDrawings1900_present - numUnknowns1900_present;
summerCounts.push(summer1900_presentCounts);


// console.log(summer1900_presentCounts)

console.log(summerCounts)

fs.writeFileSync('./data/summerCounts.json', JSON.stringify(summerCounts));



