


import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import reactCSS from 'reactcss'

export default class Skills extends React.Component{

    render(){



    const data = {

        web_developement: ["HTML5", "CSS", "Javascript", "Node.js", "React", "Webpack",  "D3.js", "Bootstrap", "ECMAScript 6"],
        programming_langs: ["C++", "Java", "Python", "Swift", "Objective-C", "Haskell", "Prolog", "PHP", "SQL"],
        tools: ["Git + Github", "Command line",  "Docker", "Xcode", "Homebrew"]

    };






        const styles = reactCSS({

            default: {
                container: {

                    width : "100vw",
                    height: "100vh",
                    backgroundImage: "url('/images/cover.jpg')",
                    backgroundPosition: "center center",
                    backgroundSize : "cover",
                    backgroundRepeat:  "no-repeat",
                 }
            }

        });

        const html = (

            <Grid style = {styles.container} >
                <div>



                </div>


            </Grid>

        );
        return html;
    }

}