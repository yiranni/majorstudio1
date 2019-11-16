let spring;
let summer;
let autumn;
let winter;
// let fontRegular;
// let fontBold;
// let fontLight;


function preload() {
    let springData = '../src/data/groupedSpringColorValue.json';
    let summerData = '../src/data/groupedSpringColorValue.json';
    let autumnData = '../src/data/groupedSpringColorValue.json';
    let winterData = '../src/data/groupedSpringColorValue.json';

    spring = loadJSON(springData);
    summer = loadJSON(summerData);
    autumn = loadJSON(autumnData);
    winter = loadJSON(winterData);
    // total500_699 = spring[0].paintings + summer[0].paintings + autumn[0].paintings + winter[0].paintings;
    

    // total500_699 = spring[0].paintings;

    // fontRegular = loadFont('lib/Open_Sans/OpenSans-Regular.ttf');
    // fontBold = loadFont('lib/Open_Sans/OpenSans-Bold.ttf');
    // fontLight = loadFont('lib/Open_Sans/OpenSans-Light.ttf')

}

function setup() {
    
    createCanvas(1300, 1600);
    // createElement('h1', 'Spring')
}

function draw() {
    background(0);
    text('hello', 100, 200)
}