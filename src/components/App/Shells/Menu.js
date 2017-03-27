


import React from 'react';
import { Navbar,Nav, NavItem, Link} from 'react-bootstrap';
import reactCSS from 'reactcss'
import smoothScroll from 'smoothscroll';

export default class Menu extends React.Component{


    render(){


	    const styles = reactCSS({
		    default: {
                navbar:{
                  padding: "24px 0px",
                  },
                title: {
                    fontFamily: 'Montserrat',
                     letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color : "black"
                 },


		    }
	    });

	    const navItems =
		    this.props.info.menu.map(
		        (link)=> {
                    return <NavItem key={link} href={"#"+link}>
                            {link.toUpperCase()}
                    </NavItem>
		        });

        const html = (
               <Navbar style = {styles.navbar} >
                   <Navbar.Header>

                       <Navbar.Brand>
                           <a style={styles.title} href="/">RIXING Wu</a>
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
        console.log(event);
		smoothScroll(event.target.id)
	};

}