import React from "react";
import "./navbar.css"

function Navbar(){
    return (
        <div className="navbar">
            <div className="toggleButton">
                <button></button>
            </div>
            <div className="links">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </div>
    );
}

export default Navbar;