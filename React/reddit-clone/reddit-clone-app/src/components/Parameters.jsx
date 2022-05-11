import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AiOutlineUser } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import "../../src/scss/parametersBtn.scss"
import { BsMoon } from 'react-icons/bs'
import { MdOutlineCampaign } from 'react-icons/md'
import { ImCoinEuro } from 'react-icons/im'
import { HiOutlinePresentationChartLine } from 'react-icons/hi'
import { BsLightning } from 'react-icons/bs'
import { BiWebcam } from 'react-icons/bi'
import { RiWebcamLine } from 'react-icons/ri'
import { BiHelpCircle } from 'react-icons/bi'
import { IoIosLogIn } from 'react-icons/io'
import { GrLogout } from 'react-icons/gr'
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import FormGroup from '@material-ui/core/FormGroup';
import { withStyles } from '@material-ui/core/styles';
import { useState, useEffect } from "react"
import { auth, provider } from "../firebase";
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import App from "../App"


import { selectUser } from "../redux/features/userSlice";
import { useParams } from 'react-router-dom'

import FormControlLabel from '@material-ui/core/FormControlLabel';

import Switch from '@material-ui/core/Switch';
import { darkTheme, lightTheme } from "../theme/theme";
import { toggleTheme } from "../redux/theme/themeSlice";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'fixed',
        width: "850px",
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        borderRadius: "4px",
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: "650px",
        zIndex: "111",
        pointerEvents: "all",
        display: "flex",
    },
}));

const ParametersButton = withStyles({

    root: {
        boxShadow: 'none',
        border: '1px solid ',
        backgroundColor: 'inherit',
        borderColor: 'transparent',
        color: "#0079d3",
        borderRadius: '4px',
        minHeight: '32px',
        minWidth: '32px',
        padding: "2px 0px",
        marginLeft: "18px",

        '&:hover': {
            backgroundColor: 'transparent',
            borderColor: '#edeff1',
            boxShadow: 'none',
            outline: "none"
        },

    },
})(Button);

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
        borderRadius: '0px',
        left: "1160px !important",
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}

    />
));

const StyledMenuItem = withStyles({
    root: {
        paddingTop: '5px',
        paddingRight: '10px',
        paddingLeft: '0px',
        '&:hover': {
            backgroundColor: "#0079d3",
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: "white",
            },
        },

    },
})(MenuItem);


