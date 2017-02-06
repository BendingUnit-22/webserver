

import * as d3 from 'd3';

    const createChart = (dom, info, styles) => {

        const dx = styles.dx || 0,
              dy = styles.dy || 0,
              width = styles.width || 1200,
              height = styles.height || 500,
              rowHeight = styles.rowHeight || 40,
              color =  styles.color;

        const grouplabel = info[0],
              data = info[1];


        const svg =
            d3.select(dom)
                .append('div')
                .attr('class', 'row')
                .append('svg')
                .attr('height', rowHeight * data.length);
        //
        const group =
            svg.append('g')
            .attr('transform', `translate(${dx},${dy})`);


        group.append('text')
             .attr('class', "title")
             .text(grouplabel)
            .attr('fill', color);

	    group.selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .attr('class', 'subcat')
            .text( (d) => {
                return d.group;
            })
            .attr('x', 300)
            .attr('y', (d, i) => {
                return i * rowHeight - rowHeight;
            })

    };


    export default (props) => {
            const colors = props.colors;

            const node = document.createElement('div');
	        // d3.select(node).attr('class', 'node');
	        props.cats.map( (d, i) =>{

	            const stlyles = {
	                color: colors[i]
                };

	            createChart(node, d, stlyles)
            });

        // Test
        //
         return node;
    };


