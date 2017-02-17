/**
 * Created by rixing on 2/11/17.
 */

import React from 'react';

export default class Contact extends React.Component{
    render(){

        return (
            <div className="container">
                <div className="text-center" id="contact">

                        <div className="row">
                            <h1 className="heading" >Contact</h1>
                        </div>


                            <div className="row">


                                <div className="col-md-4 social-tag">
                                    <a href="https:/github.com/BendingUnit-22" title="github.com/BendingUnit-22">
                                        <i className="zmdi zmdi-github-box"> </i>
                                        <div className="social-text">Github</div>
                                    </a>
                                </div>

                                <div className="col-md-4 social-tag">
                                    <a href="http://linkedin.com/in/rixingwu" title="linkedin.com/in/rixingwu">
                                        <i className="zmdi zmdi-linkedin-box"> </i>
                                        <div className="social-text">Linkedin</div>
                                    </a>
                                </div>

                                <div className="col-md-4 social-tag">
                                    <a  href="mailto:rixingw@gmail.com" title="rixingw@gmail.com">
                                        <i className="zmdi zmdi-email"> </i>
                                        <div className="social-text"><span>Email</span> </div>
                                    </a>
                                </div>


                        </div>


                </div>
            </div>
        )
    }

}