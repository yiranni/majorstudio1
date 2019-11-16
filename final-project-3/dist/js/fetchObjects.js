var request = require('request');
var fs = require('fs');
var rp = require('request-promise');
var async = require('async');

const objectBaseUrl =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/";


var content = fs.readFileSync('../data/clockIds.json');
var objIds = JSON.parse(content);

// console.log(objIds.objectIDs[0]);\

for(var i = 0; i < objIds.objectIDs.length; i ++){
    fetchObjects(objectBaseUrl + objIds.objectIDs[i])
};
console.log(objIds.objectIDs.length);

function fetchObjects(url) {
    var options = {
      method:'GET',
      uri: url,
      headers: {'content-type':'application/json'},
      json:true
    };
    var path = '../data/objects/' + url.split('objects/').pop() +'.json';
    rp(options)
      .then(function(body){
        fs.writeFileSync(path,JSON.stringify(body))

      })
      .catch((err)=>{
        console.log(err);
      })
  }




