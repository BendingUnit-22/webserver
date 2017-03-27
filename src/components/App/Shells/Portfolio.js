


import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import reactCSS from 'reactcss'

export default class Portfolio extends React.Component{

    render(){


        const styles = reactCSS({

            default: {
                container:{
                    backgroundColor: "#ddd",
                    lineHeight : "1.5em",
                    fontFamily: 'Roboto, Helvetica Neue, Helvetica, Arial, sans-serif',
                     fontSize: "20px",
                    height: "100vh",
                    width: "100vw"
                },
                row : {
                    paddingBottom: "20px"
                }
            }

        });

        const html = (

            <Grid style = {styles.container} fluid={true}>


            </Grid>

        );
        return html;
    }

}