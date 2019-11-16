const path = require('path');
const fs = require('fs');

let directory = "../data/objects";

let files = fs.readdirSync(directory);
console.log(files.length)

var allData = [];

for (var i = 0; i < files.length; i++) {
    var data = fs.readFileSync(directory + '/' + files[i]);
    var content = JSON.parse(data);
    let obj = {};
    obj.objectID = content.objectID;
    obj.classification = content.classification;
    obj.title = content.title;
    obj.artist = content.artistDisplayName;
    obj.endDate = content.objectEndDate;
    obj.img = content.primaryImageSmall;
    obj.dimensions = content.dimensions;

    // obj.maker = content.maker
    // console.log(obj.tags)
     var title = obj.title;
    var classification = obj.classification;
    if (
        classification.toLowerCase().includes("drawings") ||
        classification.toLowerCase().includes("paintings") ||
        classification.toLowerCase().includes("textiles") ||
        classification.includes("Metalwork-Gilt Bronze") ||
        classification.includes("Natural Substances-Leatherwork") ||
        classification.includes("Metalwork") ||
        classification.includes("Sculpture-Bronze") ||
        classification.includes("Sculpture") ||
        classification.includes("Woodwork") ||
        classification.includes("Photographs") ||
        classification.includes("Firearms") ||
        classification.includes("Screens") ||
        classification.includes("Ceramics-Porcelain") ||
        classification.includes("Prints") ||
        title.includes("Clock hand")

    ) {
        i++
    }
    else {
        // if (obj.dimensions.toLowerCase().includes("overall")) {
            allData.push(obj)
        // }
    }


}

// console.log(allData.length);
// console.table(allData)
fs.writeFileSync('../data/allClocks.json', JSON.stringify(allData));