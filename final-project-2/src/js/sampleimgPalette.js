const ColorThief = require("colorthief");
const fs = require("fs")

let img =  fetchColorValue("../img/springimg/", '1899_DT1559.jpg');

// let colorArray = [];
function fetchColorValue(path, filename) {
    let objColor={filename:filename,colorValue:[]};
    ColorThief.getPalette(path + filename)
        .then(
            color => { 
                objColor.colorValue=color;
                console.log(objColor);
                // colorArray.push(objColor);
                // return objColor;
            })
        // .then(color => { colorArray.push(color) })
        .catch(err => { console.log(err) });
}
// console.log(palette)