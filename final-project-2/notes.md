<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title>Final Project 2</title>

    <meta name="description" content="Display dominant color of all images, sorted by season and decades">
    <meta name="author" content="Lokesh Dhakar">
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Karla%7CMontserrat:700">
    <link rel="stylesheet" href="display/css/screen.css">

</head>

<body>

    <div style="display: flex; flex-direction: column;">
        <h2>Spring</h2>
        <div>
            <h3>Before A.D.1000</h3>
            <div id="spring-images0"></div>
        </div>
        <div>
            <h3>A.D.1000 - A.D.1199</h3>
            <div id="spring-images1"></div>
        </div>
        <div>
            <h3>A.D.1200 - A.D.1399</h3>
            <div id="spring-images2"></div>
        </div>
        <div>
            <h3>A.D.1400 - A.D.1599</h3>
            <div id="spring-images3"></div>
        </div>
        <div>
            <h3>A.D.1600 - A.D.1799</h3>
            <div id="spring-images4"></div>
        </div>
        <div>
            <h3>A.D.1700 - A.D.1899</h3>
            <div id="spring-images5"></div>
        </div>
        <div>
            <h3>After A.D.1900</h3>
            <div id="spring-images6"></div>
        </div>

        <h2>Summer</h2>


        <!-- <div>
            <h2>Summer</h2>
            <div id="summer-images"></div>
        </div> -->
    </div>


    <script id='image-tpl-spring0' type='text/x-mustache'>
    {{#.}}
    
        <div class="image-section" data-image="{{.}}">
            <img class="image" src="./display/img/springimg/{{.}}" />
            <div class="output"></div>
        </div>
    {{/.}}
    </script>
    <script id='image-tpl-spring1' type='text/x-mustache'>
        {{#.}}
        
            <div class="image-section" data-image="{{.}}">
                <img class="image" src="./display/img/springimg/{{.}}" />
                <div class="output"></div>
            </div>
        {{/.}}
    </script>
    <script id='image-tpl-spring2' type='text/x-mustache'>
        {{#.}}
        
            <div class="image-section" data-image="{{.}}">
                <img class="image" src="./display/img/springimg/{{.}}" />
                <div class="output"></div>
            </div>
        {{/.}}
    </script>
    <script id='image-tpl-spring3' type='text/x-mustache'>
        {{#.}}
        
            <div class="image-section" data-image="{{.}}">
                <img class="image" src="./display/img/springimg/{{.}}" />
                <div class="output"></div>
            </div>
        {{/.}}
    </script>
    <script id='image-tpl-spring4' type='text/x-mustache'>
        {{#.}}
        
            <div class="image-section" data-image="{{.}}">
                <img class="image" src="./display/img/springimg/{{.}}" />
                <div class="output"></div>
            </div>
        {{/.}}
    </script>
    <script id='image-tpl-spring5' type='text/x-mustache'>
        {{#.}}
        
            <div class="image-section" data-image="{{.}}">
                <img class="image" src="./display/img/springimg/{{.}}" />
                <div class="output"></div>
            </div>
        {{/.}}
    </script>
    <script id='image-tpl-spring6' type='text/x-mustache'>
        {{#.}}
        
            <div class="image-section" data-image="{{.}}">
                <img class="image" src="./display/img/springimg/{{.}}" />
                <div class="output"></div>
            </div>
        {{/.}}
    </script>
    <!-- <script id='image-tpl-summer' type='text/x-mustache'>
    {{#.}}
        <div class="image-section" data-image="{{.}}">
            <img class="image" src="./src/img/summerimg/{{.}}" />
            <div class="output"></div>
        </div>
    {{/.}}
    </script> -->



    <!-- <script id="palette-tpl" type="text/x-mustache">
        <div class="palette" data-count="{{count}}"></div>
    </script> -->



    <script id="color-tpl" type="text/x-mustache">
            <div class="color">
                <div class="swatches">
                    <div class="swatch" style="background-color: rgb({{color.0}}, {{color.1}}, {{color.2}})"></div>
                </div>
                <code>
                    <div class="output-color">{{colorStr}}</div>
                </code>
            </div>
         </script>

    <!-- <script id="palette-tpl" type="text/x-mustache">
        <div class="palette" data-count="{{count}}"></div>
    </script> -->





    <script src="dist/color-thief.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.0.1/mustache.min.js"></script>
    <script src="display/js/index.js"></script>

</body>

</html>