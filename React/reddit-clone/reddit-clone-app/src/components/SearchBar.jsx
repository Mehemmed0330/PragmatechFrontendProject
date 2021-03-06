import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import "../scss/search.scss"
const useStyles = makeStyles((theme) => ({

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 1),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
        paddingRight: `calc(1rem + ${theme.spacing(1)}px)`,

        transition: theme.transitions.create('width'),
        width: '600px',

    },
}));

export default function SearchBar() {
    const classes = useStyles();

    return (

        <div style={{
            width: '820px',
        }}>
            <Toolbar style={{
                minHeight: '36px',
                padding: '0px 0px 0px 0px',
                width: '670px',
                margin: "0px auto"


            }} className="toolbar"
            >
                <div className={classes.search} style={{
                }}>
                    <div className={classes.searchIcon}>
                        <SearchIcon style={{ color: "#dae0e7" }} />
                    </div>
                    <InputBase
                        placeholder="Search Reddit"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,

                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        style={{
                            color: "#1c1c1c",
                        }}
                    />
                </div>
            </Toolbar>
        </div>
    )
}
