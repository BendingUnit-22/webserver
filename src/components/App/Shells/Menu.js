


import React from 'react';
import { Navbar,Nav, NavItem, Link} from 'react-bootstrap';
import reactCSS from 'reactcss'
import smoothScroll from 'smoothscroll';

export default class Menu extends React.Component{


    render(){


	    const styles = reactCSS({
		    default: {

		    }
	    });

	    const navItems =
		    ["introduction", "portfolio", "contact"].map(
		        (link)=> {
                    return <NavItem key={link} href={"#"+link}>
                            {link.toUpperCase()}
                    </NavItem>
		        });

        const html = (
               <Navbar>
                   <Navbar.Header>
                       <Navbar.Brand>
                           <a >Rixing Wu</a>
                       </Navbar.Brand>
                       <Navbar.Toggle />
                   </Navbar.Header>
                   <Navbar.Collapse>
                       <Nav pullRight>
                           {navItems}
                       </Nav>
                   </Navbar.Collapse>
               </Navbar>
        );
        return html;
    }

	scrollTo(event){
        console.log(event)
		smoothScroll(event.target.id)
	};

}