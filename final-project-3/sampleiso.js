/*
let clock = {
    "height": 83.2,
    "width": 29.2,
    "depth": 14
}
let SIDE;
let W;
let H;
let LRH; // height of left and right side -> height of clock
let D;
let W2;
let H2;




function setup() {
    c = createCanvas(300, 300);
    c.parent('sampleiso')
}

function draw() {
    background(234, 231, 220)
    SIDE = clock.width;
    LRH = clock.height;
    D = clock.depth;
    W = Math.floor(2 * SIDE * Math.cos(Math.PI / 6));
    H = Math.floor(2 * SIDE * Math.sin(Math.PI / 6));
    W2 = Math.floor(2 * D * Math.cos(Math.PI / 6));
    H2 = Math.floor(2 * D * Math.sin(Math.PI / 6));
    iso(100, 50, 2, W, H, LRH, W2, H2);
}

function iso(x, y, s, width, height, clockheight, width2, height2) {
    // s-> ratio
    var w = width * s;
    var h = height * s;
    var w2 = width2 * s;
    var h2 = height2 * s;
    var clockheight = clockheight * s
    stroke(151, 136, 115);
    noFill()
    // looks like does not work for model that width???
    quad(x - w / 2, y + h / 2, x, y + h, x + w2 / 2, y + h - h2 / 2, x - w / 2 + w2 / 2, y + h / 2 - h2 / 2); // up
    quad(x + w2 / 2, y + h - h2 / 2, x + w2 / 2, y + h - h2 * 0.5 + clockheight, x, y + h + clockheight, x, y + h); // right
    quad(x - w / 2, y + h / 2, x, y + h, x, y + h + clockheight, x - w / 2, y + h * 0.5 + clockheight); //left



}
*/
let sketch = function (p) {
    let clock = {
        "height": 83.2,
        "width": 29.2,
        "depth": 14
    }
    let SIDE;
    let W;
    let H;
    let LRH; // height of left and right side -> height of clock
    let D;
    let W2;
    let H2;

    p.setup = function () {
        p.c = p.createCanvas(300, 300);
        p.c.parent('sampleiso')
    }

    p.draw = function () {
        // p.background(234, 231, 220)
        p.background(255)

        p.SIDE = clock.width;
        p.LRH = clock.height;
        p.D = clock.depth;
        p.W = Math.floor(2 * SIDE * Math.cos(Math.PI / 6));
        p.H = Math.floor(2 * SIDE * Math.sin(Math.PI / 6));
        p.W2 = Math.floor(2 * D * Math.cos(Math.PI / 6));
        p.H2 = Math.floor(2 * D * Math.sin(Math.PI / 6));
        p.iso(100, 50, 2, W, H, LRH, W2, H2);
    }

    p.iso = function (x, y, s, width, height, clockheight, width2, height2) {
        p.w = width * s;
        p.h = height * s;
        p.w2 = width2 * s;
        p.h2 = height2 * s;
        p.clockheight = clockheight * s
        p.stroke(151, 136, 115);
        p.noFill()

        // p.quad(p.x - p.w / 2, p.y + p.h / 2, p.x, p.y + p.h, p.x + p.w2 / 2, p.y + p.h - p.h2 / 2, p.x - p.w / 2 + p.w2 / 2, p.y + p.h / 2 - p.h2 / 2); // up
        // p.quad(p.x + p.w2 / 2, p.y + p.h - p.h2 / 2, p.x + p.w2 / 2, p.y + p.h - p.h2 * 0.5 + p.clockheight, p.x, p.y + p.h + p.clockheight, p.x, p.y + p.h); // right
        // p.quad(p.x - p.w / 2, p.y + p.h / 2, p.x, p.y + p.h, p.x, p.y + p.h + p.clockheight, p.x - p.w / 2, p.y + p.h * 0.5 + p.clockheight); //left

        // // var w = width * s;
        // var h = height * s;
        // var w2 = width2 * s;
        // var h2 = height2 * s;
        // var clockheight = clockheight * s
        // console.log(w + ", " + h + ", " + w2 + ", " + h2 + ", " + clockheight)
        console.log(p.w)
        // p.stroke(151, 136, 115);
        // p.noFill()
     
        // p.quad(x - w / 2, y + h / 2, x, y + h, x + w2 / 2, y + h - h2 / 2, x - w / 2 + w2 / 2, y + h / 2 - h2 / 2); // up
        // p.quad(x + w2 / 2, y + h - h2 / 2, x + w2 / 2, y + h - h2 * 0.5 + clockheight, x, y + h + clockheight, x, y + h); // right
        // p.quad(x - w / 2, y + h / 2, x, y + h, x, y + h + clockheight, x - w / 2, y + h * 0.5 + clockheight); //left
    }
}

let myp5 = new p5(sketch);

/*
let sketch = function(p) {
    let x = 100;
    let y = 100;

    p.setup = function() {
      p.createCanvas(700, 410);
    };

    p.draw = function() {
      p.background(0);
      p.fill(255);
      p.rect(x, y, 50, 50);
    };
  };

  let myp5 = new p5(sketch);
  */