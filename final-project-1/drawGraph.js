let spring;
let summer;
let autumn;
let winter;
let fontRegular;
let fontBold;
let fontLight;


function preload() {
    let springData = 'data/springCounts.json';
    let summerData = 'data/summerCounts.json';
    let autumnData = 'data/autumnCounts.json';
    let winterData = 'data/winterCounts.json';

    spring = loadJSON(springData);
    summer = loadJSON(summerData);
    autumn = loadJSON(autumnData);
    winter = loadJSON(winterData);
    // total500_699 = spring[0].paintings + summer[0].paintings + autumn[0].paintings + winter[0].paintings;
    

    // total500_699 = spring[0].paintings;

    fontRegular = loadFont('lib/Open_Sans/OpenSans-Regular.ttf');
    fontBold = loadFont('lib/Open_Sans/OpenSans-Bold.ttf');
    fontLight = loadFont('lib/Open_Sans/OpenSans-Light.ttf')

}



function setup() {
    createCanvas(1300, 1600);
    angleMode(DEGREES);
}

function draw() {
    background(248, 248, 248);
    fill(30, 31, 32);
    push()
    textFont(fontBold);


    // title
    textAlign(LEFT)
    textSize(48);
    text('Draw in Seasons', 120, 80);

    // name
    textSize(16);
    textFont(fontRegular);
    fill(51,51,51)
    text('YIRAN NI', 130, 120)

    // intro
    textSize(14)
    text('The Metropolitan Museum of Arts collects hundreds of thousands of artifacts. Hypothesizing that there might be a seasonal effect on artists, this viz project attemps to provide a clear overview of the proportion of paintings in each season throughout the history.', 
    130, 150, 570, 300)

    // text('500-699'+ spring[0].paintings + summer[0].paintings + autumn[0].paintings + winter[0].paintings, 200, 100);
    // text(total500_699, 200, 140);
    let total500_699 = spring[0].paintings + summer[0].paintings + autumn[0].paintings + winter[0].paintings + spring[0].drawings + summer[0].drawings + autumn[0].drawings + winter[0].drawings;
    let total700_899 = spring[1].paintings + summer[1].paintings + autumn[1].paintings + winter[1].paintings + spring[1].drawings + summer[1].drawings + autumn[1].drawings + winter[1].drawings;
    let total900_1099 = spring[2].paintings + summer[2].paintings + autumn[2].paintings + winter[2].paintings + spring[2].drawings + summer[2].drawings + autumn[2].drawings + winter[2].drawings;
    let total800_1299 = spring[3].paintings + summer[3].paintings + autumn[3].paintings + winter[3].paintings + spring[3].drawings + summer[3].drawings + autumn[3].drawings + winter[3].drawings;
    let total1300_1499 = spring[4].paintings + summer[4].paintings + autumn[4].paintings + winter[4].paintings + spring[4].drawings + summer[4].drawings + autumn[4].drawings + winter[4].drawings;
    let total1500_1699 = spring[5].paintings + summer[5].paintings + autumn[5].paintings + winter[5].paintings + spring[5].drawings + summer[5].drawings + autumn[5].drawings + winter[5].drawings;
    let total1700_1899 = spring[6].paintings + summer[6].paintings + autumn[6].paintings + winter[6].paintings + spring[6].drawings + summer[6].drawings + autumn[6].drawings + winter[6].drawings;
    let total1900_present = spring[7].paintings + summer[7].paintings + autumn[7].paintings + winter[7].paintings + spring[7].drawings + summer[7].drawings + autumn[7].drawings + winter[7].drawings;
    
    // console.log(total700_899);
    // console.log(total1900_present)

    pop();

    // lable
    push();
    textSize(14);
    textFont(fontRegular);
    fill(62, 62, 62);
    // spring
    push();
    text("SPRING", width - 200, 100);
    push()
    strokeWeight(5);
    stroke(26,179,148);
    line(width - 130, 96, width - 110, 96);
    pop();
    pop();

    // SUMMER
    push();
    text("SUMMER", width - 200, 120);
    push();
    strokeWeight(5);
    stroke(237,85,101);
    line(width - 130, 116, width - 110, 116);
    pop();
    pop();

    // FALL
    push();
    text("FALL", width - 200, 140);
    push();
    strokeWeight(5);
    stroke(241,196,15);
    line(width - 130, 136, width - 110, 136);
    pop();
    pop();

    // WINTER
    push();
    text("WINTER", width - 200, 160);
    push()
    strokeWeight(5);
    stroke(35,198,200);
    line(width - 130, 156, width - 110, 156);
    pop();
    pop();

    pop();




    // ******************************************
    // 1900-present
    // bound
    fill(248, 248, 248);
    stroke(223, 223, 223);
    strokeWeight(2);
    ellipse(width / 2, height / 2, 902, 902);
    // noFill();
    noStroke();
    fill(156, 156, 156);

    // spring
    fill(26, 179, 148);
    noStroke();
    arc(width / 2, height / 2, 900, 900, 0, (spring[7].paintings + spring[7].drawings) / total1900_present * 360 );
    // summer
    fill(237,85,101);
    noStroke();
    arc(width / 2, height / 2, 900, 900, (spring[7].paintings + spring[7].drawings) / total1900_present * 360, (summer[7].paintings + summer[7].drawings + spring[7].paintings + spring[7].drawings) / total1900_present * 360 );
    // autumn
    fill(241,196,15);
    noStroke();
    arc(width / 2, height / 2, 900, 900, (spring[7].paintings + spring[7].drawings + summer[7].paintings + summer[7].drawings) / total1900_present * 360, (autumn[7].paintings + autumn[7].drawings + summer[7].paintings + summer[7].drawings + spring[7].paintings + spring[7].drawings) / total1900_present * 360 );
    // winter
    fill(35,198,200);
    noStroke();
    arc(width / 2, height / 2, 900, 900, (spring[7].paintings + spring[7].drawings + summer[7].paintings + summer[7].drawings + autumn[7].paintings + autumn[7].drawings) / total1900_present * 360, 0);
    // text
    noStroke()
    fill(62, 62, 62);
    textSize(12)
    textAlign(LEFT, BASELINE);
    text('PRESENT', width / 2 + 108 + 50 * 7, height / 2 - 5);



    // **************************
    // 1700-1899
    //bound
    fill(248, 248, 248);
    stroke(223, 223, 223);
    strokeWeight(2);
    ellipse(width / 2, height / 2, 802, 802);
     // spring
     fill(26, 179, 148);
     noStroke();
     arc(width / 2, height / 2, 800, 800, 0, (spring[6].paintings + spring[6].drawings) / total1700_1899* 360 );
     // summer
     fill(237,85,101);
     noStroke();
     arc(width / 2, height / 2, 800, 800, (spring[6].paintings + spring[6].drawings) / total1700_1899 * 360, (summer[6].paintings + summer[6].drawings + spring[6].paintings + spring[6].drawings) / total1700_1899 * 360 );
     // autumn
     fill(241,196,15);
     noStroke();
     arc(width / 2, height / 2, 800, 800, (spring[6].paintings + spring[6].drawings + summer[6].paintings + summer[6].drawings) / total1700_1899 * 360, (autumn[6].paintings + autumn[6].drawings + summer[6].paintings + summer[6].drawings + spring[6].paintings + spring[6].drawings) / total1700_1899 * 360 );
     // winter
     fill(35,198,200);
     noStroke();
     arc(width / 2, height / 2, 800, 800, (spring[6].paintings + spring[6].drawings + summer[6].paintings + summer[6].drawings + autumn[6].paintings + autumn[6].drawings) / total1700_1899 * 360, 0);
    // text
    fill(62, 62, 62);
    textSize(12)
    textAlign(LEFT, BASELINE);
    text('1900', width / 2 + 108 + 50 * 6, height / 2 - 5);

    // *********************
    // 1500-1699
    // bound
    fill(248, 248, 248);
    stroke(223, 223, 223);
    strokeWeight(2);
    ellipse(width / 2, height / 2, 702, 702);
    // spring
    fill(26, 179, 148);
    noStroke();
    arc(width / 2, height / 2, 700, 700, 0, (spring[5].paintings + spring[5].drawings) / total1500_1699* 360 );
    // summer
    fill(237,85,101);
    noStroke();
    arc(width / 2, height / 2, 700, 700, (spring[5].paintings + spring[5].drawings) / total1500_1699 * 360, (summer[5].paintings + summer[5].drawings + spring[5].paintings + spring[5].drawings) / total1500_1699 * 360 );
    // autumn
    fill(241,196,15);
    noStroke();
    arc(width / 2, height / 2, 700, 700, (spring[5].paintings + spring[5].drawings + summer[5].paintings + summer[5].drawings) / total1500_1699 * 360, (autumn[5].paintings + autumn[5].drawings + summer[5].paintings + summer[5].drawings + spring[5].paintings + spring[5].drawings) / total1500_1699 * 360 );
    // winter
    fill(35,198,200);
    noStroke();
    arc(width / 2, height / 2, 700, 700, (spring[5].paintings + spring[5].drawings + summer[5].paintings + summer[5].drawings + autumn[5].paintings + autumn[5].drawings) / total1500_1699 * 360, 0);
    // text
    fill(62, 62, 62);
    textSize(12)
    textAlign(LEFT, BASELINE);
    text('1700', width / 2 + 108 + 50 * 5, height / 2 - 5);

    // **************
    // 1300-1499
    // bound
    fill(248, 248, 248);
    stroke(223, 223, 223);
    strokeWeight(2);
    ellipse(width / 2, height / 2, 602, 602);
    // spring
    fill(26, 179, 148);
    noStroke();
    arc(width / 2, height / 2, 600, 600, 0, (spring[4].paintings + spring[4].drawings) / total1300_1499* 360 );
    // summer
    fill(237,85,101);
    noStroke();
    arc(width / 2, height / 2, 600, 600, (spring[4].paintings + spring[4].drawings) / total1300_1499 * 360, (summer[4].paintings + summer[4].drawings + spring[4].paintings + spring[4].drawings) / total1300_1499 * 360 );
    // autumn
    fill(241,196,15);
    noStroke();
    arc(width / 2, height / 2, 600, 600, (spring[4].paintings + spring[4].drawings + summer[4].paintings + summer[4].drawings) / total1300_1499 * 360, (autumn[4].paintings + autumn[4].drawings + summer[4].paintings + summer[4].drawings + spring[4].paintings + spring[4].drawings) / total1300_1499 * 360 );
    // winter
    fill(35,198,200);
    noStroke();
    arc(width / 2, height / 2, 600, 600, (spring[4].paintings + spring[4].drawings + summer[4].paintings + summer[4].drawings + autumn[4].paintings + autumn[4].drawings) / total1300_1499 * 360, 0);

    // text
    fill(62, 62, 62);
    textSize(12)
    textAlign(LEFT, BASELINE);
    text('1500', width / 2 + 108 + 50 * 4, height / 2 - 5);


    // *******************
    // 800-1299
    // bound
    fill(248, 248, 248);
    stroke(223, 223, 223);
    strokeWeight(2);
    ellipse(width / 2, height / 2, 502, 502);
   // spring
   fill(26, 179, 148);
   noStroke();
   arc(width / 2, height / 2, 500, 500, 0, (spring[3].paintings + spring[3].drawings) / total800_1299* 360 );
   // summer
   fill(237,85,101);
   noStroke();
   arc(width / 2, height / 2, 500, 500, (spring[3].paintings + spring[3].drawings) / total800_1299 * 360, (summer[3].paintings + summer[3].drawings + spring[3].paintings + spring[3].drawings) / total800_1299 * 360 );
    // autumn
   fill(241,196,15);
   noStroke();
   arc(width / 2, height / 2, 500, 500, (spring[3].paintings + spring[3].drawings + summer[3].paintings + summer[3].drawings) / total800_1299 * 360, (autumn[3].paintings + autumn[3].drawings + summer[3].paintings + summer[3].drawings + spring[3].paintings + spring[3].drawings) / total800_1299 * 360);
    // winter
   fill(35,198,200);
   noStroke();
   arc(width / 2, height / 2, 500, 500, (spring[3].paintings + spring[3].drawings + summer[3].paintings + summer[3].drawings + autumn[3].paintings + autumn[3].drawings) / total800_1299 * 360, 0);

    // text
    fill(62, 62, 62);
    textSize(12)
    textAlign(LEFT,BASELINE);
    text('1300', width / 2 + 108 + 50 * 3, height / 2 - 5);


    // *****************
    // 900-1099
    // bound
    fill(248, 248, 248);
    stroke(223, 223, 223);
    strokeWeight(2);
    ellipse(width / 2, height / 2, 402, 402)
   // spring
   fill(26, 179, 148);
   noStroke();
   arc(width / 2, height / 2, 400, 400, 0, (spring[2].paintings + spring[2].drawings) / total900_1099* 360 );
   // summer
   fill(237,85,101);
   noStroke();
   arc(width / 2, height / 2, 400, 400, (spring[2].paintings + spring[2].drawings) / total900_1099 * 360, (summer[2].paintings + summer[2].drawings + spring[2].paintings + spring[2].drawings) / total900_1099 * 360 );
    // autumn
   fill(241,196,15);
   noStroke();
   arc(width / 2, height / 2, 400, 400, (spring[2].paintings + spring[2].drawings + summer[2].paintings + summer[2].drawings) / total900_1099 * 360, (autumn[2].paintings + autumn[2].drawings + summer[2].paintings + summer[2].drawings + spring[2].paintings + spring[2].drawings) / total900_1099 * 360);
    // winter
   fill(35,198,200);
   noStroke();
   arc(width / 2, height / 2, 400, 400, (spring[2].paintings + spring[2].drawings + summer[2].paintings + summer[2].drawings + autumn[2].paintings + autumn[2].drawings) / total900_1099 * 360, 0);


    // text
    fill(62, 62, 62);
    textSize(12)
    textAlign(LEFT, BASELINE);
    text('1100', width / 2 + 108 + 50 * 2, height / 2 - 5);

    // *****************
    // 700-899
    // bound
    fill(248, 248, 248);
    stroke(223, 223, 223);
    strokeWeight(2);
    ellipse(width / 2, height / 2, 302, 302);
     // spring
   fill(26, 179, 148);
   noStroke();
   arc(width / 2, height / 2, 300, 300, 0, (spring[1].paintings + spring[1].drawings) / total700_899 * 360 );
   // summer
   fill(237,85,101);
   noStroke();
   arc(width / 2, height / 2, 300, 300, (spring[1].paintings + spring[1].drawings) / total700_899 * 360, (summer[1].paintings + summer[1].drawings + spring[1].paintings + spring[1].drawings) / total700_899 * 360 );
    // autumn
   fill(241,196,15);
   noStroke();
   arc(width / 2, height / 2, 300, 300, (spring[1].paintings + spring[1].drawings + summer[1].paintings + summer[1].drawings) / total700_899 * 360, (autumn[1].paintings + autumn[1].drawings + summer[1].paintings + summer[1].drawings + spring[1].paintings + spring[1].drawings) / total700_899 * 360);
    // winter
   fill(35,198,200);
   noStroke();
   arc(width / 2, height / 2, 300, 300, (spring[1].paintings + spring[1].drawings + summer[1].paintings + summer[1].drawings + autumn[1].paintings + autumn[1].drawings) / total700_899 * 360, 0);

    // text
    fill(62, 62, 62);
    textSize(12)
    textAlign(LEFT, BASELINE);
    text('900', width / 2 + 108 + 50, height / 2 - 5);


    // text('700', width / 2, height / 2 - (104 + 50 * 1));
    // text('900', width / 2, height / 2 - (104 + 50 * 2));
    // text('800', width / 2, height / 2 - (104 + 50 * 3));

    // text('1300', width / 2, height / 2 - (104 + 50 * 4));
    // text('1500', width / 2, height / 2 - (104 + 50 * 5));
    // text('1700', width / 2, height / 2 - (104 + 50 * 6));


    // center
    fill(248, 248, 248);;
    stroke(223, 223, 223);
    strokeWeight(2);
    ellipse(width / 2, height / 2, 200, 200);
    
    fill(62, 62, 62);
    textSize(12)
    noStroke();

    push()    
    // textAlign(CENTER);
    text('700', width / 2 + 108, height / 2 -5);
    pop()

    // timeline
    stroke(223, 223, 223);
    strokeWeight(1);
    line(width/2 + 100, height/2, width/2 + 100 + 70*5 + 50, height/2)








}