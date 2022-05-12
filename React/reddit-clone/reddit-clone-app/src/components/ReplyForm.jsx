import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doReply } from "../redux/post/postActionCreators"
import { selectUser } from "../redux/features/userSlice"
import ShowReplies from './ShowReplies'



export default function ReplyForm({ comment, currentPost, index }) {
    const dispatch = useDispatch()
    const user = useSelector(selectUser);

    const [openReplyForm, setOpenReplyForm] = useState(false);
    const [reply, setReply] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user) {
            if (!reply) {
                return alert("Please enter a comment")
            }

            const data = {
                name: user.name,
                reply,
                userId: user.id,
                replies: [],
                postOwner: currentPost.postData.createdBy === user.id,


            }
            dispatch(doReply(data, currentPost.postId, currentPost.postData.comments, index))
            setReply("")
        }
    }


    return (
        <div style={{
            display: "flex",
            alignItems: "center"
        }}>
            <ShowReplies allReplies={comment.replies} />
            {/* <p style={{
                display: `${comment.replies.length > 0 ? "block" : "none"}`,
            }}>{comment.replies.length}</p> */}
            {
                openReplyForm ?
                    <div style={{
                        // marginLeft: "10px",
                    }}>
                        <div className="reply__form">
                            <textarea name="" id="" cols="30" value={reply} onChange={(e) => setReply(e.target.value)}
                                style={{
                                    width: "100%",
                                    borderRadius: "10px",
                                    marginTop: "10px",
                                }}
                            ></textarea>
                        </div>
                        <div className="reply__button--group">
                            <button onClick={handleSubmit} style={{
                                backgroundColor: "transparent",
                                border: "none",
                                outline: "none",
                                border: "1px solid blue",
                                padding: "3px 10px",
                                borderRadius: "10px",
                                color: "blue"

                            }}>Reply</button>
                            <button onClick={() => setOpenReplyForm(false)} style={{
                                backgroundColor: "transparent",
                                border: "none",
                                outline: "none",
                                border: "1px solid blue",
                                padding: "3px 10px",
                                margin: "5px 50px",
                                borderRadius: "10px",
                                color: "blue"
                            }}>Cancel</button>
                        </div>
                    </div>
                    :
                    <button onClick={() => setOpenReplyForm(true)} style={{
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        border: "1px solid blue",
                        padding: "3px 10px",
                        marginTop: "5px",
                        marginLeft: "10px",
                        borderRadius: "10px",
                        color: "blue"


                    }}>Reply</button>
            }
        </div>
    )
}
