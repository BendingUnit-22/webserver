

import * as d3 from 'd3';

var canvas = document.createElement('canvas');



var nodes = d3.range(1000).map(function(i) {
    return {
        index: i
    };
});

var links = d3.range(nodes.length - 1).map(function(i) {
    return {
        source: Math.floor(Math.sqrt(i)),
        target: i + 1
    };
});

var simulation = d3.forceSimulation(nodes)
    .force("charge", d3.forceManyBody())
    .force("link", d3.forceLink(links).distance(20).strength(1))
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    .on("tick", ticked);

var  context = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height;

d3.select(canvas)
    .attr('width', 1000)
    .attr('height', 1000)
.call(d3.drag()
        .container(canvas)
        .subject(dragsubject)
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

function ticked() {
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);

    context.beginPath();
    links.forEach(drawLink);
    context.strokeStyle = "#aaa";
    context.stroke();

    context.beginPath();
    nodes.forEach(drawNode);
    context.fill();
    context.strokeStyle = "#fff";
    context.stroke();

    context.restore();
}

function dragsubject() {
    return simulation.find(d3.event.x - width / 2, d3.event.y - height / 2);
}

function dragstarted() {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d3.event.subject.fx = d3.event.subject.x;
    d3.event.subject.fy = d3.event.subject.y;
}

function dragged() {
    d3.event.subject.fx = d3.event.x;
    d3.event.subject.fy = d3.event.y;
}

function dragended() {
    if (!d3.event.active) simulation.alphaTarget(0);
    d3.event.subject.fx = null;
    d3.event.subject.fy = null;
}

function drawLink(d) {
    context.moveTo(d.source.x, d.source.y);
    context.lineTo(d.target.x, d.target.y);
}

function drawNode(d) {
    context.moveTo(d.x + 3, d.y);
    context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
}



export default canvas;


// export default (props) => {
//
//     const mountPoint = document.createElement('canvas');
//
//     const {nodes, links} = props;
//
//
//     const simulation = d3.forceSimulation(nodes)
//         .force("charge", d3.forceManyBody())
//         .force("link", d3.forceLink(links).distance(20).strength(1))
//         .force("x", d3.forceX())
//         .force("y", d3.forceY())
//         .on("tick", ticked.bind(this));
//
//
//     const {width, height} = props;
//     d3.select(mountPoint).attr('width', width).attr('height', height);
//     let context = mountPoint.getContext('2d');
//
//
//     d3.select(mountPoint)
//             .call(d3.drag()
//             .container(mountPoint)
//             .subject(dragsubject)
//             .on("start", dragstarted)
//             .on("drag", dragged)
//             .on("end", dragended));
//
//
//
//
//     function ticked(){
//         context.clearRect(0, 0, width, height);
//         context.save();
//         context.translate(width / 2, height / 2);
//
//         context.beginPath();
//         links.forEach(drawLink);
//         context.strokeStyle = "#aaa";
//         context.stroke();
//
//         context.beginPath();
//         nodes.forEach(drawNode);
//         context.fill();
//         context.strokeStyle = "#fff";
//         context.stroke();
//
//         context.restore();
//     };
//
//     function dragsubject() {
//         return simulation.find(d3.event.x - width / 2, d3.event.y - height / 2);
//     }
//
//     function dragstarted() {
//         if (!d3.event.active) simulation.alphaTarget(0.3).restart();
//         d3.event.subject.fx = d3.event.subject.x;
//         d3.event.subject.fy = d3.event.subject.y;
//     }
//
//     function dragged() {
//         d3.event.subject.fx = d3.event.x;
//         d3.event.subject.fy = d3.event.y;
//     }
//
//     function dragended() {
//         if (!d3.event.active) simulation.alphaTarget(0);
//         d3.event.subject.fx = null;
//         d3.event.subject.fy = null;
//     }
//
//     function drawLink(d) {
//         context.moveTo(d.source.x, d.source.y);
//         context.lineTo(d.target.x, d.target.y);
//     }
//
//     function drawNode(d) {
//         context.moveTo(d.x + 3, d.y);
//         context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
//     }
//
//     return mountPoint;
// }
//



