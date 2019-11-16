"use strict";
let clocks;
let dclocks = []; // data with width & depth

let SIDE;
let W;
let H;
let LRH; // height of left and right side -> height of clock
let D;
let W2;
let H2;

var grids = [];
var canvas;

function preload() {
    let clocksData = 'dist/data/dimension3.json';
    loadJSON(clocksData, (data) => {

        clocks = data;
    });
}
function setup() {
    canvas = createCanvas(windowWidth, 10000);
    canvas.position(0, 0);
    canvas.style('z-index', '-1')

}

function draw() {

    background(0, 0, 0);

    strokeWeight(1)
    for (var i = 0; i < clocks.length; i++) {
        if (clocks[i].width != null && clocks[i].depth != null) {
            dclocks.push(clocks[i])
        }
    }
    for (var i = 0; i < dclocks.length; i++) {
        var thisData = dclocks[i];
        let r = Math.floor(i / 6);
        console.log(r)


        // if (thisData.width < 10 && thisData.width >= 5) {
        //     SIDE = thisData.width * 20;
        //     D= thisData.depth * 20;
        //     LRH = thisData.height * 20;
        // } else if (thisData.width < 5) {
        //     SIDE = thisData.width * 40;
        //     LRH = thisData.height * 40;
        //     D=thisData.depth * 40;
        // } else if (thisData.width >= 10 && thisData.width < 20) {
        //     SIDE = thisData.width * 10
        //     D=thisData.depth * 10;
        //     LRH = thisData.height * 10;
        // } else {
        //     SIDE = thisData.width;
        //     LRH = thisData.height;
        //     D=thisData.depth
        // }
        // 
        SIDE = thisData.width;
        LRH = thisData.height;
        D = thisData.depth;
        // LRH = 60;
        // SIDE = thisData.width/thisData.height*LRH;
        // D = thisData.depth/thisData.height*LRH
        W = Math.floor(2 * SIDE * Math.cos(Math.PI / 6));
        H = Math.floor(2 * SIDE * Math.sin(Math.PI / 6));
        W2 = Math.floor(2 * D * Math.cos(Math.PI / 6));
        H2 = Math.floor(2 * D * Math.sin(Math.PI / 6));
        // console.log(SIDE)
        //(x, y, s, width, height)
        iso(i % 6 * 150 + 180, 150 + 150 * r, 0.5, W, H, LRH, W2, H2);
        // text(thisData.objectID, i % 6 * 150 + 150, 150 + 150 * r)


    }
}

// grid for ref
function rec(x, y) {
    noFill()
    stroke(255)
    rect(x, y, 150, 150)

}
function iso(x, y, s, width, height, clockheight, width2, height2) {
    // s-> ratio
    var w = width * s;
    var h = height * s;
    var w2 = width2 * s;
    var h2 = height2 * s;
    var clockheight = clockheight * s
    stroke(76, 231, 203);
    noFill()
    // looks like does not work for model that width???
    quad(x - w / 2, y + h / 2, x, y + h, x + w2 / 2, y + h - h2 / 2, x - w / 2 + w2 / 2, y + h / 2 - h2 / 2); // up
    quad(x + w2 / 2, y + h - h2 / 2, x + w2 / 2, y + h - h2 * 0.5 + clockheight, x, y + h + clockheight, x, y + h); // right
    quad(x - w / 2, y + h / 2, x, y + h, x, y + h + clockheight, x - w / 2, y + h * 0.5 + clockheight); //left



}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}