import './style.css'
import React, {Component} from 'react';
import Navigation from './Shells/navigation';

class App extends Component{

    render(){

        return (
                    <div className="app">
                        <div className="container-fluid">
                            <Navigation linkitems={this.props.app.linkitems}/>

                            <p>Asdasdad
                            </p>
                        </div>

                    </div>
                )
    }

}

export default App;
