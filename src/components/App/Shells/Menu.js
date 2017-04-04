


import React from 'react';
import { Navbar,Nav, NavItem, Link} from 'react-bootstrap';
import reactCSS from 'reactcss'
import smoothScroll from 'smoothscroll';

export default class Menu extends React.Component{


    render(){


	    const styles = reactCSS({
		    default: {
                navbar:{
                  padding: "34px 0px",
                    color: "blue"
                  },
                title: {
                    fontFamily: 'Montserrat',
                     letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontSize: "1.5em",
                    borderBottom: "thick solid gray",
                    borderWidth : "1px",
                },

                dropdown: {
                    color: "black"
                },
                detail : {
                    fontSize: "0.9em",
                    color: "black",
                    fontFamily: 'Montserrat',
                    letterSpacing: "0.2em",
                   }
		    }
	    });

	    const navItems =
		    this.props.info.menu.map(
		        (link)=> {
                    return <NavItem key={link} href={"#"+link}>
                           <a style={styles.dropdown} >  {link.toUpperCase()}</a>
                    </NavItem>
		        });

        const html = (
               <Navbar style = {styles.navbar} >
                   <Navbar.Header>

                       <Navbar.Brand>
                          <div>
                              <a style={styles.title} href="/">Rixing Wu</a><br/>
                              <i style={styles.detail} >Software Developer &#x2615;</i>
                          </div>

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