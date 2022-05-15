import React from 'react'
import Logo from "../images/logo.png"
import QrCode from "../images/qrCode.jpg"
import { FaFacebookF } from "react-icons/fa"
import { GrTwitter } from "react-icons/gr"
import { AiFillInstagram } from "react-icons/ai"
import { BsYoutube } from "react-icons/bs"
import { Link } from "react-router-dom"
import { BsFillTelephoneFill } from "react-icons/bs"
export default function Footer() {
    return (
        <div class="bg-yellow-400 py-10 ">
            <div class="flex  justify-between px-8">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <img src={QrCode} alt="" class="w-11/12	" />
                </div>
                <div>
                    <div class="flex justify-between">
                        <FaFacebookF class="text-xl text-white hover:text-black  cursor-pointer mx-3" />
                        <GrTwitter class="text-xl text-white hover:text-black  cursor-pointer mx-3" />
                        <AiFillInstagram class="text-xl text-white hover:text-black  cursor-pointer mx-3" />
                        <BsYoutube class="text-xl text-white hover:text-black  cursor-pointer mx-3" />
                    </div>
                    <div class="flex justify-around mt-3">
                        <ul class="list-disc flex flex-col" >
                            <Link to="" class="font-medium">Lorem</Link>
                            <Link to="" class="font-medium">Lorem</Link>
                            <Link to="" class="font-medium">Lorem</Link>
                            <Link to="" class="font-medium">Lorem</Link>
                        </ul>
                        <ul class="list-disc flex flex-col" >
                            <Link to="" class="font-medium">Lorem</Link>
                            <Link to="" class="font-medium">Lorem</Link>
                            <Link to="" class="font-medium">Lorem</Link>
                            <Link to="" class="font-medium">Lorem</Link>
                        </ul>
                    </div>

                </div>
                <div>
                    <span class="flex items-center	"><BsFillTelephoneFill class="mx-2 text-white" /> 0850 333 47 00</span>
                </div>
            </div>
        </div>
    )
}
