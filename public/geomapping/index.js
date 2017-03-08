


var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight|| document.body.clientHeight;

var svg = d3.select('body')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

var projection = d3.geoOrthographic().translate([width/2, height/2]);

var path = d3.geoPath().projection(projection);

queue()
.defer(d3.json, 'world.geo.json')
.await(ready);

function ready(err, world) {
      if (err) throw err;

          svg.selectAll('path')
             .data(world.features)
             .enter()
             .append('path')
             .attr('d', path)
             .on('click', rotateTransition);
}


function rotateTransition(country){
      var p = d3.geoCentroid(country);
      var rotation = d3.interpolate(projection.rotate(),[-p[0], -p[1]]);
      console.log(roate);
}
