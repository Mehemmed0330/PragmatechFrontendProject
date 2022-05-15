import React from 'react'
import { Link, } from "react-router-dom"
import Logo from "../images/logo.png"


export default function Header() {
    const Links = [
        { name: "Ana Sayfa", path: "/" },
        { name: "Hakkımızda", path: "/about" },
        { name: "Hizmetler", path: "/services" },
        { name: "BiŞöför", path: "/beDriver" },
    ]
    return (
        <div class="bg-yellow-400 ">
            <div class="px-8 py-4">
                <div class="flex items-center justify-between">

                    <div class="">
                        <ul class="flex items-center text-white font-custom1 font-semibold md:pl-10	">
                            {Links.map((link, index) =>
                                <Link to={`${link.path}`} class="mx-3 p-2 hover:bg-white hover:text-yellow-400 transition ease-in">{link.name}</Link>

                            )}
                        </ul>
                    </div>
                    <div class="">
                        <img src={Logo} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}
