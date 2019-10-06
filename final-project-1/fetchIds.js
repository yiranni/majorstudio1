var request = require('request'); 
var fs = require('fs');
var rp = require('request-promise');

const searchUrl =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";
const objectBaseUrl =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/";
  
const endpooint_sp = "spring";
const endpooint_su = "summer";
const endpooint_au = "autumn";
const endpooint_wi = "winter";

const springUrl = searchUrl + endpooint_sp;
const summerUrl = searchUrl + endpooint_su;
const autumnUrl = searchUrl + endpooint_au;
const winterUrl = searchUrl + endpooint_wi;

// var windowVar = 

fetchSpringIds(springUrl);
fetchSummerIds(summerUrl);
fetchAutumnIds(autumnUrl);
fetchWinterIds(winterUrl);


function fetchSpringIds(url) {
  var options = {
    method:'GET',
    uri: url,
    headers: {'content-type':'application/json'},
    json:true
  };
  var path = './data/springIds.json';
  rp(options)
    .then(function(body){
      fs.writeFileSync(path,JSON.stringify(body))
      console.log("Done")
    })
    .catch((err)=>{
      console.log(err);
    })
}



function fetchSummerIds(url) {
  var options = {
    method:'GET',
    uri: url,
    headers: {'content-type':'application/json'},
    json:true
  };
  var path = './data/summerIds.json';
  rp(options)
    .then(function(body){
      fs.writeFileSync(path,JSON.stringify(body))
      console.log("Done")
    })
    .catch((err)=>{
      console.log(err);
    })
}


function fetchAutumnIds(url) {
  var options = {
    method:'GET',
    uri: url,
    headers: {'content-type':'application/json'},
    json:true
  };
  var path = './data/autumnIds.json';
  rp(options)
    .then(function(body){
      fs.writeFileSync(path,JSON.stringify(body))
      console.log("Done")
    })
    .catch((err)=>{
      console.log(err);
    })
}


function fetchWinterIds(url) {
  var options = {
    method:'GET',
    uri: url,
    headers: {'content-type':'application/json'},
    json:true
  };
  var path = './data/winterIds.json';
  rp(options)
    .then(function(body){
      fs.writeFileSync(path,JSON.stringify(body))
      console.log("Done")
    })
    .catch((err)=>{
      console.log(err);
    })
}
/*
function fetchObjects(data) {
  let objectIDs = data.objectIDs.slice(1,10);
  console.log("fetching: " + objectIDs.length + " objects");
  objectIDs.forEach(function(n) {
    // console.log(objectBaseUrl + n);
    let objUrl = objectBaseUrl + n;
    request
      .get(objUrl)
      .on('error', function(err) {
        console.log(err)
      })
      // .then(data => data.json())
      .pipe(
        // data => {
        // console.log(data);
        
        fs.writeFileSync('./data/'+data['objectID']+'.json',JSON.stringify(addObject(data)))
        // console.log(data['objectID']+" downloaded")
        // addObject(data);
      );
  });
  
}


function addObject(objectData) {
  // var currentID = objectData.objectID;
  // var currentTitle = objectData.title;
  // var currentDate = objectData.objectBeginDate;
  // var imgUrl = objectData.primaryImage;
  // var artistName = objectData.artistDisplayName;
  // var index = myArray.length;
  
  // myArray[index] = {};
  // myArray[index]["objectID"] = currentID;
  // myArray[index]["title"] = currentTitle;
  // myArray[index]["artist"] = artistName;
  // myArray[index]["date"] = currentDate;
  // myArray[index]["image"] = imgUrl;

  var myObj= {"objectID":objectData.objectID,
              "title": objectData.title,
              "artist": objectData.artistName,
              "date": objectData.objectBeginDate,
              "image": objectData.primaryImage};
  return myObj;
  // console.log("object at index", index, myArray[index]);
  
  // var objInfo = document.getElementById('objInfo')
  // var element = document.createElement('div');
  // element.textContent ="title: " + currentTitle + ", artist: " + artistName;
  // objInfo.appendChild(element);
}

*/


