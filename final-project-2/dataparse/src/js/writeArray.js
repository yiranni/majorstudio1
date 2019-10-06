const springFolder = '../img/springimg';
const summerFolder = '../img/summerimg';
const autumnFolder = '../img/autumnimg';
const winterFolder = '../img/winterimg';

const fs = require('fs');

var springimgArray = [];
fs.readdirSync(springFolder).forEach(file => {
  springimgArray.push(file);
});

springimgArray.sort(sortNumber);


var summerimgArray = [];
fs.readdirSync(summerFolder).forEach(file => {
  summerimgArray.push(file);
});
summerimgArray.sort(sortNumber);


var autumnimgArray = [];
fs.readdirSync(autumnFolder).forEach(file => {
  autumnimgArray.push(file);
});
autumnimgArray.sort(sortNumber);

var winterimgArray = [];
fs.readdirSync(winterFolder).forEach(file => {
  winterimgArray.push(file);
});
winterimgArray.sort(sortNumber);


function sortNumber(a, b) {
  return Number(a.substr(0, a.indexOf('_'))) -  Number(b.substr(0, b.indexOf('_')));
}
// console.log(springimgArray.length);
// console.log(summerimgArray.length);
// console.log(autumnimgArray.length);
// console.log(winterimgArray.length);

fs.writeFileSync("../data/springimg.json", JSON.stringify(springimgArray));
fs.writeFileSync("../data/summerimg.json", JSON.stringify(summerimgArray));
fs.writeFileSync("../data/autumnimg.json", JSON.stringify(autumnimgArray));
fs.writeFileSync("../data/winterimg.json", JSON.stringify(winterimgArray));
