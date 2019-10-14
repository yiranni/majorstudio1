const fs = require('fs')
const springColor = JSON.parse(fs.readFileSync('../data/springColorValue.json'));
const summerColor = JSON.parse(fs.readFileSync('../data/summerColorValue.json'));
const autumnColor = JSON.parse(fs.readFileSync('../data/autumnColorValue.json'));
const winterColor = JSON.parse(fs.readFileSync('../data/winterColorValue.json'));

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    return Number(a.filename.substr(0, a.filename.indexOf('_'))) - Number(b.filename.substr(0, b.filename.indexOf('_')));
}

var sortedSpringColor = springColor.sort(compare);
var sortedSummerColor = summerColor.sort(compare);
var sortedAutumnColor = autumnColor.sort(compare);
var sortedWinterColor = winterColor.sort(compare);

var groupedSpring = [{ decades: "before1000", artworks: [] },
{ decades: "1000-1199", artworks: [] },
{ decades: "1200-1399", artworks: [] },
{ decades: "1400-1599", artworks: [] },
{ decades: "1600-1799", artworks: [] },
{ decades: "1800-present", artworks: [] }];

var groupedSummer = [{ decades: "before1000", artworks: [] },
{ decades: "1000-1199", artworks: [] },
{ decades: "1200-1399", artworks: [] },
{ decades: "1400-1599", artworks: [] },
{ decades: "1600-1799", artworks: [] },
{ decades: "1800-present", artworks: [] }];

var groupedAutumn = [{ decades: "before1000", artworks: [] },
{ decades: "1000-1199", artworks: [] },
{ decades: "1200-1399", artworks: [] },
{ decades: "1400-1599", artworks: [] },
{ decades: "1600-1799", artworks: [] },
{ decades: "1800-present", artworks: [] }];

var groupedWinter = [{ decades: "before1000", artworks: [] },
{ decades: "1000-1199", artworks: [] },
{ decades: "1200-1399", artworks: [] },
{ decades: "1400-1599", artworks: [] },
{ decades: "1600-1799", artworks: [] },
{ decades: "1800-present", artworks: [] }];

function groupColor(seasonColor, output, path) {
    var thisArray = seasonColor;
    for (var i = 0; i < thisArray.length; i++) {
        var year = Number(thisArray[i].filename.substr(0, thisArray[i].filename.indexOf('_')));
        var obj = thisArray[i]
        // console.table(year)
        if (year < 1000) {
            output[0].artworks.push(obj);
        } else if (year >= 1000 && year < 1200) {
            output[1].artworks.push(obj)
        } else if (year >= 1200 && year < 1400) {
            output[2].artworks.push(obj)
        } else if (year >= 1400 && year < 1600) {
            output[3].artworks.push(obj)
        } else if (year >= 1600 && year < 1800) {
            output[4].artworks.push(obj)
        } else {
            output[5].artworks.push(obj)
        }
    }
    console.table(output);
    fs.writeFileSync(path, JSON.stringify(output))

}

groupColor(sortedSpringColor, groupedSpring, '../data/groupedSpringColorValue.json')
groupColor(sortedSummerColor, groupedSummer, '../data/groupedSummerColorValue.json')
groupColor(sortedAutumnColor, groupedAutumn, '../data/groupedAutumnColorValue.json')
groupColor(sortedWinterColor, groupedWinter, '../data/groupedWinterColorValue.json')

