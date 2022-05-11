import React from 'react'
import Trending from "./Trending"
import Posts from "./Posts"
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/userSlice";
export default function Home() {
    const user = useSelector(selectUser);
    return (
        <div style={{
            minHeight: 'calc(100vh - 48px)',
            backgroundColor: '#dae0e6',
        }}>

            {user ? null : <Trending />}
            <Posts />
        </div >
    )
}
