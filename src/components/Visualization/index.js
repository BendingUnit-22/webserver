


import React, {Component} from 'react';
import classnames from 'classnames';

import './style.css';

export default class Visualization extends Component{

    render(){
        const {className, ...props} = this.props;
        return (
            <div className={classnames('vis', className)} {...props}>
                <div className="container">
                    <h1>My Visualization</h1>


                </div>
            </div>
        )
    }

}