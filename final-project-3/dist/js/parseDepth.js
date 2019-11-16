const fs = require('fs');
let data = JSON.parse(fs.readFileSync('../data/dimensions2.json'));

for(var i = 0; i < data.length; i++) {
    var width = data[i].width;
    var height = data[i].height;
    var dimension = data[i].dimensions;
    var depth;
    if(width === null) {
       depth = null
    }else if(width === height) {
        depth = null;
    }else {
        depth = "";
    }
    data[i].depth = depth;
} 

fs.writeFileSync('../data/dimension3.json', JSON.stringify(data))