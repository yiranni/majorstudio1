const fs = require('fs');
const convert = require('color-convert')

const spring = JSON.parse(fs.readFileSync('../data/groupedSpringColorValue.json'));
const summer = JSON.parse(fs.readFileSync('../data/groupedSummerColorValue.json'));
const autumn = JSON.parse(fs.readFileSync('../data/groupedAutumnColorValue.json'));
const winter = JSON.parse(fs.readFileSync('../data/groupedWinterColorValue.json'));
// console.log(spring[1].artworks.length)

function compareColorValue(a, b) {
    // return a.colorValue[0] - b.colorValue[0] || a.colorValue[1] - b.colorValue[1] || a.colorValue[2] - b.colorValue[2];
    return a.colorValue[0] - b.colorValue[0]
    // return a.colorValue[0] - b.colorValue[0] || a.colorValue[2] - b.colorValue[2]

}


// spring
var springHSL = [];
for (var i = 0; i < spring.length; i++) {
    var newObj = {}
    newObj.decades = spring[i].decades;
    newObj.artworks = [];
    var artworks = spring[i].artworks;
    // console.log(artworks)
    for (var j = 0; j < artworks.length; j++) {
        var thisArtwork = {};
        thisArtwork.filename = artworks[j].filename;
        thisArtwork.colorValue = convert.rgb.hsl(artworks[j].colorValue[0], artworks[j].colorValue[1], artworks[j].colorValue[2]);
        newObj.artworks.push(thisArtwork)
    }
    springHSL.push(newObj)
}
// console.log(springHSL[1].artworks)


// console.log(springHSL[3].artworks)
// summer
var summerHSL = [];
for (var i = 0; i < summer.length; i++) {
    var newObj = {}
    newObj.decades = summer[i].decades;
    newObj.artworks = [];
    var artworks = summer[i].artworks;
    // console.log(artworks)
    for (var j = 0; j < artworks.length; j++) {
        var thisArtwork = {};
        thisArtwork.filename = artworks[j].filename;
        thisArtwork.colorValue = convert.rgb.hsl(artworks[j].colorValue[0], artworks[j].colorValue[1], artworks[j].colorValue[2]);
        newObj.artworks.push(thisArtwork)
    }
    summerHSL.push(newObj)
}

// autumn
var autumnHSL = [];
for (var i = 0; i < autumn.length; i++) {
    var newObj = {}
    newObj.decades = autumn[i].decades;
    newObj.artworks = [];
    var artworks = autumn[i].artworks;
    // console.log(artworks)
    for (var j = 0; j < artworks.length; j++) {
        var thisArtwork = {};
        thisArtwork.filename = artworks[j].filename;
        thisArtwork.colorValue = convert.rgb.hsl(artworks[j].colorValue[0], artworks[j].colorValue[1], artworks[j].colorValue[2]);
        newObj.artworks.push(thisArtwork)
    }
    autumnHSL.push(newObj)
}

// winter
var winterHSL = [];
for (var i = 0; i < winter.length; i++) {
    var newObj = {}
    newObj.decades = winter[i].decades;
    newObj.artworks = [];
    var artworks = winter[i].artworks;
    // console.log(artworks)
    for (var j = 0; j < artworks.length; j++) {
        var thisArtwork = {};
        thisArtwork.filename = artworks[j].filename;
        thisArtwork.colorValue = convert.rgb.hsl(artworks[j].colorValue[0], artworks[j].colorValue[1], artworks[j].colorValue[2]);
        newObj.artworks.push(thisArtwork)
    }
    winterHSL.push(newObj)
}

// sort colors based on hue value
let sortedSpringHSL = [];
for (var i = 0; i < springHSL.length; i++) {
    var thisSortedSpring = {};
    thisSortedSpring.decades = springHSL[i].decades;
    thisSortedSpring.artworks = springHSL[i].artworks.sort(compareColorValue);
    sortedSpringHSL.push(thisSortedSpring)
}
let sortedSummerHSL = [];
for (var i = 0; i < summerHSL.length; i++) {
    var thisSortedSummer= {};
    thisSortedSummer.decades = summerHSL[i].decades;
    thisSortedSummer.artworks = summerHSL[i].artworks.sort(compareColorValue);
    sortedSummerHSL.push(thisSortedSummer)
}
let sortedAutumnHSL = [];
for (var i = 0; i < autumnHSL.length; i++) {
    var thisSortedAutumn = {};
    thisSortedAutumn.decades = autumnHSL[i].decades;
    thisSortedAutumn.artworks = autumnHSL[i].artworks.sort(compareColorValue);
    sortedAutumnHSL.push(thisSortedAutumn)
}
let sortedWinterHSL = [];
for (var i = 0; i < winterHSL.length; i++) {
    var thisSortedWinter = {};
    thisSortedWinter.decades = winterHSL[i].decades;
    thisSortedWinter.artworks = winterHSL[i].artworks.sort(compareColorValue);
    sortedWinterHSL.push(thisSortedWinter)
}

fs.writeFileSync('../data/sortedSpringHSL.json', JSON.stringify(sortedSpringHSL));
fs.writeFileSync('../data/sortedSummerHSL.json', JSON.stringify(sortedSummerHSL));
fs.writeFileSync('../data/sortedAutumnHSL.json', JSON.stringify(sortedAutumnHSL));
fs.writeFileSync('../data/sortedWinterHSL.json', JSON.stringify(sortedWinterHSL));