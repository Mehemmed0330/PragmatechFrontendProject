import React from 'react'

import { BsFileEarmarkPost } from "react-icons/bs"
import { BsImage } from "react-icons/bs"
import { makeStyles } from '@material-ui/core/styles';
import { RotatingLines } from 'react-loader-spinner'


import { FiLink } from "react-icons/fi"
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import PostAction from "./PostAction"
// import ImageVideo from "./ImageVideo"
// import PostLink from "./PostLink"

import Markdown from './Markdown'


import { shallowEqual, useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/userSlice";
import { useNavigate } from "react-router-dom";




import { useState, useEffect } from 'react';
import { doPost } from "../redux/post/postActionCreators"


// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: '25ch',
//     },
// }));

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

import "../scss/createPostArea.scss"
import Text from "./Text"


export default function CreatePostArea() {
    const navigate = useNavigate()

    const classes = useStyles();

    const [index, setIndex] = useState(0)
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState("");
    const [link, setLink] = useState("");
    const [progress, setProgress] = useState(0)
    const user = useSelector(selectUser, shallowEqual);
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title && !text && !link && !image) {
            alert("Please fill out the form")
        }
        // if (!image || image === undefined) {
        //     alert("Please upload an image")
        // }


        if (image.size > 5000000) {
            return alert("Image size should be less than 5mb")
        }
        const data = {
            author: user.name,
            title: title,
            text: text,
            image: "",
            link: link,
            comments: [],
            createdBy: user.id,

        }
        dispatch(doPost(data, image, setProgress))

        setTimeout(() => navigate("/"));
        // setIsLoading(true)
        // setTimeout(() => setIsLoading(false), 3000)

    }










    return (

        <div style={{
            minHeight: 'calc(100vh - 48px)',
            backgroundColor: '#dae0e6',
            display: "flex",
            justifyContent: "center"

        }
        }>
            {isLoading ? <RotatingLines width="100" strokeColor="#FF5733" strokeWidth="1" />
                : <div className="create__area">
                    <div className="area__title">
                        <h1>Create a post</h1>
                    </div>
                    <div className="area__drafts">
                        <div className="drafts__kind">
                            <div className="top__kind">
                                <button className="top__btn" onClick={() => setIndex(0)} style={{
                                    color: index === 0 ? '#0079d3' : '#878a8c',
                                    borderBottom: index === 0 ? '2px solid #0079d3' : '1px solid #edeff1',

                                }}>
                                    <BsFileEarmarkPost />
                                    <span>Post</span>
                                </button>
                            </div>
                            <div className="top__kind">
                                <button className="top__btn" onClick={() => setIndex(1)} style={{
                                    color: index === 1 ? '#0079d3' : '#878a8c',
                                    borderBottom: index === 1 ? '2px solid #0079d3' : '1px solid #edeff1',

                                }}>
                                    <BsImage />
                                    <span>Images & Video</span>
                                </button>
                            </div>
                            <div className="top__kind">
                                <button className="top__btn" onClick={() => setIndex(2)} style={{
                                    color: index === 2 ? '#0079d3' : '#878a8c',
                                    borderBottom: index === 2 ? '2px solid #0079d3' : '1px solid #edeff1',
                                }}>
                                    <FiLink />
                                    <span>Link</span>
                                </button>
                            </div>
                        </div>
                        <div className="describe__drafts">
                            <div className="describe__title">
                                <TextField
                                    id="outlined-full-width"
                                    style={{ margin: 0 }}
                                    placeholder="Title"
                                    value={title}
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="describe__component">


                                <div className="markdown" hidden={index != 0}>
                                    <div className="markdown__top">
                                        <Markdown />
                                    </div>
                                    <div className="markdown__area">
                                        <div style={{
                                            padding: "5px 10px",
                                        }}>
                                            <textarea className="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>

                                        </div>
                                    </div>


                                </div>

                                <div hidden={index != 1}>
                                    <div className="image__area" >
                                        <p>Drag and drop images or </p>

                                        <input
                                            accept="image/*"
                                            className={classes.input}
                                            id="contained-button-file"
                                            multiple
                                            type="file"
                                            onChange={(e) => setImage(e.target.files[0])}
                                        />
                                        <label htmlFor="contained-button-file">
                                            <Button variant="contained" color="primary" component="span" className="image__upload"
                                            >
                                                Upload
                                            </Button>
                                        </label>
                                        {/* <input type="file" name="image" onChange={(e) => setImage(e.target.value)} /> */}


                                    </div>
                                </div>



                                <div hidden={index != 2}>
                                    <textarea className="post__link" placeholder="URL" value={link} onChange={(e) => setLink(e.target.value)}></textarea>

                                </div>


                            </div>
                            <div>
                                <div className="action__post">
                                    <button className="post__btn post__btn--different">Cancel</button>

                                    <button className="post__btn" onClick={handleSubmit}>Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </div >
    )
}


