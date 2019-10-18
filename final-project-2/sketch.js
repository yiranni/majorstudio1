let spring;
let summer;
let autumn;
let winter;
let fontRegular;
let fontBold;
// let fontLight;
var thisArtwork;
let thisColorArray;
// let count;
let sampleimg;
let samplePalette = [[213, 202, 184], [67, 65, 45], [145, 131, 104], [124, 118, 60], [108, 78, 47], [137, 135, 136], [180, 159, 139], [145, 149, 145], [246, 239, 229], [92, 148, 68]]


function preload() {
    // let springData = 'src/data/sortedSpringColorValue.json';
    let springData = 'src/data/sortedSpringHSL.json';
    let summerData = 'src/data/sortedSummerHSL.json';
    let autumnData = 'src/data/sortedAutumnHSL.json';
    let winterData = 'src/data/sortedWinterHSL.json';

    loadJSON(springData, (data) => {
        spring = data;
        // return spring;
    });
    loadJSON(summerData, (data) => {
        // console.log(summer)
        summer = data;
    });
    loadJSON(autumnData, (data) => {
        // console.log(autumn)
        autumn = data
    })
    loadJSON(winterData, (data) => {
        // console.log(winter)
        winter = data
    })
    // summer = loadJSON(summerData);
    // autumn = loadJSON(autumnData);
    // winter = loadJSON(winterData);
    // total500_699 = spring[0].paintings + summer[0].paintings + autumn[0].paintings + winter[0].paintings;


    // total500_699 = spring[0].paintings;

    fontRegular = loadFont('lib/font/Karla/Karla-Regular.ttf');
    fontBold = loadFont('lib/font/Karla/Karla-Bold.ttf');
    fontItalic = loadFont('lib/font/Karla/Karla-Italic.ttf');
    fontItalicBold = loadFont('lib/font/Karla/Karla-BoldItalic.ttf');
    // fontLight = loadFont('lib/font/Open_Sans/OpenSans-Light.ttf')

    sampleimg = loadImage('src//img/springimg/1899_DT1559.jpg')

}


function setup() {
    createCanvas(windowWidth, 2000)
}

