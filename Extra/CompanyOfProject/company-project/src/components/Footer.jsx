import React from 'react'
import Logo from "../assets/Logo.svg"

export default function Footer() {
    return (
        <div class="bg-black ">
            <div class="flex justify-between  pr-8">
                <div>
                    <img src={Logo} alt="" class="w-48" />
                </div>
                <div>
                    <div>
                        <div class="text-3xl font-medium text-white">Ofis ünvanı</div>
                        <div class="text-lg text-white">Lorem, ipsum dolor.</div>
                    </div>
                    <div class="mt-5">
                        <div class="text-3xl font-medium text-white	">Ofis işi</div>
                        <div>
                            <div class="text-lg text-white">lorem ipsum dolar</div>
                            <div class="text-lg text-white">lorem ipsum dolar</div>
                            <div class="text-lg text-white">lorem ipsum dolar</div>
                        </div>
                    </div>
                </div>

                <div class="leading-8">
                    <div class="text-white">Lorem ipsum dolar</div>
                    <div class="text-white">Lorem ipsum dolar</div>
                    <div class="text-white">Lorem ipsum dolar</div>
                    <div class="text-white">Lorem ipsum dolar</div>
                    <div class="text-white">Lorem ipsum dolar</div>
                </div>
                <div>
                    <div class="text-white">Lorem ipsum dolar</div>
                    <div class="text-white">Lorem ipsum dolar</div>
                </div>
            </div>
        </div>
    )
}
