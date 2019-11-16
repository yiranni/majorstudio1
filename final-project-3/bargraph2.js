// let canvas;
// let clocks;
// let dclocks = [];


function preload() {
    // let clocksData = 'dist/data/dimension3.json';
    // loadJSON(clocksData, (data) => {

    //     clocks = data;
    // });
}
function setup() {
    canvas =  createCanvas(300, 700);
    canvas.parent('bargraph-side')
}

function draw() {
    background(234,231,220);
    // for(var i = 0; i < clocks.length; i ++) {
    //     if (clocks[i].width != null && clocks[i].depth != null) {
    //         dclocks.push(clocks[i])
    //     }
    // }
    for (var i = 0; i < dclocks.length; i++) {
        // var thisData = dclocks[i];
        noFill()
        strokeWeight(0.1)
        stroke(151,136,115)
        rect(10, 700 - dclocks[i].height * 2, dclocks[i].width * 2, dclocks[i].height * 2)
        text(dclocks[i].width, 10, 10 + 10 * i)
    }
}

