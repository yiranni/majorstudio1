var fs = require('fs'); 
var parse = require('csv-parse');

var csvData=[];
fs.createReadStream('../data/highlightIds.csv')
    // .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        // console.log(csvrow);
        //do something with csvrow
        csvData.push(csvrow);        
    })
    .on('end',function() {
      //do something wiht csvData
    //   console.log(csvData);
    fs.writeFileSync('../data/highlightIds.json', JSON.stringify(csvData))
    });

// let fileInput = '../data/highlightObjects.csv';
// let fileOutput = '../data/highlightObjects.json';

// csvToJson.fieldDelimiter(',') .getJsonFromCsv(fileInput, fileOutput);

// console.dir(output)