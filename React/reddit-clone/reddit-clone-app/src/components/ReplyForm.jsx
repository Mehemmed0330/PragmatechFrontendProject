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
        <div>
            <ShowReplies allReplies={comment.replies} />
            {/* <p style={{
                display: `${comment.replies.length > 0 ? "block" : "none"}`,
            }}>{comment.replies.length}</p> */}
            {
                openReplyForm ?
                    <div>
                        <div className="reply__form">
                            <textarea name="" id="" cols="30" rows="10" value={reply} onChange={(e) => setReply(e.target.value)}></textarea>
                        </div>
                        <div className="reply__button--group">
                            <button onClick={handleSubmit}>Reply</button>
                            <button onClick={() => setOpenReplyForm(false)}>Cancel</button>
                        </div>
                    </div>
                    :
                    <button onClick={() => setOpenReplyForm(true)}>Reply</button>
            }
        </div>
    )
}
