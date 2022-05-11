import React from 'react'
import Markdown from './Markdown'
import { useState, useEffect } from 'react'
import "../scss/text.scss"

export default function Text() {
    // const [state, setState] = useState();
    // const { text } = state;
    return (
        <div>
            <div className="markdown">
                <div className="markdown__top">
                    <Markdown />
                </div>
                <div className="markdown__area">
                    <div style={{
                        padding: "5px 10px",
                    }}>
                        <textarea className="text" ></textarea>

                    </div>
                </div>
            </div>
        </div>
    )
}
