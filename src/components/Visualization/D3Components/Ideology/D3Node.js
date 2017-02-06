



import * as d3 from 'd3';


    const Chart = (dom, info, styles) => {

        const dx = styles.dx,
              dy = styles.dy,
              width = styles.width,
              height = styles.height;

        const grouplabel = info[0],
                data = info[1];



        const svg =
            d3.select(dom)
                .append('svg')
                .attr('width', width)
                .attr('height', height);


        const group =
            svg.append('g')
            .attr('transform', `translate(${dx},${dy})`);


        d3.select(dom).attr('class', 'node');

        group.append('text')
             .text(grouplabel)
            .attr('x', 0)
            .attr('y', 0);

        return dom;

    };


    export default (props) => {
            const node = document.createElement('div');

            const cat1 = props.cats[0];

            Chart(node, cat1, {
               dx: 0,
                dy: 0,
                width: "100%",
                height: 200
            });

        // Test
        //
         return node;
    };