export default function Parameters() {
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    const classes = useStyles();

    const user = useSelector(selectUser);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isRegister, setIsRegister] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = React.useState(false);



    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };
    const handleCloseModal = () => {
        setAnchorEl(null);

    };
    const [state, setState] = React.useState({
        checkedB: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };


    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            auth.signOut();
        }
    }

    // console.log(user.name)



    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        isRegister ? handleRegister() : handleLogin()
    }
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(
                    login({
                        id: authUser.uid,
                        name: authUser.displayName ? authUser.displayName : authUser.email,
                        lastsignIn: authUser.metadata.lastSignInTime,
                        verified: String(authUser.emailVerified),
                        pic: authUser.photoURL
                            ? authUser.photoURL
                            : "https://lh3.googleusercontent.com/ogw/ADea4I5bHBJbpIvco4Yh1ARth7_gu4dl_QnpyDAU0NW8=s32-c-mo",
                    })
                );
            } else {
                dispatch(logout());
            }
        });
    }, [dispatch]);

    const handleLogin = () => {
        if (name && password !== "") {
            auth.signInWithEmailAndPassword(name, password).then((data) => alert("Login Successful")).catch((err) => alert(err.message))
        }
    }

    const handleSignInGoogle = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(login({
                userName: result.user.displayName,
                userEmail: result.user.email,
            }))
        })
    }

    const handleRegister = () => {
        if (name && password !== "") {
            auth.createUserWithEmailAndPassword(name, password).then((data) => alert("Register Successful")).catch((err) => alert(err.message))
        }
    }

    const body = (
        <div className={classes.paper}>
            <div className="left__image">
            </div>
            <div className="form">
                <div className="form__inner">
                    <div className="form__inner--top">
                        <h1>{isRegister ? "Sign up" : "Login"}</h1>
                        <p>By continuing, you agree to our User Agreement and Privacy Policy.</p>
                    </div>
                    <div className="form__brow">
                        <div className="brow__items">
                            <div className="brow__item" onClick={handleSignInGoogle}>
                                <div className="icon__brow" style={{
                                    height: "18px",
                                    width: "18px"
                                }}>
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>

                                </div>
                                <p>Continue with Google</p>
                            </div>
                            <div className="brow__item">
                                <div className="icon__brow" style={{
                                    height: "18px",
                                    width: "18px"
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M8.8162 4.15385C9.60444 4.15385 10.5925 3.60458 11.1809 2.87222C11.7138 2.20852 12.1024 1.28163 12.1024 0.354736C12.1024 0.228861 12.0913 0.102988 12.0691 0C11.192 0.0343293 10.1373 0.606484 9.50452 1.37317C9.00493 1.95677 8.54975 2.87222 8.54975 3.81055C8.54975 3.94787 8.57196 4.08519 8.58306 4.13096C8.63857 4.1424 8.72739 4.15385 8.8162 4.15385ZM6.04071 18C7.1176 18 7.59498 17.2562 8.93832 17.2562C10.3039 17.2562 10.6036 17.9771 11.8026 17.9771C12.9794 17.9771 13.7677 16.8557 14.5115 15.7572C15.3442 14.4984 15.6883 13.2626 15.7105 13.2053C15.6328 13.1825 13.3791 12.2327 13.3791 9.56643C13.3791 7.25493 15.1554 6.2136 15.2553 6.1335C14.0785 4.39415 12.2911 4.34838 11.8026 4.34838C10.4815 4.34838 9.40461 5.17228 8.72739 5.17228C7.99465 5.17228 7.02878 4.39415 5.88528 4.39415C3.70929 4.39415 1.5 6.24793 1.5 9.74952C1.5 11.9237 2.32155 14.2238 3.33183 15.7114C4.19778 16.9701 4.95271 18 6.04071 18Z" fill="black" />
                                    </svg>
                                </div>
                                <p>Continue with Apple</p>
                            </div>
                        </div>
                    </div>
                    <div className="line">
                        <div className="or">
                            <h1>or</h1>
                        </div>
                    </div>
                    <div className="form__inputs">
                        {isRegister ?

                            <><TextField label="USERNAME" variant="outlined" className="form__input" value={name} onChange={(e) => setName(e.target.value)} style={{ border: "1px solid black" }} />
                                <TextField label="PASSWORD" variant="outlined" className="form__input" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </>
                            : <><TextField label="USERNAME" variant="outlined" className="form__input" value={name} onChange={(e) => setName(e.target.value)} />
                                <TextField label="PASSWORD" variant="outlined" className="form__input" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </>


                        }
                    </div>
                    <div className="login__button">
                        <button className="login__btn--primary" onClick={handleSubmit}>{isRegister ? "Sign up" : "Login"}</button>
                    </div>
                    <div className="sign__sentence">
                        <p>{isRegister ? "New to Reddit? " : "Already sign up? "}  <span onClick={() => setIsRegister((show) => !show)}>
                            {isRegister ? "Login" : "Sign up"}
                        </span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );


    return (


        <div>
            {/* <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}> */}

            <ParametersButton
                onClick={handleClick}
                className="parameters__btn"
                style={{
                    // minWidth: "70px",
                    minWidth: user ? "213px" : "70px",
                    display: user ? "flex" : "",
                    justifyContent: user ? "space-between" : "",
                    padding: user ? "10px" : "",
                }}
            >
                <div style={{
                    display: "flex",
                    // alignItems: "center",
                }}>
                    {user ? <img src={user.pic} style={{
                        width: "20px",
                    }} /> : <AiOutlineUser style={{
                        fontSize: "24px",
                        color: "#878a8c",
                        width: "20px",
                        height: "20px",
                        fontWeight: "400",

                    }} />}
                    <span>{user ? user.name : ""}</span>
                </div>

                < IoIosArrowDown style={{
                    color: "#878a8c",
                    fontSize: "14px"
                }} />
            </ParametersButton>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseModal}

            >
                <ListItemText primary="VIEW OPTIONS" className="menu__top" />
                <StyledMenuItem >
                    <ListItemIcon className="list__icon">
                        <BsMoon />
                    </ListItemIcon>
                    <ListItemText primary="Dark Mode" className="menu__text" />
                    <Switch
                        checked={theme.darkTheme}
                        onChange={() => dispatch(toggleTheme())}
                        name="checkedB"
                        color="primary"
                    />

                </StyledMenuItem>

                <ListItemText primary="MORE STUFF" className="menu__top" />

                <StyledMenuItem>
                    <ListItemIcon className="list__icon">
                        <MdOutlineCampaign fontSize="20px" />
                    </ListItemIcon>
                    <ListItemText primary="Advertise on Reddit" className="menu__text" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon className="list__icon">
                        <ImCoinEuro fontSize="20px" />
                    </ListItemIcon>
                    <ListItemText primary="Coins" className="menu__text" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon className="list__icon">
                        <HiOutlinePresentationChartLine fontSize="20px" />
                    </ListItemIcon>
                    <ListItemText primary="Premium" className="menu__text" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon className="list__icon">
                        <BsLightning fontSize="20px" />
                    </ListItemIcon>
                    <ListItemText primary="Powerups" className="menu__text" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon className="list__icon">
                        <BiWebcam fontSize="20px" />
                    </ListItemIcon>
                    <ListItemText primary="Talk" className="menu__text" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon className="list__icon">
                        <RiWebcamLine fontSize="20px" />
                    </ListItemIcon>
                    <ListItemText primary="Predictions" className="menu__text" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon className="list__icon">
                        <BiHelpCircle fontSize="20px" />
                    </ListItemIcon>
                    <ListItemText primary="Help Center" className="menu__text" />
                </StyledMenuItem>
                {/* {user ? "" : <><StyledMenuItem style={{
                        borderTop: "1px solid #d3d4d5"
                    }}>
                        <ListItemIcon className="list__icon">
                            <GrLogout fontSize="20px" />
                        </ListItemIcon>
                        <ListItemText primary="Log In/Sign Up" className="menu__text" />
                    </StyledMenuItem></>} */}

                {user ? <> <StyledMenuItem onClick={handleLogout}>
                    <ListItemIcon className="list__icon">
                        <IoIosLogIn fontSize="20px" />
                    </ListItemIcon>
                    <ListItemText primary="Logout" className="menu__text" />
                </StyledMenuItem>
                    {/* {user ? <>  <App /> </> : null} */}

                </> : <> <StyledMenuItem onClick={handleOpen}>
                    <ListItemIcon className="list__icon">
                        <IoIosLogIn fontSize="20px" />
                    </ListItemIcon>
                    <ListItemText primary="Login/Logout" className="menu__text" />
                </StyledMenuItem>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {user ? <>  <App /> </> : body}

                    </Modal>
                </>}
            </StyledMenu>
            {/* </ThemeProvider> */}

        </div>

    );
}
