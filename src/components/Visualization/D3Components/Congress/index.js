


import React, {Component} from 'react';
import './style.css'
import * as d3 from 'd3';
import data from './loadData';
import NetworkGraph from './NetworkGraph';
import rd3 from 'react-d3-library';
const RD3Component = rd3.Component;

class Congress extends Component {

    constructor(props) {
        super(props);
        this.state = {
            d3: ""
        }
    }

    componentWillMount() {

        // const nodes = d3.range(1000)
        //          .map((i) => {
        //             return {index: i};
        //         });
        //
        // const links = d3.range(nodes.length - 1).map(function(i) {
        //     return {
        //         source: Math.floor(Math.sqrt(i)),
        //         target: i + 1
        //     };
        // });
        //
        // const props = {
        //     nodes,
        //     links,
        //     ...this.props
        // };


        //const mountPoint = NetworkGraph;
        this.setState({d3: NetworkGraph})
    }

    render(){
        return <RD3Component data={this.state.d3} />
    }

}




export default Congress;

// //
// const margin = {top: 20, right: 90, bottom: 30, left: 90};
// const width = 1200 - margin.left - margin.right;
// const height = 1000 - margin.top - margin.bottom;
// //
// Congress.defaultProps = {
//     width: width,
//     height: height,
//     margin: margin
// };
//
