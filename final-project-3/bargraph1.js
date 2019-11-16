let canvas1;
// let canvas2;
let clocks;
let dclocks = [];
let dcount = 0;
let sumWidth = 0;
let sumHeight = 0;
let sumDepth = 0;
let averageWidth = 0;
let averageHeight = 0;
let averageDepth =0 ;
var pos = 25


function preload() {
    let clocksData = 'dist/data/dimension3.json';
    loadJSON(clocksData, (data) => {

        clocks = data;
    });
}
function mouseWheel(event) {
    pos += event.delta;
    // posRev = height - 10 - pos;
}
function setup() {
    canvas1 =  createCanvas(1000, 700);
    canvas1.parent('bargraph');
    // canvas2 =  createCanvas(300, 700);
    // canvas2.parent('bargraph-front')
}

function draw() {
    // push()
        
    //  pop()
    background(234,231,220);
    
    for(var i = 0; i < clocks.length; i ++) {
        if (clocks[i].width != null && clocks[i].depth != null) {
            dclocks.push(clocks[i])
        }
    }
    for (var i = 0; i < dclocks.length; i++) {
        // var thisData = dclocks[i];
        push()
        noFill()
        strokeWeight(0.1)
        stroke(151,136,115)
        // front face
        rect(0, 700 - dclocks[i].height * 2, dclocks[i].width * 2, dclocks[i].height * 2)
        // side face
        rect(300, 700 - dclocks[i].height * 2, dclocks[i].depth * 2, dclocks[i].height * 2)
        // up face
        rect(600, 700 - dclocks[i].depth * 2, dclocks[i].width * 2, dclocks[i].depth * 2)
        pop()
        
    }
    fill(232,90,79);
    noStroke()
    textSize(20)
    text('FRONT', 0, 40);
    text('SIDE', 300, 40);
    text('UP', 600, 40);
    for (var i = 0; i < dclocks.length; i++) {
        sumWidth += dclocks[i].width;
        sumHeight += dclocks[i].height;
        sumDepth += dclocks[i].depth
        dcount++;
    }
    averageWidth = sumWidth / dcount;
    averageHeight = sumHeight /dcount;
    averageDepth = sumDepth / dcount;

    push();
    strokeWeight(3)
    noFill()
    stroke(232,90,79)
    rect(0, 700-averageHeight * 2, averageWidth * 2, averageHeight * 2);
    rect(300, 700 - averageHeight * 2, averageDepth * 2, averageHeight* 2)
    rect(600, 700 - averageDepth * 2, averageWidth * 2, averageDepth* 2)
    pop()
}

// function rectFront(x, y, w, h) {
//     rect(x, y, w, h)
// }