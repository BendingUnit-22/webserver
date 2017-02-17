

import * as d3 from 'd3';

    const createChart = (dom, info, styles) => {

        const dx = styles.dx || 0,
              dy = styles.dy || 0,
              width = styles.width || 1200,
              rowHeight = styles.rowHeight || 50,
              color =  styles.color;

        const grouplabel = info[0],
              data = info[1];


        const samplesize = data.reduce( (total, d) =>{
            return total + d.count;
        }, 0);

        const scaleCount = d3.scaleLinear()
            .domain([0, 1])
            .range([0, 50]);

        const svg =
            d3.select(dom)
                .append('div')
                .attr('class', 'cat')
                .append('svg')
                .attr('width', width)
                .attr('height', rowHeight * data.length);

        //
        const group =
            svg.append('g')
            .attr('transform', `translate(${dx},${dy})`);


        group.append('g')
            .append('text')
             .attr('class', "title")
             .text(grouplabel)
            .attr('fill', color);

	    group.append('g')
            .attr('transform', `translate(${250},${50})`)
            .selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .attr('class', 'subcat')
            .text( (d) => {
                return d.group
            })
            .attr('x', 0)
            .attr('y', (d, i) => {
                return i * rowHeight;
            });

        group.append('g')
            .selectAll('text')
                .data(data)
                .enter()
                .append('text')
                .attr('x',300)
                .attr('y', (d, i) => {
                    return i * rowHeight + 50;
                })
                .attr('width', (d, i) =>{
                    return d.count
                })
                .attr('height', rowHeight)
                .attr('font-family', 'FontAwesome')
                 .text( (d) =>{
                     return '\uf183'.repeat(Math.round(scaleCount(d.count/samplesize )));
                 })
                .attr('class', 'icon')
                .attr('fill', color);


        group.append('g')
                .selectAll('text')
                .data(data)
                .enter()
                .append('text')
                .attr('x', width - 120)
                .attr('y', (d, i) => {
                    return i * rowHeight + 50;
                })
                .text( (d, i) => {
                        return Math.round(d.count/samplesize * 100.0) + "%"
                })
            .attr('fill', color)


    };


    export default (props) => {
            const colors = props.colors;

            const node = document.createElement('div');
	        d3.select(node).attr('class', 'node');


          d3.select(node)
                    .append('svg')
                    .attr('width', props.width)
                    .attr('height', 50)
                    .append('text')
                    .text('%')
                    .attr('x', props.width - 120)
                    .style('font-size', "30px");

	       props.cats.map( (d, i) =>{
	            const styles = {
	                color: colors[i],
                    width: props.width

                };

	            return createChart(node, d, styles)
            });

         // Test
        //
         return node;
    };


