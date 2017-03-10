


var width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) * (9.0/12);  //  60 percent of the screen
var height = window.innerHeight || document.documentElement.clientHeight|| document.body.clientHeight;
// D3


var projection = d3.geoOrthographic()
                    .scale(height/2)
                    .translate([width/2, height/2])
                    .precision(0.1);

var path = d3.geoPath()
        .projection(projection);

var svg = d3.select('#globe')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

var graticule = d3.geoGraticule();
svg.append('path').datum(graticule).attr("class", "graticule").attr('d', path);


queue().defer(d3.json, 'world.geo.json')
        .defer(d3.json, 'worlddata.json')
        .await(ready);

var countryDic = null;
var wdata = null;


function ready(err, world, worlddata) {
      if (err) throw err;
        wdata = worlddata;
        countryDic = world.features;

          svg.selectAll('path')
             .data(world.features)
             .enter()
             .append('path')
             .attr('d', path)
             .attr('class', 'clickable')
             .attr('id', function(d) {return d.id;})
             .on('click', onClicked);



        //  console.log(wdata)
    maxs = wdata.maxs;
    mins  = wdata.mins;
    console.log(maxs);
    console.log(mins);
 }

var statSvg = d3.select('#menu').append('g');
var color = d3.scaleOrdinal(d3.schemeCategory10);

var maxs = null;
var mins = null;



var makeScale = function(name){
  return d3.scaleLinear()
        .domain([mins[name],maxs[name]])
        .range([40,400]);
};

function updateMenu(country) {

    d3.select('#countryname').text(country.properties.name);
    classStr = 'flag flag-icon flag-icon-' + country.id.toLocaleLowerCase().substr(0, 2);
    d3.select('#countryicon').attr('class', classStr);
    d3.select('#countrycode').text(country.id);
    var p = d3.geoCentroid(country);
    d3.select('#countrylat').text("latitude: " + p[1].toFixed(4));
    d3.select('#countrylong').text("longitude: " + p[0].toFixed(4));

    var stats = wdata[country.id].stats;
    if (stats == null) return;

    statSvg.html("");

    var stats = statSvg.selectAll('.stat')
                .data(stats)
                .enter()
                .append('div')
                .classed('stat', true)
                .classed('row', true);


    stats.
        append('h5')
            .text(function (n) {
                     return n.name.toUpperCase()
            }).exit().remove();

    stats.
    append('div')
        .style('background-color', function (n, i) {
            return color(i)
        })
        .style('width', function (n) {
            linearScale = makeScale(n.name);

             return linearScale(n.value)+ "px"
        })
        .style('height', '50px')
        .exit().remove();

}

function onClicked(country){

        if(this.nodeName !== 'path' && Date.now() - currentTime < 1000){
            currentTime = Date.now();
            return;
        }

        updateMenu(country);
          // Reset
          d3.selectAll(".clicked")
             .classed("clicked", false);
         // mark selected
         d3.select('#' + country.id).classed('clicked', true);
         // animation
         (function transition(){
           d3.select('.clicked').transition()
                     .duration(1250)
                     .tween('rotate', function(){
                       var p = d3.geoCentroid(country);
                       var r = d3.interpolate(projection.rotate(), [-p[0], -p[1]]);
                       return function(t){
                         projection.rotate(r(t));
                         svg.selectAll("path").attr("d", path);
                       };
               });
         })();
         svg.append('path').datum(graticule).attr("class", "graticule").attr('d', path);



}

// Handling search input
var table = d3.select('form')
    .append('table').attr('id', 'rowcontainer');

var currentTime = Date.now();

d3.select('#searchInput')
.on('input', function () {


    var value = this.value;
    table.html("");

    if (value.length === 0){
        return
    }

    var re = new RegExp( value, 'i');
    var rehead = new RegExp( '^' + value, 'i');

    var searchSet = countryDic.filter(function (n) {
        if (value.length <= 3){
            return n.id.match(rehead);
        }else{
           return n.properties.name.match(re);
        }
     });

    if (searchSet.length > 0){
        onClicked(searchSet[0]);
    }

   var cells =  table.selectAll('tr')
                 .data(searchSet)
                 .enter()
                 .append('tr')
       .classed('rowcell', true)
       .on('mouseover', function (n) {
           cells.style('background-color', 'white');
            d3.select(this).style('background-color', 'darkorange');
           onClicked(n)
       });


    cells.append('span').attr('class',  function (n) {

        classStr = 'flag-icon flag-icon-' + n.id.toLocaleLowerCase().substr(0, 2);
        return classStr;

    });

    cells.append('strong')
        .text(function (n) {
            return n.id
        });

    cells.append('p')
        .text(function (n) {
            return n.properties.name
        })

});


function toggleCells() {
    table.html("");
    this.text = ""
}

 