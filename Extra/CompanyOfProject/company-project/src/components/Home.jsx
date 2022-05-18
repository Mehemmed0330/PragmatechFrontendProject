import React from 'react'
import Footer from "./Footer"
import { FaGooglePlay } from "react-icons/fa"
import { BsApple } from "react-icons/bs"

export default function Home() {
    return (
        <div>
            <div class="flex flex-col justify-center align-center bg-homeImage  bg-cover bg-center bg-no-repeat " style={{ height: 'calc(100vh - 136px)' }} >
                <div class="text-center text-custom1 text-white font-bold text-3xl leading-relaxed	">
                    Programı kur <br /> <span class="font-light	">ve operatörle konuşmadan taksi sifariş et</span>
                </div>
                <div class="flex py-4 justify-center">
                    <button class="flex items-center border-2 rounded-lg mx-2	 border-white px-3.5 py-4 text-white"><FaGooglePlay class="text-2xl" /> <span class="pl-2 font-semibold text-2xl">Google Play</span></button>
                    <button class="flex items-center border-2 rounded-lg mx-2	 border-white px-3.5 py-4 text-white"><BsApple class="text-2xl" /> <span class="pl-2 font-semibold text-2xl">App Store</span></button>
                </div>
            </div >
            <Footer />
        </div>

    )
}
