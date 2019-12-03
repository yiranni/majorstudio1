var fs = require('fs');
var rp = require('request-promise');

const searchUrl =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";


  const endpoint_arms = "arms";
  const endpoint_ceramics = "ceramics";
  const endpoint_porcelain = "porcelain";
  const endpoint_painting = "sculpture";
  const endpoint_instrument = "instrument";

  const armsUrl = searchUrl + endpoint_arms;
  const ceramicsUrl = searchUrl + endpoint_ceramics;
  const porcelainUrl = searchUrl + endpoint_porcelain;
  const paintingUrl = searchUrl + endpoint_painting;
  const instrumentUrl = searchUrl + endpoint_instrument;
  

  fetchArmsIds(armsUrl);
  fetchCeramicsIds(ceramicsUrl);
  fetchPorcelainIds(porcelainUrl);
  fetchPaintingIds(paintingUrl);
  fetchInstrumentIds(instrumentUrl);

  function fetchArmsIds(url) {
    var options = {
      method:'GET',
      uri: url,
      headers: {'content-type':'application/json'},
      json:true
    };
    var path = '../data/armsIds.json';
    rp(options)
      .then(function(body){
        fs.writeFileSync(path,JSON.stringify(body))
        console.log("Done")
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  function fetchCeramicsIds(url) {
    var options = {
      method:'GET',
      uri: url,
      headers: {'content-type':'application/json'},
      json:true
    };
    var path = '../data/ceramicsIds.json';
    rp(options)
      .then(function(body){
        fs.writeFileSync(path,JSON.stringify(body))
        console.log("Done")
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  function fetchPorcelainIds(url) {
    var options = {
      method:'GET',
      uri: url,
      headers: {'content-type':'application/json'},
      json:true
    };
    var path = '../data/porcelainIds.json';
    rp(options)
      .then(function(body){
        fs.writeFileSync(path,JSON.stringify(body))
        console.log("Done")
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  function fetchPaintingIds(url) {
    var options = {
      method:'GET',
      uri: url,
      headers: {'content-type':'application/json'},
      json:true
    };
    var path = '../data/paintingIds.json';
    rp(options)
      .then(function(body){
        fs.writeFileSync(path,JSON.stringify(body))
        console.log("Done")
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  function fetchInstrumentIds(url) {
    var options = {
      method:'GET',
      uri: url,
      headers: {'content-type':'application/json'},
      json:true
    };
    var path = '../data/instrumentIds.json';
    rp(options)
      .then(function(body){
        fs.writeFileSync(path,JSON.stringify(body))
        console.log("Done")
      })
      .catch((err)=>{
        console.log(err);
      })
  }