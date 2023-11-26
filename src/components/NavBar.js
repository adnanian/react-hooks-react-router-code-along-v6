import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

/* Define the NavBar component */
function NavBar() {
    return (
        <nav>
            <NavLink
                to="/"
                /**add styling to NavLink */
                className="nav-link"
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className="nav-link"
            >
                About
            </NavLink>
            <NavLink
                to="/login"
                className="nav-link"
            >
                Link
            </NavLink>
        </nav>
    );
}

export default NavBar;