
import React, {Component} from 'react';
import Introduction from './Shells/introduction';
import Portfolio from './Shells/Portfolio';
import Contact from './Shells/Contact';
import Menu from './Shells/Menu';
import {Grid, Row} from 'react-bootstrap';
import reactCSS from 'reactcss'
import "./reset.css"

class App extends Component{

    render(){

	    const styles = reactCSS({
		    'default': {
			    top_row:{
				    width: "100vw",
			    },
			    full_row: {
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "gray"
                },

                bottom_row: {
	                width: "100vw",
	                height: "20vh",
	                background: "linear-gradient(45deg, #00b7c7, 0, #4d0ce8 100%)",
                    padding: "30px 0 40px"
                }
		    }
	    });

	    const html = (
                <Grid fluid={true}>
                    <Row style={styles.top_row}>
                        <Menu/>
                    </Row>
                    <Row style={styles.full_row} id="introduction">
                        <Introduction/>
                    </Row>
                    <Row style={styles.full_row} id="portfolio">
                        <Portfolio/>
                    </Row>
                    <Row style={styles.bottom_row} id="contact">
                        <Contact/>
                    </Row>
                </Grid>
        );

        return html;
    }
}

export default App;
