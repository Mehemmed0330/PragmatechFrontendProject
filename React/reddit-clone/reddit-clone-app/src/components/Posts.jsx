import React from 'react'
import CreatePanel from "./CreatePanel";
import ReactDOM from "react-dom";
import { useReducer, useState } from "react"

import { AiOutlineFire } from "react-icons/ai"
import { MdKeyboardArrowDown } from "react-icons/md"
import { TiStarburstOutline } from "react-icons/ti"
import { AiOutlineToTop } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"
import { AiOutlineRise } from "react-icons/ai"
import { FaLongArrowAltUp } from "react-icons/fa"
import { FaLongArrowAltDown } from "react-icons/fa"
import otherIcon from "../images/otherIcon.png"
import postImage from "../images/postImage.webp"
import { RotatingLines } from 'react-loader-spinner'
import { BiComment } from "react-icons/bi"
import { IoMdShareAlt } from "react-icons/io"
import { BsSave } from "react-icons/bs"
import { BiHide } from "react-icons/bi"
import { BsFlag } from "react-icons/bs"
import { useEffect } from "react"
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { selectUser } from "../redux/features/userSlice"
import "../scss/posts.scss"
import { fetchPosts, removePost } from "../redux/post/postActionCreators"
import { useNavigate } from "react-router-dom"


















const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

const HANDLE_LIKE = Symbol("HANDLE_LIKE");
const HANDLE_DISLIKE = Symbol("HANDLE_DISLIKE");
const initialState = {
    likes: 100,
    dislikes: 12,
    active: null
};

const reducer = (state, action) => {
    const { likes, dislikes, active } = state;

    switch (action.type) {
        case HANDLE_LIKE:
            return {
                ...state,
                likes: state.likes + 1,
                dislikes: active === "dislike" ? dislikes - 1 : dislikes,
                active: "like"
            };
        case HANDLE_DISLIKE:
            return {
                ...state,
                likes: active === "like" ? likes - 1 : likes,
                active: "dislike",
                dislikes: dislikes + 1
            };
        default:
            return state;
    }
};

