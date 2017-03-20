


import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import reactCSS from 'reactcss'

export default class Portfolio extends React.Component{

    render(){


        const styles = reactCSS({

            default: {
                container:{
                    backgroundColor: " #1b1b1b",
                    lineHeight : "1.5em",
                    fontFamily: 'Roboto, Helvetica Neue, Helvetica, Arial, sans-serif',
                    padding: "40px",
                    fontSize: "20px",
                    height: "100vh",
                },
                row : {
                    paddingBottom: "20px"
                }
            }

        });

        const html = (

            <Grid style = {styles.container} fluid={true}>

                <Grid>
                    <Row style={styles.row}>
                        <h1 className="h1">
                            Hello, I'm Rixing.
                        </h1>
                    </Row>

                    <Row style={styles.row}>
                        <strong>
                            I am an enthusiastic, detail oriented software engineer passionate about mobile & web technologies. I'm  a third-year student at Wentworth Institute of Technology in Boston studying computer science.
                        </strong>
                    </Row>

                    <Row style={styles.row}>
                        <p>
                            I have a strong theoretical background in computer science, including a thorough knowledge of data structure as well as algorithm design and analysis. I have experience developing and designing applications for the both web and Apple's ios platforms. Whether it's making native ios applications with swift or complex d3 visualization systems with HTML/CSS/JavaScript,  I strive to create software not only efficient but also maintainable.
                        </p>
                    </Row>

                    <Row style={styles.row}>
                        I enjoy learning new concepts. Whether it's getting my hands dirty with the latest machine learning technique or exploring open source frameworks in Github, I'm always tinkering with something, especially projects that require me to work outside of my comfort.
                    </Row>
                </Grid>

            </Grid>

        );
        return html;
    }

}