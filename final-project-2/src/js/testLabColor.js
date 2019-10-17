var rgb = require('color-space/rgb');
var hsl = require('color-space/hsl')
var lab = require('color-space/lab');
var space = require('color-space');

const fs = require('fs');

let spring = JSON.parse(fs.readFileSync('../data/sortedSpringHSL.json'))
// console.table(spring[2].artworks


let springLAB = [];
for (var i = 0; i < spring.length; i++) {
    var newObj = {}
    newObj.decades = spring[i].decades;
    newObj.artworks = [];
    var artworks = spring[i].artworks;
    // console.log(artworks)
    for (var j = 0; j < artworks.length; j++) {
        var thisArtwork = {};
        thisArtwork.filename = artworks[j].filename;
        thisArtwork.colorValue = rgb.lab(artworks[j].colorValue);
        newObj.artworks.push(thisArtwork)
    }
    springLAB.push(newObj)

}

console.table(springLAB[1].artworks)


// var result = rgb.lab([45, 26, 28 ])
// console.log(result)