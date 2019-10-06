var request = require('request');
var fs = require('fs');
var rp = require('request-promise');
var async = require('async');

/*
{"objectID":10188,"isHighlight":false,
"accessionNumber":"67.155.6",
"isPublicDomain":true,
"primaryImage":"https://images.metmuseum.org/CRDImages/ad/original/DT203437.jpg",
"primaryImageSmall":"https://images.metmuseum.org/CRDImages/ad/web-large/DT203437.jpg","additionalImages":["https://images.metmuseum.org/CRDImages/ad/original/ap67.155.6.jpg","https://images.metmuseum.org/CRDImages/ad/original/APS1552.jpg","https://images.metmuseum.org/CRDImages/ad/original/196659.jpg"],"constituents":[{"role":"Artist","name":"Robert Frederick Blum"}],"department":"The American Wing","objectName":"Drawing","title":"Spring Landscape","culture":"American","period":"","dynasty":"","reign":"","portfolio":"","artistRole":"Artist","artistPrefix":"","artistDisplayName":"Robert Frederick Blum","artistDisplayBio":"American, Cincinnati, Ohio 1857–1903 New York","artistSuffix":"","artistAlphaSort":"Blum, Robert Frederick","artistNationality":"American","artistBeginDate":"1857","artistEndDate":"1903","objectDate":"","objectBeginDate":1857,"objectEndDate":1903,"medium":"Pastel on sandpaper","dimensions":"10 x 12 1/4 in. (25.4 x 31.1 cm)","creditLine":"Bequest of Susan Vanderpoel Clark, 1967","geographyType":"","city":"","state":"","county":"","country":"","region":"","subregion":"","locale":"","locus":"","excavation":"","river":"","classification":"Drawings","rightsAndReproduction":"","linkResource":"","metadataDate":"2019-02-01T10:50:49.477Z","repository":"Metropolitan Museum of Art, New York, NY","objectURL":"https://www.metmuseum.org/art/collection/search/10188","tags":["Landscapes","Trees","Spring"]}
*/

/****************************** */
var allSpringObjects = JSON.parse(fs.readFileSync('../data/allSpringData.json'));
const springPaintings = [];

for(var i = 0; i < allSpringObjects.length; i++) {
    if(allSpringObjects[i].classification == "Paintings" || allSpringObjects[i].classification == "Drawings") {
        springPaintings.push(allSpringObjects[i])
        // springPaintings[i].downloaded = false;
    }
}

/************************************ */
var allSummerObjects = JSON.parse(fs.readFileSync('../data/allSummerData.json'));
const summerPaintings = [];

for(var i = 0; i < allSummerObjects.length; i++) {
    if(allSummerObjects[i].classification == "Paintings" || allSummerObjects[i].classification == "Drawings") {
        summerPaintings.push(allSummerObjects[i])
    }
}

/************************************ */
var allAutumnObjects = JSON.parse(fs.readFileSync('../data/allAutumnData.json'));
const autumnPaintings = [];

for(var i = 0; i < allAutumnObjects.length; i++) {
    if(allAutumnObjects[i].classification == "Paintings" || allAutumnObjects[i].classification == "Drawings") {
        autumnPaintings.push(allAutumnObjects[i])
    }
}

/************************************ */
var allWinterObjects = JSON.parse(fs.readFileSync('../data/allWinterData.json'));
const winterPaintings = [];

for(var i = 0; i < allWinterObjects.length; i++) {
    if(allWinterObjects[i].classification == "Paintings" || allWinterObjects[i].classification == "Drawings") {
        winterPaintings.push(allWinterObjects[i])
    }
}



fs.writeFileSync("../data/springPaintings.json", JSON.stringify(springPaintings))
fs.writeFileSync("../data/summerPaintings.json", JSON.stringify(summerPaintings))
fs.writeFileSync("../data/autumnPaintings.json", JSON.stringify(autumnPaintings))
fs.writeFileSync("../data/winterPaintings.json", JSON.stringify(winterPaintings))

