const ColorThief = require("colorthief");
const fs = require("fs")

var img = JSON.parse(fs.readFileSync('../data/summerimg.json'))
// console.log(img.length)

// var color = JSON.parse(fs.readFileSync('../data/summerColorValue.json'))
// console.log(color.length)


let colorArray = [];

function fetchColorValue(path, filename) {
    let objColor={filename:filename,colorValue:[]};
    ColorThief.getColor(path + filename)
        .then(
            color => { 
                objColor.colorValue=color;
                console.log(objColor);
                colorArray.push(objColor);
                return objColor;
            })
        // .then(color => { colorArray.push(color) })
        .catch(err => { console.log(err) });
}

// Promise.all(springimg).then(function(values) {
//     fetchColorValue("../img/springimg/", values)
// })

for (var i = 0; i < img.length; i++) {
    let current = fetchColorValue("../img/summerimg/", img[i]);
}
setTimeout(() => {
    fs.writeFileSync("../data/summerColorValue.json", JSON.stringify(colorArray))
}, 60000)