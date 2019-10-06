const path = require('path');
const fs = require('fs');

// spring

let directorySp = "springObjects";

let filesSp = fs.readdirSync(directorySp);
console.log(filesSp.length)

var allSpringData = [];

for (var i = 0; i < filesSp.length; i++) {
    var data = fs.readFileSync('springObjects/' + filesSp[i]);
    var content = JSON.parse(data);
    // console.log(typeof content);
    allSpringData.push(content);
    
}

// console.log(allSpringData.length);
// console.log(allSpringData)
fs.writeFileSync('data/allSpringData.json', JSON.stringify(allSpringData));


// summer
let directorySu = "summerObjects";

let filesSu = fs.readdirSync(directorySu);

var allSummerData = [];

for (var i = 0; i < filesSu.length; i++) {
    var data = fs.readFileSync('summerObjects/' + filesSu[i]);
    var content = JSON.parse(data);
    // console.log(typeof content);
    allSummerData.push(content);
    
}

console.log(allSummerData.length);
// console.log(allSpringData)
fs.writeFileSync('data/allSummerData.json', JSON.stringify(allSummerData));



// autumn
let directoryAu = "autumnObjects";

let filesAu = fs.readdirSync(directoryAu);

var allAutumnData = []
for (var i = 0; i < filesAu.length; i++) {
    var data = fs.readFileSync('autumnObjects/' + filesAu[i]);
    var content = JSON.parse(data);
    // console.log(typeof content);
    allAutumnData.push(content);
    
}
console.log(allAutumnData.length);

fs.writeFileSync('data/allAutumnnData.json', JSON.stringify(allAutumnData));




// // winter
let directoryWi = "winterObjects";

let filesWi = fs.readdirSync(directoryWi);
console.log(filesWi.length)

var allWinterData = [];

for (var i = 0; i < filesWi.length; i++) {
    var data = fs.readFileSync('winterObjects/' + filesWi[i]);
    var content = JSON.parse(data);
    // console.log(typeof content);
    allWinterData.push(content);
    
}

fs.writeFileSync('data/allWinterData.json', JSON.stringify(allWinterData));
