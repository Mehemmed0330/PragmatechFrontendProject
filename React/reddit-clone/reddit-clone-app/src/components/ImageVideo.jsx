import React from 'react'
import "../scss/imageVideo.scss"

export default function ImageVideo() {
    return (
        <div>
            <div className="image__area">
                <p>Drag and drop images or </p>
                <button className="image__upload">Upload</button>
            </div>
        </div>
    )
}
