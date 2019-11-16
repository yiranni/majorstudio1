const fs = require('fs');
let data = JSON.parse(fs.readFileSync('../data/allClocks.json'));

// console.log(data.length)

for(var i = 0; i < data.length; i++) {
    var dimension = data[i].dimensions;
    var regexCm = /(?<=\(\s?)(\d*\.?\d*)([^\s?cm])/g;
    // console.log(regexCm)
    var foundCm = dimension.match(regexCm);
    console.log(foundCm)
    if(foundCm) {
        foundCm = foundCm[0];
        if(foundCm[0].match(/[a-zA-Z]+/)) {
            foundCm = foundCm[1];
            // console.log(foundCm)
        }
        foundCm = parseFloat(foundCm);
        // console.log(foundCm)
        
    } 
    foundCm = parseFloat(foundCm);
    data[i].height = foundCm;
    
}


// fs.writeFileSync('../data/dimensions1.json', JSON.stringify(data))