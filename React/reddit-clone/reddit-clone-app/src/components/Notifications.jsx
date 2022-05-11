import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import "../scss/notifications.scss"

export default function Notifications() {
    return (
        <div>
            <div className="notifications">
                <button className="notification__btn">
                    <div className="notification__num">
                        <span>2</span>
                    </div>
                    <IoMdNotificationsOutline />
                </button>
            </div>
        </div>
    )
}
