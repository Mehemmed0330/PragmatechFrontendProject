import React from 'react'
import "../scss/features.scss"
import { MdOutlineCampaign } from 'react-icons/md'
import { Link } from "react-router-dom"
import Login from './Login'
import Signup from './Signup'
import Parameters from './Parameters'
import Notifications from './Notifications'
import Chat from "./Chat"
import { useState } from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/userSlice";
import CreatePost from "./CreatePost";

export default function Features() {
    const user = useSelector(selectUser);


    return (
        <div className="features">
            {user ? <Chat /> : null}
            {user ? <Notifications /> : null}
            {user ? <CreatePost /> : null}

            <Link to="/campaign" className="campaign__link">
                <MdOutlineCampaign style={{
                    color: "#121212",
                    fontSize: "24px",
                    margin: "3px 3px 3px 5px",
                    height: "20px",
                    fontWeight: "400"
                }} />
            </Link>
            {user ? null : <Login />}
            {user ? null : <Signup />}
            <Parameters />
            {/* {isRegister ? "" : <button onClick={() => setIsRegister((show) => !show)}>Log out</button>} */}
        </div>
    )
}
