import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from "../redux/features/userSlice"


export default function ShowReplies({ allReplies }) {
    const dispatch = useDispatch()
    const user = useSelector(selectUser);

    const [replies, setReplies] = useState(false);
    return (
        <div>
            {replies &&
                <div className="replies__list">
                    {allReplies.map((reply, index) =>
                        <div className="comment__item" key={index} style={{
                            marginLeft: "50px",
                        }}>

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
                                <p>{reply.reply}</p>
                            </div>
                        </div>
                    )}
                </div>
            }
            <button onClick={() => setReplies((showReplies) => !showReplies)} style={{
                display: `${allReplies.length > 0 ? "block" : "none"}`,
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                border: "1px solid blue",
                padding: "3px 10px",
                margin: "5px 50px",
                borderRadius: "10px",
                color: "blue"
            }}>
                {replies ? "Hide Replies" : "Show Replies"}
                {allReplies.length}
            </button>
        </div>
    )
}
