var request = require('request');
var fs = require('fs');
var rp = require('request-promise');
var async = require('async');

const objectBaseUrl =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/";


var auContent = fs.readFileSync('./data/autumnIds.json');
var auObjId = JSON.parse(auContent);

// console.log(auObjId.objectIDs[0]);\

for(var i = 0; i < auObjId.objectIDs.length; i ++){
    fetchAutumnObjects(objectBaseUrl + auObjId.objectIDs[i])
};
console.log(auObjId.objectIDs.length);

function fetchAutumnObjects(url) {
    var options = {
      method:'GET',
      uri: url,
      headers: {'content-type':'application/json'},
      json:true
    };
    var path = './autumnObjects/' + url.split('objects/').pop() +'.json';
    rp(options)
      .then(function(body){
        fs.writeFileSync(path,JSON.stringify(body))

      })
      .catch((err)=>{
        console.log(err);
      })
  }




