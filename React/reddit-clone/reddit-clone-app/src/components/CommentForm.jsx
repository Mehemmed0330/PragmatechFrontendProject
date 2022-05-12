import React from 'react';
import "../scss/commentForm.scss"
import { selectUser } from "../redux/features/userSlice"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { useState } from "react"
import { doComment, removeComment } from "../redux/post/postActionCreators"
import ReplyForm from "./ReplyForm"

const Commentform = ({ currentPost }) => {
    const user = useSelector(selectUser);
    const [comment, setComment] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user) {
            if (!comment) {
                return alert("Please enter a comment")
            }

            const data = {
                name: user.name,
                comment,
                userId: user.id,
                replies: [],
                postOwner: currentPost.postData.createdBy === user.id,


            }
            dispatch(doComment(data, currentPost.postId, currentPost.postData.comments))
            setComment("")
        }
    }


    return (
        <div>
            <div className="detail__comment">
                <textarea name="" id="" cols="30" rows="10" value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <div className="comment__button">
                    <div className="comment__btn" onClick={handleSubmit}>
                        <span>Comment</span>
                    </div>
                </div>
            </div>
            <div className="comment__list">
                {currentPost.postData.comments.map((comment, index) =>
                    <div className="comment__item" key={index}>

                        <div style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <div className="comment__user">
                                <img src={user.pic} alt="" />
                            </div>
                            <div className="comment__user--name">
                                <h1>{user.name}</h1>
                            </div>
                        </div>
                        <div className="comment__text">
                            <p>{comment.comment}</p>
                        </div>
                        <ReplyForm comment={comment} currentPost={currentPost} index={index} />

                        {/* {user.name && currentPost.postData.createdBy === user.id &&
                            <div className="comment__delete">
                                <button onClick={() => dispatch(removeComment(currentPost.postData.comment))}>Delete</button>
                            </div>} */}
                    </div>
                )}

            </div>
        </div>
    );
}

export default Commentform;
