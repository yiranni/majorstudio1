function barGraph() {
    var margin = { top: 40, right: 20, bottom: 100, left: 100 },
        width = 400 - margin.left - margin.right,
        height = 700 - margin.top - margin.bottom
    x = d3.scale.ordinal().rangeRoundBands([0, width], 0.5),
        y = d3.scale.linear().range([height, 0]);


    // var xAxis = d3.svg.axis()
    //     .scale(x)
    //     .orient("bottom");
    // var yAxis = d3.svg.axis()
    //     .scale(y)
    //     .orient("left")
    //     .ticks(5)
    //     .innerTickSize(-width)
    //     .outerTickSize(0)
    //     .tickPadding(10);


    var canvas = d3.select('#bargraph').append('svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    d3.json("dist/data/dimension3.json", function (error, data) {

        canvas.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('width', function (d) {
                return d.width * 1.8;
            })
            .attr('height', function (d) {
                return d.height * 1.8;
            })
            .attr('y', function (d) {
                return height - d.height * 1.8 
            })
            .attr('fill', 'rgba(76, 231, 203, 0.03)')


    });

}