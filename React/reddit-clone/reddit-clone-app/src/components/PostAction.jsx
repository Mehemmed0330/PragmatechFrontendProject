import React from 'react'
import "../scss/postAction.scss"

export default function PostAction({ title }) {
    const handleSubmit = () => {
        console.log(title)
    }
    return (
        <div>
            <div className="action__post">
                <button className="post__btn post__btn--different">Cancel</button>

                <button className="post__btn" onClick={handleSubmit}>Post</button>
            </div>
        </div>
    )
}
