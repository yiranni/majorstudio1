var request = require('request');
var fs = require('fs');
var rp = require('request-promise');
var async = require('async');

const objectBaseUrl =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/";


var content = fs.readFileSync('../data/highlightIds.json');
var objId = JSON.parse(content);

// console.log(typeof parseInt(objId[0].ObjectID));

for(var i = 0; i < objId.length; i ++){
    fetchObjects(objectBaseUrl + objId[i].ObjectID)
    // console.log(objectBaseUrl + objId[i].ObjectID)
};

// fetchObjects(objectBaseUrl + "200")
function fetchObjects(url) {
    var options = {
      method:'GET',
      uri: url,
      headers: {'content-type':'application/json'},
      json:true
    };
    var path = '../data/highlight/' + url.split('objects/').pop() +'.json';
    rp(options)
      .then(function(body){
        fs.writeFileSync(path,JSON.stringify(body))

      })
      .catch((err)=>{
        console.log(err);
      })
  }