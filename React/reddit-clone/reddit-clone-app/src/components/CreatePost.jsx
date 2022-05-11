import React from 'react';
import "../scss/createPost.scss"
import { GrAdd } from "react-icons/gr";
const CreatePost = () => {
    return (
        <div>
            <div className="post__add">
                <button className="add__btn">
                    <GrAdd style={{ color: "#1a1a1b" }} />
                </button>
            </div>
        </div>
    );
}

export default CreatePost;
