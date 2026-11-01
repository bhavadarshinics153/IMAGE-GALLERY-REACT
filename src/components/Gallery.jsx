
import React, { useState } from "react";
import ImageCard from "./ImageCard";

function Gallery({ images }) {

    const [search, setSearch] = useState("");

    const filteredImages = images.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="gallery-section" id="gallery">

            <div className="gallery-header">
                <div>
                    <span className="section-tag">OUR COLLECTION</span>
                    <h2>Discover Nature</h2>
                    <p>Beautiful views. Unforgettable moments.</p>
                </div>

                <div className="search-box">
                    <span>⌕</span>
                    <input
                        type="text"
                        placeholder="Search images..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="gallery-grid">

                {filteredImages.length > 0 ? (
                    filteredImages.map((item, index) => (
                        <ImageCard
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            index={index + 1}
                        />
                    ))
                ) : (
                    <p className="no-results">
                        No images found.
                    </p>
                )}

            </div>

            <div className="gallery-count">
                Showing {filteredImages.length} of {images.length} images
            </div>

        </section>
    );
}

export default Gallery;
