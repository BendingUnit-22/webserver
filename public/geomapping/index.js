


var width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) *  0.6;  //  60 percent of the screen
var height = window.innerHeight || document.documentElement.clientHeight|| document.body.clientHeight;
// D3


var projection = d3.geoOrthographic()
                    .scale(width/2)
                    .translate([width/2, height/2])
                    .precision(0.1);

var path = d3.geoPath()
        .projection(projection);

var svg = d3.select('body')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

var graticule = d3.geoGraticule();
svg.append('path').datum(graticule).attr("class", "graticule").attr('d', path);


queue().defer(d3.json, 'world.geo.json').await(ready);

var countryDic = null;

function ready(err, world) {
      if (err) throw err;


        countryDic = world.features;



          svg.selectAll('path')
             .data(world.features)
             .enter()
             .append('path')
             .attr('d', path)
             .attr('class', 'clickable')
             .attr('id', function(d) {return d.id;})
             .on('click', onClicked)



}





function onClicked(country){

        if(this.nodeName !== 'path' && Date.now() - currentTime < 1000){
            currentTime = Date.now()
            return
        }
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
           cells.style('background-color', 'white')
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