function draw() {
    background((40, 39, 20))

    // project title
    push();
    colorMode(RGB);
    textFont(fontItalicBold);
    textSize(48);
    
    fill(92, 148, 68);
    text('Colourful Seasons', 52, 82);
    fill(255)
    text('Colourful Seasons', 50, 80);
    pop();
    push();
    textFont(fontRegular);
    textSize(20);
    fill(255);
    text('Dominant Color', 50, 480);
    text('Color Palette', 250, 480);
    textSize(16)
    text('(209,197,180)', 100, 524)
    textFont(fontRegular);
    textSize(16);
    textLeading(24)
    text('As an amatuer of painting, I always have some contraints on choosing colors. However, for those talented artists, do they have some preferrences on using colors? In this project, I chose \"seasons\", a subjective concept, as my research topic. I looked through all paintings that depicted any of the four seasons from 11th century collected by Metropolitan Museum of Art. For each exhibit, I extracted the dominant color and group color boxes for every 200 years. Within each time period, I sorted color boxes based on its hue in order to see which color was the most commonly used during the selected time range.',
        550, 150, 800, 480)
    colorMode(RGB);
    fill(209, 197, 180);
    ellipse(75, 520, 30, 30)
    for (var i = 0; i < 5; i++) {
        fill(samplePalette[i][0], samplePalette[i][1], samplePalette[i][2]);
        ellipse(275 + 40 * i, 520, 30, 30)
    }
    for (var i = 5; i < samplePalette.length; i++) {
        fill(samplePalette[i][0], samplePalette[i][1], samplePalette[i][2]);
        ellipse(275 + 40 * (i - 5), 570, 30, 30)
    }
    pop();

    image(sampleimg, 50, 130, 400, 300)


    // season title
    push();
    textFont(fontItalicBold);
    textSize(30);
    fill(92, 148, 68);
    text('SPRING', 53, 672);
    text('SUMMER', 403, 672);
    text('AUTUMN', 753, 672);
    text('WINTER', 1103, 672)
    fill(255);
    text('SPRING', 50, 670);
    text('SUMMER', 400, 670);
    text('AUTUMN', 750, 670);
    text('WINTER', 1100, 670)

    pop();


    // year title
    push();
    textFont(fontRegular)
    textSize(16)
    fill(255)
    for (var i = 0; i < 4; i++) {
        text('Before A.D.1000', 50 + 350 * i, 320 + 400);
        text('A.D.1000 ~ A.D.1200', 50 + 350 * i, 500 + 400);
        text('A.D.1200 ~ A.D.1400', 50 + 350 * i, 680 + 400);
        text('A.D.1400 ~ A.D.1600', 50 + 350 * i, 860 + 400);
        text('A.D.1600 ~ A.D.1800', 50 + 350 * i, 1040 + 400);
        text('After A.D.1800', 50 + 350 * i, 1220 + 400)
    }
    pop();

    // // total account
    // push();
    // textFont(fontItalic)
    // textSize(16)
    // fill(255)
    // for (var i = 0; i < 4; i++) {
    //     text('total#: ', 50 + 350 * i, 320 + 400);
    //     text('A.D.1000 ~ A.D.1200', 50 + 350 * i, 470 + 400);
    //     text('A.D.1200 ~ A.D.1400', 50 + 350 * i, 620 + 400);
    //     text('A.D.1400 ~ A.D.1600', 50 + 350 * i, 770 + 400);
    //     text('A.D.1600 ~ A.D.1800', 50 + 350 * i, 920 + 400);
    //     text('After A.D.1800', 50 + 350 * i, 970 + 400)
    // }
    // pop();




    push();
    noStroke();

    colorMode(HSL)
    // Spring Sketch
    for (var i = 0; i < spring.length; i++) {
        // spring before 1000
        for (var j = 0; j < spring[0].artworks.length; j++) {
            let count = spring[0].artworks.length;
            let width = 300 / count; // 300
            thisArtwork = spring[0].artworks[j];
            thisColorArray = thisArtwork.colorValue;

            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(50 + width * j, 740, width, 100)

        }

        // spring 1000-1200
        for (var j = 0; j < spring[1].artworks.length; j++) {
            let count = spring[1].artworks.length;
            let width = 300 / count;
            thisArtwork = spring[1].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(50 + width * j, 920, width, 100)
        }
        // spring 1200-1400
        for (var j = 0; j < spring[2].artworks.length; j++) {
            let count = spring[2].artworks.length;
            let width = 300 / count;
            thisArtwork = spring[2].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(50 + width * j, 1100, width, 100)
        }

        // spring 1400-1600
        for (var j = 0; j < spring[3].artworks.length; j++) {
            let count = spring[3].artworks.length;
            let width = 300 / count;
            thisArtwork = spring[3].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(50 + width * j, 1280, width, 100)
        }

        // spring 1600-1800
        for (var j = 0; j < spring[4].artworks.length; j++) {
            let count = spring[4].artworks.length;
            let width = 300 / count;
            thisArtwork = spring[4].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(50 + width * j, 1460, width, 100)
        }

        // spring after 1800
        for (var j = 0; j < spring[5].artworks.length; j++) {
            let count = spring[5].artworks.length;
            let width = 300 / count;
            thisArtwork = spring[5].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(50 + width * j, 1640, width, 100)
        }

        push();
        fill(255);
        textFont(fontItalicBold);
        textSize(14)
        for (var i = 0; i < spring.length; i++) {
            text("total#: " + spring[i].artworks.length, 270, 720 + 180 * i)

        }

        pop()
    }
    // colorMode(HSL)
    // Summer Sketch
    for (var i = 0; i < summer.length; i++) {
        // summer before 1000
        for (var j = 0; j < summer[0].artworks.length; j++) {
            let count = summer[0].artworks.length;
            let width = 300 / count; // 300
            thisArtwork = summer[0].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(400 + width * j, 740, width, 100)
        }
        // summer 1000-1200
        for (var j = 0; j < summer[1].artworks.length; j++) {
            let count = summer[1].artworks.length;
            let width = 300 / count;
            thisArtwork = summer[1].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(400 + width * j, 920, width, 100)
        }
        // summer 1200-1400
        for (var j = 0; j < summer[2].artworks.length; j++) {
            let count = summer[2].artworks.length;
            let width = 300 / count;
            thisArtwork = summer[2].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(400 + width * j, 1100, width, 100)
        }

        // summer 1400-1600
        for (var j = 0; j < summer[3].artworks.length; j++) {
            let count = summer[3].artworks.length;
            let width = 300 / count;
            thisArtwork = summer[3].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(400 + width * j, 1280, width, 100)
        }

        // summer 1600-1800
        for (var j = 0; j < summer[4].artworks.length; j++) {
            let count = summer[4].artworks.length;
            let width = 300 / count;
            thisArtwork = summer[4].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(400 + width * j, 1460, width, 100)
        }

        // summer after 1800
        for (var j = 0; j < summer[5].artworks.length; j++) {
            let count = summer[5].artworks.length;
            let width = 300 / count;
            thisArtwork = summer[5].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(400 + width * j, 1640, width, 100)
        }

        push();
        fill(255);
        textFont(fontItalicBold);
        textSize(14)
        for (var i = 0; i < summer.length; i++) {
            text("total#: " + summer[i].artworks.length, 620, 720 + 180 * i)
        }

        pop()
    }

    // colorMode(HSL);
    // Autumn Sketch
    for (var i = 0; i < autumn.length; i++) {
        // autumn before 1000
        for (var j = 0; j < autumn[0].artworks.length; j++) {
            let count = autumn[0].artworks.length;
            let width = 300 / count; // 300
            thisArtwork = autumn[0].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(750 + width * j, 740, width, 100)
        }
        // autumn 1000-1200
        for (var j = 0; j < autumn[1].artworks.length; j++) {
            let count = autumn[1].artworks.length;
            let width = 300 / count;
            thisArtwork = autumn[1].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(750 + width * j, 920, width, 100)
        }
        // autumn1200-1400
        for (var j = 0; j < autumn[2].artworks.length; j++) {
            let count = autumn[2].artworks.length;
            let width = 300 / count;
            thisArtwork = autumn[2].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(750 + width * j, 1100, width, 100)
        }

        // autumn 1400-1600
        for (var j = 0; j < autumn[3].artworks.length; j++) {
            let count = autumn[3].artworks.length;
            let width = 300 / count;
            thisArtwork = autumn[3].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(750 + width * j, 1280, width, 100)
        }

        // autumn 1600-1800
        for (var j = 0; j < autumn[4].artworks.length; j++) {
            let count = autumn[4].artworks.length;
            let width = 300 / count;
            thisArtwork = autumn[4].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(750 + width * j, 1460, width, 100)
        }

        // autumnafter 1800
        for (var j = 0; j < autumn[5].artworks.length; j++) {
            let count = autumn[5].artworks.length;
            let width = 300 / count;
            thisArtwork = autumn[5].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(750 + width * j, 1640, width, 100)
        }

        push();
        fill(255);
        textFont(fontItalicBold);
        textSize(14)
        for (var i = 0; i < autumn.length; i++) {
            text("total#: " + autumn[i].artworks.length, 970, 720 + 180 * i)
        }

        pop()
    }

    // Winter Sketch
    for (var i = 0; i < winter.length; i++) {
        // winter before 1000
        for (var j = 0; j < winter[0].artworks.length; j++) {
            let count = winter[0].artworks.length;
            let width = 300 / count; // 300
            thisArtwork = winter[0].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(1100 + width * j, 740, width, 100)
        }
        // winter 1000-1200
        for (var j = 0; j < winter[1].artworks.length; j++) {
            let count = winter[1].artworks.length;
            let width = 300 / count;
            thisArtwork = winter[1].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(1100 + width * j, 920, width, 100)
        }
        // winter 1200-1400
        for (var j = 0; j < winter[2].artworks.length; j++) {
            let count = winter[2].artworks.length;
            let width = 300 / count;
            thisArtwork = winter[2].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(1100 + width * j, 1100, width, 100)
        }

        // winter 1400-1600
        for (var j = 0; j < winter[3].artworks.length; j++) {
            let count = winter[3].artworks.length;
            let width = 300 / count;
            thisArtwork = winter[3].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(1100 + width * j, 1280, width, 100)
        }

        // winter 1600-1800
        for (var j = 0; j < winter[4].artworks.length; j++) {
            let count = winter[4].artworks.length;
            let width = 300 / count;
            thisArtwork = winter[4].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(1100 + width * j, 1460, width, 100)
        }

        // winter after 1800
        for (var j = 0; j < winter[5].artworks.length; j++) {
            let count = winter[5].artworks.length;
            let width = 300 / count;
            thisArtwork = winter[5].artworks[j];
            thisColorArray = thisArtwork.colorValue;
            fill(thisColorArray[0], thisColorArray[1], thisColorArray[2]);
            rect(1100 + width * j, 1640, width, 100)
        }

        push();
        fill(255);
        textFont(fontItalicBold);
        textSize(14)
        for (var i = 0; i < winter.length; i++) {
            text("total#: " + winter[i].artworks.length, 1320, 720 + 180 * i)
        }

        pop()
    }

    pop()

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}