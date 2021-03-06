let fs = require('fs');

let request = require('request');

// the folder we will write into
let folder = "../img/autumnimg";

//download the image by url, name the file by filename
function downloadImage(uri, filename, callback) {
    // setTimeout(() => {
    request.head(uri, function (err, res, body) {
        request(encodeURI(uri)) 
            .on('error', function(err) {
                console.log(err)
            } )
            .pipe(fs.createWriteStream(folder + "/" + filename)).on('close', callback);
    });
    // }, 1000)
};

// go through the json we created before
function downloadData() {
    fs.readFile("../data/autumnPaintings.json", "utf8", (err, data) => {
        // setTimeout(() => {
        if (err) console.log(err);

        JSON.parse(data).forEach(e => {
            if (e.primaryImage.length > 0) {
                // console.log('Downloading ' + e.primaryImage.split('/').pop());
                downloadImage(e.primaryImageSmall,  e.objectBeginDate+"_"+e.primaryImage.split('/').pop(), function () {
                    console.log('Finished Downloading ' + e.primaryImage.split('/').pop());
                });
            }
        });

    });
}

downloadData();
