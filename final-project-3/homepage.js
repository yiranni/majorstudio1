let img;

function preload() {
    img = loadImage('dist/img/1852_DT44.jpg')
}

function setup() {
    createCanvas(windowWidth, 2000)
}

function draw() {
    background(50)
    image(img,0,0, windowWidth, 1000)
}