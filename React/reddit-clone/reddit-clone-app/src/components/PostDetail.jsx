import React from 'react'
import { BsCardImage } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import { IoMdShareAlt } from 'react-icons/io'
import { BsSave } from 'react-icons/bs'
import { useParams } from 'react-router-dom'


import { selectUser } from "../redux/features/userSlice"
import { useSelector, shallowEqual } from "react-redux"
import "../scss/postDetail.scss"
import CommentForm from "./CommentForm"
import { useNavigate } from 'react-router-dom'

export default function PostDetail() {
    const { postId } = useParams()
    const navigate = useNavigate()

    const { isLoading, posts } = useSelector((state) => ({ isLoading: state.post.isLoading, posts: state.post.posts }), shallowEqual)
    const currentPost = posts?.length > 0 && posts?.find((pst) => pst?.postId === postId)
    const user = useSelector(selectUser);
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (!isLoading && currentPost === undefined) {
        return <div>Post not found</div>

    }

    return (
        <div style={{
            backgroundColor: "rgba(28,28,28,.9)",
            padding: "0px 70px",
        }}>
            <div className="postDetail">
                <div className="close" onClick={() => navigate("/")}>
                    <div className="close__about">
                        <BsCardImage style={{
                            color: "#D7DADC",
                            fontSize: "20px",

                        }} />
                        <p>{currentPost.postData.title}</p>
                    </div>
                    <div className="close__post">
                        <AiOutlineClose style={{
                            color: "#D7DADC",
                            fontSize: "20px",
                        }} />
                        <span>Close</span>
                    </div>
                </div>
                <div className="detail">
                    <div className="post__detail">
                        <div className="detail__view">
                            <div className="detail__about">
                                <div className="detail__logo">
                                    <img src={user.pic} alt="" />
                                </div>
                                <div className="detail__group">
                                    <h1>{user.name}</h1>
                                </div>
                                <div className="detail__by">
                                    <h1>Posted by <span>{user.name}</span> </h1>
                                </div>
                                {/* <div className="detail__date">
                                    <span>4 hours ago</span>
                                </div> */}
                            </div>
                        </div>
                        <div className="detail__about--post">
                            <span>{currentPost.postData.title}</span>
                            <p>{currentPost.postData.text}</p>
                        </div>
                        <div className="detail__image">
                            <img src={currentPost.postData.image} alt="" />
                        </div>
                        <div className="detail__actions">
                            <div className="detail__action hover__detail">
                                <BiComment className="detail__icon " />
                                <h1>4.6k comments</h1>
                            </div>
                            <div className="detail__action hover__detail">
                                <IoMdShareAlt className="detail__icon " />
                                <h1>Share</h1>
                            </div>
                            <div className="detail__action hover__detail">
                                <BsSave className="detail__icon " />
                                <h1>Save</h1>
                            </div>
                            {/* <Button
                            ref={anchorPostRef}
                            aria-controls={openDots ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggleDotsPost}
                        >
                            <BsThreeDots style={{
                                color: "#d5d6d7",
                                fontSize: "20px",
                                fontWeight: "700",
                            }} />
                        </Button> */}
                            {/* <Popper open={openDotsPost} anchorEl={anchorPostRef.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleCloseDotsPost}>
                                            <MenuList autoFocusItem={openDotsPost} id="menu-list-grow" onKeyDown={handleListKeyDown} style={{
                                                padding: "0px",
                                            }}>
                                                <MenuItem onClick={handleCloseDotsPost} className="drop__item">
                                                    <BiHide style={{
                                                        fontSize: "20px",
                                                        padding: "0 8px 0 0",
                                                        fontWeight: "700",
                                                        color: "#d5d6d7",
                                                        fontWeight: "700",
                                                        textAlign: "center"
                                                    }} />Hide

                                                </MenuItem>
                                                <MenuItem onClick={handleCloseDotsPost} className="drop__item">
                                                    <BsFlag style={{
                                                        fontSize: "20px",
                                                        padding: "0 8px 0 0",
                                                        fontWeight: "700",
                                                        color: "#d5d6d7",
                                                        fontWeight: "700",
                                                        textAlign: "center"

                                                    }} />Report
                                                </MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper> */}
                        </div>
                        <CommentForm currentPost={currentPost} />
                    </div>
                </div>
            </div>


        </div>
    )
}
