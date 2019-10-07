
var colorThief = new ColorThief();

var imagesbefore = ["740_DP153705.jpg"]
var images1000 = ["1070_DP167812_CRD.jpg","1075_DP151528.jpg"]

var imagesSpring = ["740_DP153705.jpg","1070_DP167812_CRD.jpg","1075_DP151528.jpg","1100_DP144257.jpg","1100_DT5210.jpg","1100_DP151504_CRD.jpg","1100_DP234261_CRD.jpg","1134_DP213064_CRD.jpg"]

var imagesSummer = ["967_DP-13657-002.jpg","1040_DP226465.jpg","1075_DP151528.jpg","1100_DP165244.jpg","1100_DP234261_CRD.jpg","1100_DT5210.jpg","1127_DP212993_4_CRD.jpg","1156_DP165265_CRD.jpg","1164_DP154096.jpg"]

// Render example images
// var examplesHTML1 = Mustache.to_html(document.getElementById('image-tpl').innerHTML, imagesbefore);
// var examplesHTML2 = Mustache.to_html(document.getElementById('image-tpl').innerHTML, images1000);
// document.getElementById('example-images').innerHTML = examplesHTML1;
// document.getElementById('example-images').innerHTML = examplesHTML2;
var springHTML = Mustache.to_html(document.getElementById('image-tpl-spring').innerHTML, imagesSpring);
document.getElementById('spring-images').innerHTML = springHTML;


var summerHTML = Mustache.to_html(document.getElementById('image-tpl-summer').innerHTML, imagesSummer);
document.getElementById('summer-images').innerHTML = summerHTML;

// Once images are loaded, process them
document.querySelectorAll('.image').forEach((image) => {
    const section = image.closest('.image-section');
    if (image.complete) {
        showColorsForImage(image, section);
    } else {
        image.addEventListener('load', function() {
            showColorsForImage(image, section);
        });
    }
})

// Run Color Thief functions and display results below image.
// We also log execution time of functions for display.
const showColorsForImage = function(image, section) {
    let start = Date.now();

    // 🎨🔓
    let result = colorThief.getColor(image);

    let elapsedTime = Date.now() - start;
    const colorHTML = Mustache.to_html(document.getElementById('color-tpl').innerHTML, {
        // colorStr: result.toString(),
        color: result,
        elapsedTime
    })

    // getPalette(img)
    let paletteHTML = '';
    let colorCounts = [3, 9];
    colorCounts.forEach((count) => {
        let start = Date.now();

        // 🎨🔓
        let result = colorThief.getPalette(image, count);

        let elapsedTime = Date.now() - start;
        paletteHTML += Mustache.to_html(document.getElementById('palette-tpl').innerHTML, {
            count,
            palette: result,
            paletteStr: result.toString(),
            elapsedTime
        })
    });

    const outputEl = section.querySelector('.output');
    outputEl.innerHTML += colorHTML + paletteHTML;
};



