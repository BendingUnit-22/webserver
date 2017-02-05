import './style.css'
import React, {Component} from 'react';
import Navigation from './Shells/navigation';

class App extends Component{

    render(){

        return(
            <div className="container-fluid">
                <Navigation linkitems={this.props.app.linkitems}/>

                <div className="jumbotron">
                    <div className="row text-center">
                        <h1>Coming Soon.!! </h1>
                    </div>
                </div>
            </div>
        )
    }

}

export default App;
