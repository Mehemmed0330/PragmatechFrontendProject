import React from 'react'

export default function Modal({ children }) {
    return (
        <div style = {{position:"absolute" , top:"50%" , translate:"-50% , -50%"}}>
            {children}
        </div>
    )
}