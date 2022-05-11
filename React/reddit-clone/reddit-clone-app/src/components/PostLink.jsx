import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import "../scss/postLink.scss"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

export default function PostLink() {
    const classes = useStyles();

    return (
        <div>
            <textarea className="post__link" placeholder="URL"></textarea>
        </div>
    )
}
