const fs = require('fs')
const convert = require('color-convert')
let spring = JSON.parse(fs.readFileSync('../data/sortedSpringHSL.json'))
console.table(spring[2].artworks)

// console.log(convert.rgb.hsl(133,108,83))
