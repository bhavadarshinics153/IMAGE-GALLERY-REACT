
import React from "react";

function Navbar() {
    return (
        <nav className="navbar">
            <a href="#" className="logo">
                Frame<span>.</span>
            </a>

            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#gallery">Gallery</a>
                <a href="#about">About</a>
            </div>

            <a href="#gallery" className="nav-btn">
                Explore More ↗
            </a>
        </nav>
    );
}

export default Navbar;
