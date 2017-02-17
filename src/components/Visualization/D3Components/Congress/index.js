

import NetworkGraph from './NetworkGraph';
import rd3 from 'react-d3-library';
const RD3Component = rd3.Component;
import React, {Component} from 'react';
import './style.css'

export default class Ideology extends Component{
    constructor(props){
        super(props);
        this.state = {d3: ""};
    }

    componentDidMount() {
        this.setState({d3: NetworkGraph})
    }

    render(){
        return (
            <div className="container-fluid">
                <RD3Component data={this.state.d3} />
            </div>
            )
    }
}
