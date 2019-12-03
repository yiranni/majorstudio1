const path = require('path');
const fs = require('fs');

// spring

let directory = "../data/highlight";

let files = fs.readdirSync(directory);
console.log(files.length);

let allData = [];

for (var i = 0; i < files.length; i++) {
    var data = fs.readFileSync('../data/highlight/' + files[i]);
    var content = JSON.parse(data);
    // console.log(typeof content);
    allData.push(content);
    
}

fs.writeFileSync('../data/allHighlights.json', JSON.stringify(allData))