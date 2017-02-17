


import React from 'react';


export default class Portfolio extends React.Component{
    render(){

        return (
                <div className="row text-center"  id="portfolio">
                    <div className="container" >
                        <div className="row">
                            <h1 className="heading">Portfolio</h1>
                        </div>
                        <div className="row">

                            <div className="item">
                                <h4>PRoject1</h4>
                                <div className="item_content">
                                </div>
                            </div>

                            <div className="item">
                                <h4>P  ---  oop </h4>
                                <div className="item_content">
                                </div>
                            </div>

                            <div className="item">
                                <h4>PRoject3</h4>
                                <div className="item_content">
                                </div>
                            </div>



                        </div>
                    </div>
            </div>
        )
    }

}