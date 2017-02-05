

import React from 'react';


export default class Navigation extends React.Component{


    render(){
        const linkitems = this.props.linkitems.map(
            (link) =>{
                return <li key={link.key}>{link.name.toUpperCase()}</li>
            }
        );

        return (
            <div className="fixed-top">
                <div className="row">
                    <nav className="navbar">
                        <ul className="nav navbar-nav pull-right">{linkitems}</ul>
                    </nav>
                </div>
            </div>


        )
    }

}