export default function Posts() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { likes, dislikes, active } = state;


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    // const dispatch = useDispatch()
    const navigate = useNavigate()

    const [openDots, setOpenDots] = React.useState(false);
    const [openDotsPost, setOpenDotsPost] = React.useState(false);
    const user = useSelector(selectUser);


    const anchorRef = React.useRef(null);
    const anchorReff = React.useRef(null);
    const anchorPostRef = React.useRef(null);

    const { isLoading, posts } = useSelector(state => ({ isLoading: state.post.isLoading, posts: state.post.posts }), shallowEqual);
    useEffect(() => {
        if (isLoading) {
            dispatch(fetchPosts())
        }

    }, [isLoading, dispatch]);

    const myPosts = posts && posts?.filter(pst => pst?.postData?.createdBy === user?.id)




    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleToggleDots = () => {
        setOpenDots((prevOpenDots) => !prevOpenDots);
    };
    const handleToggleDotsPost = () => {
        setOpenDotsPost((prevopenDotsPost) => !prevopenDotsPost);
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const handleCloseDots = (event) => {
        if (anchorReff.current && anchorReff.current.contains(event.target)) {
            return;
        }

        setOpenDots(false);
    };

    const handleCloseDotsPost = (event) => {
        if (anchorPostRef.current && anchorPostRef.current.contains(event.target)) {
            return;
        }
        setOpenDotsPost(false);
    };
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }


    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);



    return (
        <div style={{
            margin: "0px auto",
            width: "73%",
            padding: "16px",
        }}>
            <div className="posts">
                {user ? <CreatePanel /> : <div className="top__posts">
                    <h1>Popular posts</h1>
                </div>}
                <div className="posts__parameters">
                    <div className="posts__parameters--inner">
                        <button className="hot__btn">
                            <AiOutlineFire style={{
                                fontSize: "20px",
                                padding: "0 8px 0 0",
                                height: "20px",
                                width: "20px"
                            }} />
                            <h1>Hot</h1>
                        </button>

                        <Button
                            ref={anchorRef}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                            className="location__btn"
                        >
                            <h1>Everywhere</h1>
                            <MdKeyboardArrowDown style={{
                                fontSize: "20px",
                                marginLeft: "2px",
                            }} />
                        </Button>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} style={{
                                                padding: "0px",
                                                maxHeight: "300px",
                                                overflowY: "scroll",
                                            }}>
                                                <MenuItem onClick={handleClose} className="drop__item">United State</MenuItem>
                                                <MenuItem onClick={handleClose} className="drop__item">Argentine</MenuItem>
                                                <MenuItem onClick={handleClose} className="drop__item">Australia</MenuItem>
                                                <MenuItem onClick={handleClose} className="drop__item">Bulgaria</MenuItem>
                                                <MenuItem onClick={handleClose} className="drop__item">Canada</MenuItem>
                                                <MenuItem onClick={handleClose} className="drop__item">Chile</MenuItem>  <MenuItem onClick={handleClose} className="drop__item">Profile</MenuItem>
                                                <MenuItem onClick={handleClose} className="drop__item">Colombia</MenuItem>
                                                <MenuItem onClick={handleClose} className="drop__item">Croatia</MenuItem>
                                                <MenuItem onClick={handleClose} className="drop__item">Greece</MenuItem>
                                                <MenuItem onClick={handleClose} className="drop__item">Hungary</MenuItem>
                                                <MenuItem onClick={handleClose} className="drop__item">Iceland</MenuItem>
                                                <MenuItem onClick={handleClose} className="drop__item">India</MenuItem>
                                                <MenuItem onClick={handleClose} className="drop__item">Poland</MenuItem>
                                                <MenuItem onClick={handleClose} className="drop__item">Portugal</MenuItem>



                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                        <button className="new__btn" >
                            <TiStarburstOutline style={{
                                fontSize: "20px",
                                padding: "0 8px 0 0",

                            }} />
                            <h1>New</h1>
                        </button>

                        <button className="top__btn">
                            <AiOutlineToTop style={{
                                fontSize: "20px",
                                padding: "0 8px 0 0",
                                fontWeight: "700",
                            }}
                            />
                            <h1>Top</h1>
                        </button>

                        <Button
                            ref={anchorReff}
                            aria-controls={openDots ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggleDots}
                        >
                            <BsThreeDots style={{
                                color: "#d5d6d7",
                                fontSize: "20px",
                                fontWeight: "700",
                            }} />
                        </Button>
                        <Popper open={openDots} anchorEl={anchorReff.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleCloseDots}>
                                            <MenuList autoFocusItem={openDots} id="menu-list-grow" onKeyDown={handleListKeyDown} style={{
                                                padding: "0px",
                                            }}>
                                                <MenuItem onClick={handleClose} className="drop__item">
                                                    <AiOutlineRise style={{
                                                        fontSize: "20px",
                                                        padding: "0 8px 0 0",
                                                        fontWeight: "700",
                                                        color: "#d5d6d7",
                                                        fontWeight: "700"
                                                    }} /> Rising
                                                </MenuItem>

                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                </div>
                {
                    isLoading ? <RotatingLines width="100" strokeColor="#FF5733" strokeWidth="1" /> : posts.length < 1 || myPosts.length < 1 ? <h1>No posts</h1> :
                        myPosts.map((pst, index) => (
                            <div div className="post" key={index} >
                                <div className="post__item" >
                                    <div className="post__item--inner" >
                                        <div className="post__vote">
                                            <FaLongArrowAltUp className="up__arrow" onClick={() =>
                                                active !== "like" ? dispatch({ type: HANDLE_LIKE }) : null
                                            } />
                                            <h1>{likes}</h1>
                                            <FaLongArrowAltDown className="down__arrow" onClick={() =>
                                                active !== "dislike" ? dispatch({ type: HANDLE_DISLIKE }) : null
                                            } />
                                        </div>
                                        <div className="post__view" >
                                            <div onClick={() => navigate(`/post/${pst.postId}`)}>
                                                <div className="post__about">
                                                    <div className="post__logo">
                                                        <img src={user.pic} alt="" />
                                                    </div>
                                                    <div className="post__group">
                                                        <h1>{user.name}</h1>
                                                    </div>
                                                    <div className="posted__by">
                                                        <h1>Posted by <span>{user.name}</span> </h1>
                                                    </div>
                                                    <div className="post__date">
                                                        <span>4 hours ago</span>
                                                    </div>
                                                </div>
                                                <div className="post__text">
                                                    <p>{pst.postData.title}</p>
                                                </div>
                                                <div className="post__image">
                                                    <img src={pst.postData.image} alt="" />
                                                </div>
                                                <div className="post__link">
                                                    <a href={pst.postData.link}>{pst.postData.link}</a>
                                                </div>
                                            </div>
                                            <div className="post__action">
                                                <div className="action__comment hover__action">
                                                    <BiComment className="action__icon " />
                                                    <h1>4.6k comments</h1>
                                                </div>
                                                <div className="action__share hover__action">
                                                    <IoMdShareAlt className="action__icon " />
                                                    <h1>Share</h1>
                                                </div>
                                                <div className="action__save hover__action">
                                                    <BsSave className="action__icon " />
                                                    <h1>Save</h1>
                                                </div>
                                                <Button
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
                                                </Button>
                                                <Popper open={openDotsPost} anchorEl={anchorPostRef.current} role={undefined} transition disablePortal>
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
                                                                        <MenuItem onClick={() => dispatch(removePost(pst.postId, pst.postData.image))} className="drop__item">
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
                                                </Popper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                }


            </div>


        </div >


    )
}
