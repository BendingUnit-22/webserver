


import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import reactCSS from 'reactcss'

export default class Introduction extends React.Component{

    render(){


        const styles = reactCSS({

            default: {
                container:{
                    backgroundColor: " #334055",
                    lineHeight : "1.5em",
                    fontSize: "16px",
                    fontFamily: 'Roboto, Helvetica Neue, Helvetica, Arial, sans-serif',
                    padding: "40px",
                     height: "100vh",
                 },
                row : {
                    paddingBottom: "20px",
                    padding : "20px 10%"
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
                               I'm an enthusiastic, detail oriented computer science human aspire to become a Software Developer.
                               I'm  third-year student at Wentworth Institute of Technology studying computer science.
                           </strong>
                       </Row>

                           <Row style={styles.row}>
                               <h4>Why computer science?<br/></h4>


                             <p>
                                 Generally people find programming scary as it closely revolves around logic, mathematics, and algorithms, but reality, but it can be
                                 as much a science as it is a craft. I enjoy tinkering with micro controllers such as the Arduino and Raspberry Pi.

                           </p>



                           <p>
                               I'm always tinkering with something, especially projects that require me to work outside of my comfort.
                               I develope both web and ios platforms, in addition, I . I try to
                               to create software not only efficient but also maintainable. I enjoy learning new concepts.
                           </p>
                       </Row>


                   </Grid>

            </Grid>

        );
        return html;
    }

}
