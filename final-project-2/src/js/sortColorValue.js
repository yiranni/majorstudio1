const fs = require('fs')

const spring = JSON.parse(fs.readFileSync('../data/groupedSpringColorValue.json'));
const summer = JSON.parse(fs.readFileSync('../data/groupedSummerColorValue.json'));
const autumn = JSON.parse(fs.readFileSync('../data/groupedAutumnColorValue.json'));
const winter = JSON.parse(fs.readFileSync('../data/groupedWinterColorValue.json'));
// const spring0 = spring[0];
// const spring1 = spring[1];
// console.log(spring0)

function compareColorValue(a, b) {
    return a.colorValue[0] - b.colorValue[0] || a.colorValue[1] - b.colorValue[1] || a.colorValue[2] - b.colorValue[2]
}

let sortedSpring = [];
for(var i = 0; i < spring.length; i++) {
     var thisSortedSpring = {};
     thisSortedSpring.decades = spring[i].decades;
    thisSortedSpring.artworks = spring[i].artworks.sort(compareColorValue);
    sortedSpring.push(thisSortedSpring)
}


let sortedSummer = [];
for(var i = 0; i < summer.length; i++) {
     var thisSortedSummer = {};
     thisSortedSummer.decades = summer[i].decades;
    thisSortedSummer.artworks = spring[i].artworks.sort(compareColorValue);
    sortedSummer.push(thisSortedSummer)
}


fs.writeFileSync('../data/sortedSpringColorValue.json', JSON.stringify(sortedSpring));
fs.writeFileSync('../data/sortedSummerColorValue.json', JSON.stringify(sortedSummer))