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




// function fetchAutumnObjects(url) {
//     // naive approach, will take lots of memory if you've got a massive dataset
//     var buffer = []
//     var options = {
//         method: 'GET',
//         uri: url,
//         headers: { 'content-type': 'application/json' },
//         json: true
//     };
//     // ???
//     var path = "./data/allAutumn.json"
//     // var path = './data/autumnObjects/' + url.split('objects/').pop() + '.json';
//     rp(options)
//         .then(function (body) {
//             // add body to buffer, 
//             // might bug out due to type matching
//             buffer.push(body)
//             // console.log(body)
//             // console.log('***********BUFFER**********')
//             // console.log(buffer)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     console.log('***********BUFFER**********')
//     console.log(buffer)
//     // write the entire buffer to file
//     fs.writeFileSync(path, JSON.stringify(buffer))
// }


// function fetchAutumnObjects(url) {
//     // naive approach, will take lots of memory if you've got a massive dataset
//     var buffer = []
//     var options = {
//         method: 'GET',
//         uri: url,
//         headers: { 'content-type': 'application/json' },
//         json: true
//     };
//     // ???
//     var path = "./data/autumnObjects/all.json"
//     // var path = './data/autumnObjects/' + url.split('objects/').pop() + '.json';
//     rp(options)
//         .then(function (body) {
//             // add body to `buffer`, 
//             // might bug out due to type matching
//             buffer.push(body)
//             console.log("pushing buffer")
//             console.log(buffer)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     // write the entire buffer to file
//     console.log("resulting buffer")
//     console.log(buffer)
//     fs.writeFileSync(path, JSON.stringify(buffer))
// }

