import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';


const Navbar = () => {
    return (
        <Nav>
            <Bars />
            
            <NavMenu>
                <NavLink to='../../pages/about.tsx'>
                    About Me
                </NavLink>
                <NavLink to='../../pages/projects.tsx'>
                    Portfolio
                </NavLink>
            </NavMenu>
        </Nav>
    );
};

export default Navbar;