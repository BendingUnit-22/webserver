/**
 * Created by rixing on 2/11/17.
 */

import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import reactCSS from 'reactcss'

export default class Contact extends React.Component{

    render() {

        const styles = reactCSS({

            default: {
                socialcol: {
                    display: "block",
                    height: "100%"
                },
                copyright: {
                    fontSize: "14px",
                    fontFamily: 'Montserrat',
                    letterSpacing: "0em",
                    color: '#5e666e',
                    clear: "both",

                 },
                socialicon: {
                    fontSize: "50px"
                },
                socialrow: {
                    paddingTop: "25px",
                    paddingBottom: "25px"

                }
            },

            hover: {
                socialicon: {
                    color: "red"
                },

            }

        });

        const html = (

            <Grid >
                <Row className="text-center" style={styles.socialrow}>
                    <Col xs={4} md={4} lg={4} style = {styles.socialcol}>
                        <a href="https:/github.com/BendingUnit-22" title="github.com/BendingUnit-22"  style={styles.socialicon}>
                            <i className="zmdi zmdi-github-box">  </i>
                        </a>
                    </Col>

                    <Col xs={4} md={4} lg={4}  style = {styles.socialcol}>
                        <a href="http://linkedin.com/in/rixingwu" title="linkedin.com/in/rixingwu" style={styles.socialicon}>
                              <i className="zmdi zmdi-linkedin-box"> </i>
                         </a>
                    </Col>

                    <Col xs={4} md={4} lg={4} style = {styles.socialcol}>
                        <a  href="mailto:rixingw@gmail.com" title="rixingw@gmail.com"  style={styles.socialicon}>
                            <i className="zmdi zmdi-email"> </i>
                        </a>
                    </Col>
                </Row>

                <Row className="text-center"  style={styles.socialrow}>
                    <Col xs={12}  md={12} lg={12} style = {styles.socialcol}>
                            <i style={styles.copyright}>
                                © 2017 Rixing Wu. All rights reserved.
                            </i>
                    </Col>
                </Row>

            </Grid>

        );

	    return html;




	    //        <div className="container">
	    //     <div className="text-center" id="contact">
	    //
	    //     <div className="row">
	    //     <h1 className="heading" >Contact</h1>
	    //     </div>
	    //     <div className="row">
	    //     <div className="col-md-4 social-tag">
	    //     <a href="https:/github.com/BendingUnit-22" title="github.com/BendingUnit-22">
	    //     <i className="zmdi zmdi-github-box"> </i>
	    //     <div className="social-text">Github</div>
	    //     </a>
	    //     </div>
	    //
	    //     <div className="col-md-4 social-tag">
	    //     <a href="http://linkedin.com/in/rixingwu" title="linkedin.com/in/rixingwu">
	    //     <i className="zmdi zmdi-linkedin-box"> </i>
	    //     <div className="social-text">Linkedin</div>
	    //     </a>
	    //     </div>
	    //
	    //     <div className="col-md-4 social-tag">
	    //     <a  href="mailto:rixingw@gmail.com" title="rixingw@gmail.com">
	    //     <i className="zmdi zmdi-email"> </i>
	    //     <div className="social-text"><span>Email</span> </div>
	    //     </a>
	    //     </div>
	    //
	    //     </div>
	    //
	    //
	    //     </div>
	    //     </div>
	    // }

    }

}