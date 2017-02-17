


import React, {Component} from 'react';
//import Ideology from './D3Components/Ideology';
import Congress from './D3Components/Congress';
import './style.css';

 class Visualization extends Component{

    render(){
         return (
                 <div className="container-fluid">
                        <Congress/>
                </div>

         )
    }
}

export default Visualization