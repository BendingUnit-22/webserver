


import React from 'react';
import smoothScroll from 'smoothscroll';

export default class Menu extends React.Component{

   scrollTo(event){
        smoothScroll(event.target.id)
    };


    render(){
        const linkitems = this.props.linkitems.map(
            (link) =>{
                return <li key={link.key} className="navbar_item"><a href={'#' + link.key} onClick={this.scrollTo.bind(this)}>{link.name.toUpperCase()}</a> </li>
            }
        );

        return (
            <div className="row text-center">
                <div id="cover">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Rixing Wu</h1>
                            <h2>Software Developer</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12"  id="menu">
                            <ul>{linkitems}</ul>
                        </div>
                    </div>

                </div>

            </div>
        )
    }

}