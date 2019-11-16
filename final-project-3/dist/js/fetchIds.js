var request = require('request');
var fs = require('fs');
var rp = require('request-promise');

const searchUrl =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";
const objectBaseUrl =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

const endpoint = "clock";
const url = searchUrl + endpoint;


function fetchIds(url) {
    var options = {
        method: 'GET',
        uri: url,
        headers: { 'content-type': 'application/json' },
        json: true
    };
    var path = '../data/clockIds.json';
    rp(options)
        .then(function (body) {
            fs.writeFileSync(path, JSON.stringify(body))
            console.log("Done")
        })
        .catch((err) => {
            console.log(err);
        })
}

fetchIds(url)