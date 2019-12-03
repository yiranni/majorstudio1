var fs = require('fs');

let allData = JSON.parse(fs.readFileSync('../data/allHighlights.json'));

// console.log(allData[1].primaryImageSmall.length)
let imageData =[]
for(var i = 0; i < allData.length; i++) {
    if(allData[i].primaryImageSmall.length > 0) {
        imageData.push(allData[i])
        
    }
}

console.log(imageData.length)

fs.writeFileSync('../data/highlightsWithImage.json', JSON.stringify(imageData))