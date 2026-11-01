
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import nature1 from "./images/nature1.jpeg";
import nature2 from "./images/nature2.jpeg";
import nature3 from "./images/nature3.jpeg";
import nature4 from "./images/nature4.jpeg";

function App() {

    const images = [
        {
            id: 1,
            image: nature1,
            title: "Mountain Escape",
            description: "Discover the peaceful beauty of mountains and nature."
        },
        {
            id: 2,
            image: nature2,
            title: "Forest Dreams",
            description: "Explore the magical beauty of green forests."
        },
        {
            id: 3,
            image: nature3,
            title: "Ocean Paradise",
            description: "Experience the endless beauty of blue oceans."
        },
        {
            id: 4,
            image: nature4,
            title: "Nature Wonders",
            description: "Find peace in the beautiful world of nature."
        }
    ];

    return (
        <>
            <Navbar />

            <section className="hero">
                <div className="hero-content">
                    <span className="hero-tag">THE BEAUTY OF NATURE</span>

                    <h1>
                        Explore The World <br />
                        Through <span>Our Lens.</span>
                    </h1>

                    <p>
                        A collection of beautiful moments, breathtaking
                        landscapes and the wonders of nature.
                    </p>

                    <a href="#gallery" className="hero-btn">
                        Explore Gallery <span>↗</span>
                    </a>
                </div>

                <div className="hero-bottom">
                    <span>CAPTURING MOMENTS · CREATING MEMORIES</span>
                    <span>SCROLL TO EXPLORE ↓</span>
                </div>
            </section>

            <Gallery images={images} />

            <Footer />
        </>
    );
}

export default App;
ReactDOM.createRoot(document.getElementById("root")).render(<App />);