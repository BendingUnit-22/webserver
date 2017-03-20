
import React, {Component} from 'react';
import Introduction from './Shells/introduction';
import Portfolio from './Shells/Portfolio';
import Contact from './Shells/Contact';
import Menu from './Shells/Menu';
import {Grid, Row} from 'react-bootstrap';
import reactCSS from 'reactcss'
import "./reset.css"

import coverimage from '../../../public/images/cover.jpg';

class App extends Component{


    render(){
	    const styles = reactCSS({
		    'default': {
			    top_row:{
                     height: "100px",
                    backgroundColor: "red"
			    },
			    full_row: {
                     backgroundColor: "#334055"
			    },

                bottom_row: {
                      color: "white",
                      paddingTop: "40px",
                     paddingBottom: "40px"
                },
                cover : {

                }
		    }
	    });


	    const info = {
	        menu:  ["introduction", "portfolio", "contact"]
        };

	    const html = (
                <Grid fluid={true}>

                    <Row style={styles.top_row}>
                        <Menu info={info}/>
                    </Row>

                    <Row style={styles.cover} id="cover">

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
