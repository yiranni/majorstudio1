const ColorThief = require("colorthief");
const fs = require("fs")

var springimg = JSON.parse(fs.readFileSync('../data/springimg.json'))
// console.log(springimg)

// let springimg = ["740_DP153705.jpg", "1070_DP167812_CRD.jpg", "1075_DP151528.jpg"]

// const img = "740_DP153705.jpg"

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

// console.log("length: "  + colorArray.length)


// fetchColorValue("../img/springimg/", img)
setTimeout(() => {
    fs.writeFileSync("../data/testimgValue.json", JSON.stringify(colorArray))
}, 20000)