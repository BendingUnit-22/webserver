import './style.css'
import React, {Component} from 'react';
import Introduction from './Shells/introduction';
import Portfolio from './Shells/Portfolio';
import Contact from './Shells/Contact';
import Menu from './Shells/Menu';
class App extends Component{

    render(){

        return(

            <div>
                <div className="container-fluid">
                    <Menu linkitems={this.props.app.linkitems}/>
                </div>

                <Introduction/>
                <Portfolio/>
                <Contact/>
            </div>

        )
    }

}

export default App;
