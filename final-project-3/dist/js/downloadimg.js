let fs = require('fs');

let request = require('request');

// the folder we will write into
let folder = "../img";

//download the image by url, name the file by filename
function downloadImage(uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(encodeURI(uri)) 
            .on('error', function(err) {
                console.log(err)
            } )
            .pipe(fs.createWriteStream(folder + "/" + filename)).on('close', callback);
    });
};

// go through the json we created before
function downloadData() {
    fs.readFile("../data/dimension3.json", "utf8", (err, data) => {
        if (err) console.log(err);

        JSON.parse(data).forEach(e => {
            if (e.img.length > 0) {
                console.log('Downloading ' + e.img.split('/').pop());
                downloadImage(e.img, e.img.split('/').pop(), function () {
                    console.log('Finished Downloading ' + e.img.split('/').pop());
                });
            }
        });

    });
}

downloadData();
