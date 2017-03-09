


var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight|| document.body.clientHeight;
// D3
width -= 100;
height -= 100;
var projection = d3.geoOrthographic();

var path = d3.geoPath()
        .projection(projection);

var svg = d3.select('body')
            .append('div')
            .attr('class', 'wrapper')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

var graticule = d3.geoGraticule();
svg.append('path').datum(graticule).attr("class", "graticule").attr('d', path);

queue().defer(d3.json, 'world.geo.json').await(ready);

function ready(err, world) {
      if (err) throw err;
          svg.selectAll('path')
             .data(world.features)
             .enter()
             .append('path')
             .attr('d', path)
             .attr('class', 'clickable')
             .attr('id', function(d) {return d.id;})
             .on('click', onClicked);


      //
      // setInterval(function(){
      //
      //
      //   var randomIndex =  Math.floor(Math.random() * world.features.length);
      //     onClicked(world.features[randomIndex]);
      //
      // }, 3000);
}



function onClicked(country){
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
