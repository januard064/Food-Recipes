import React, {useState, useEffect} from "react";
import './Header.css' ;
import {Navbar, NavbarToggler, NavItem, Collapse, Nav, NavLink, NavbarBrand} from 'reactstrap';

function Header(){

    const [toggler, setToggler] = useState(false);

    const toggleNav = () =>{
        setToggler(!toggler)
    }
    

    return(
        <div className="header">
            <div className="container">
            <Navbar light expand="md" className="navar">
                <NavbarToggler onClick={toggleNav} />
                <Collapse navbar isOpen={toggler}>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="link" href="/home" style={{ color:'white' }}>
                               Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="link" href="/explore"  style={{ color:'white' }}>
                                Explore
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="link" href="/category"  style={{ color:'white' }}>
                                Categories
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="link" href="/mylibrary"  style={{ color:'white' }}>
                                My Library
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
  </div>
        </div>
    )
}


export default Header;