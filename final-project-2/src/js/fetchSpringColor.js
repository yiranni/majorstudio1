const ColorThief = require("colorthief");
const fs = require("fs")

var springimg = JSON.parse(fs.readFileSync('../data/springimg.json'))
// console.log(springimg.length)

// var springcolor = JSON.parse(fs.readFileSync('../data/springColorValue.json'))
// console.log(springcolor.length)


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

for (var i = 0; i < springimg.length; i++) {
    let current = fetchColorValue("../img/springimg/", springimg[i]);
}
setTimeout(() => {
    fs.writeFileSync("../data/springColorValue.json", JSON.stringify(colorArray))
}, 55000)