

import * as d3 from 'd3';

    const createChart = (dom, info, styles) => {

        const dx = styles.dx || 0,
              dy = styles.dy || 0,
              width = styles.width || 1200,
              height = styles.height || 500;

        const grouplabel = info[0],
              data = info[1];

        console.log(data)

        const svg =
            d3.select(dom)
                .append('div')
                .attr('class', 'row')
                .attr('class', 'well')
                .append('svg');
        //
        const group =
            svg.append('g')
            .attr('transform', `translate(${dx},${dy})`);


        group.append('text')
             .text(grouplabel)
             .attr('class', 'col-md-2');

	    group.selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .text( (d) => {
                return d.group;
            })
            .attr('x', 150)
            .attr('y', (d, i) => {
                return i * 25;
            })

    };


    export default (props) => {
            const node = document.createElement('div');
	         d3.select(node).attr('class', 'node');
	        props.cats.map( (d, i) =>{
	            createChart(node, d, i)
            });

        // Test
        //
         return node;
    };


