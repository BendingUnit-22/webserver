



import * as d3 from 'd3';





    export default (props) => {

        const categories = props.cats;


        const node = document.createElement('div');

        const BoxH = 200;

        const svg = d3.select(node)
                    .append('svg')
                    .attr('width', props.width)
                    .attr('height', props.height);


        const groups =  svg.selectAll('g')
                .data(categories);

             groups.enter()
                    .append('g')
                    .each(function (segment, i) {

                        d3.select(this)
                            .append('p')

                            .text(segment[0]);

                    });

        return node;
    };



