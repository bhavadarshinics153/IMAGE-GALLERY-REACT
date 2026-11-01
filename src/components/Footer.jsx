
import React from "react";

function Footer() {
    return (
        <footer className="footer" id="about">

            <div className="footer-content">
                <div>
                    <h2>Frame<span>.</span></h2>
                    <p>
                        Capturing the beauty of nature,
                        one picture at a time.
                    </p>
                </div>

                <div className="footer-right">
                    <a href="#">Home</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#about">About</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Frame Gallery. All Rights Reserved.</p>
                <p>MADE WITH ♥ USING REACT</p>
            </div>

        </footer>
    );
}

export default Footer;

