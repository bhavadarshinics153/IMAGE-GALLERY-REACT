
import React from "react";

function ImageCard({ image, title, description, index }) {
    return (
        <div className="image-card">

            <div className="image-container">
                <img src={image} alt={title}/>

                <span className="image-number">
                    0{index}
                </span>

                <span className="image-arrow">↗</span>
            </div>

            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

        </div>
    );
}

export default ImageCard;
