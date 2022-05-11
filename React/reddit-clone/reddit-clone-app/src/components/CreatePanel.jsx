import React from 'react'
import { BsCardImage } from 'react-icons/bs'
import { FiLink } from "react-icons/fi"
import { useSelector } from "react-redux"
import { selectUser } from "../redux/features/userSlice"
import { Link } from 'react-router-dom'
import "../scss/createPanel.scss"



import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',

    },
    textField: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),

    },
}));

export default function CreatePanel() {
    const classes = useStyles();
    const user = useSelector(selectUser);

    return (
        <div style={{
            padding: "8px",
            backgroundColor: "#fff",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "16px",

        }}>
            <div className="create__panel">
                <div className="panel__profile--img">
                    <img src={user.pic} alt="" style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                    }} />
                </div>
                <div className="panel__input">
                    <Link to="/submit" style={{
                        textDecoration: "none"
                    }}>
                        <TextField
                            id="outlined-full-width"
                            style={{ margin: "8px, 0px" }}
                            placeholder="Create Post"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"

                        />
                    </Link>

                </div>
                <div className="panel__img">
                    <Link to="/submit" style={{
                        color: "#878a8c",

                    }}><BsCardImage style={{
                        fontSize: "20px",
                        cursor: "pointer",
                        fontWeight: "700"
                    }} /></Link>
                </div>
                <div className="panel__link">
                    <Link to="/submit" style={{
                        color: "#878a8c",

                    }}>
                        <FiLink style={{
                            fontSize: "20px",
                            cursor: "pointer"
                        }} />
                    </Link>

                </div>
            </div>
        </div>
    )
}
