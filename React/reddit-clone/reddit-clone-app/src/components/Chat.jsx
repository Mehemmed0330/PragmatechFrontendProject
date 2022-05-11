import React from 'react'
import { BsChatDots } from 'react-icons/bs'
import "../scss/chat.scss"

export default function Chat() {
    return (
        <div>
            <div className="chat">

                <button className="chat__btn">
                    <div className="chat__num">
                        <span>1</span>
                    </div>
                    <BsChatDots />
                </button>
            </div>
        </div>
    )
}
