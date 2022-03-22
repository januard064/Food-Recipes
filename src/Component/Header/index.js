import React, {useState, useEffect} from "react";
import './Header.css' ;
import {Navbar, NavbarToggler, NavItem, Collapse, Nav, NavLink, NavbarBrand} from 'reactstrap';
import {Link } from "react-router-dom";

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
                            {/* <NavLink className="link" href="/home" style={{ color:'white' }}>
                               Home
                            </NavLink> */}
                            <Link to={`/home`} className="link">Home</Link>
                        </NavItem>
                        <NavItem>
                            {/* <NavLink className="link" href="/explore"  style={{ color:'white' }}>
                                Explore
                            </NavLink> */}
                            <Link to={`/explore`} className="link" >Explore</Link>
                        </NavItem>
                        <NavItem>
                            {/* <NavLink className="link" href="/category"  style={{ color:'white' }}>
                                Categories
                            </NavLink> */}
                            <Link to={`/category`} className="link" >Categories</Link>
                        </NavItem>
                        <NavItem>
                            {/* <NavLink className="link" href="/mylibrary"  style={{ color:'white' }}>
                                My Library
                            </NavLink> */}
                            <Link to={`/mylibrary`} className="link">My Library</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
  </div>
        </div>
    )
}


export default Header;