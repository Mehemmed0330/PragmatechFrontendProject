import React from 'react'
import Footer from "./Footer"
import { useState, useEffect } from "react"
import axios from "axios"


export default function BeDriver() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {


    }, []);

    const postData = (e) => {
        e.preventDefault();
        axios.post("http://144.91.97.115:9090/api/v1/driver/Account/RegisterConfirm", {
            "phoneNumber": phone,
            "email": email,
            "password": password,
            "firstname": name,
            "lastname": lastName,
            "driverLicenseBase64": "string",
            "narcalogyDispensaryLicenseBase64": "string",
            "driverPhoto": "string",
            "confirmationCode": "string",
            "smsSignature": "string"
        }).then(res => console.log("Posting data", res)).catch((err) => {

            if (err.response) {

                console.log("error1")
            } else if (err.request) {

                console.log("error2")
            } else if (err.message) {

                console.log("errro3")
            }
        })

    }


    return (
        <div>
            <div class="flex flex-col bg-driverImage bg-cover h-56 w-full bg-no-repeat mt-8  text-white justify-center align-middle	">
                <span class="text-center font-custom1 text-6xl	tracking-wide">Sürücü müsünüz?</span>
            </div>
            <div class="text-center font-custom1  tracking-wide leading-9 w-3/4 m-auto font-light py-24	">
                BiŞöför ile daha çok kazanın! Üstelik kullanmak çok kolay!
                <p>Yapmanız gereken tek şey, alttaki formu doldurmak. Sonrasında sizi en kısa zamanda arayarak kayıt işleminizi tamamlayacağız.
                </p>
            </div >
            <div>
                <input type="text" class="border-black border-2" placeholder="firstname" onChange={(e) => setName(e.target.value)} />
                <input type="text" class="border-black border-2" placeholder="lastname" onChange={(e) => setLastName(e.target.value)} />
                <input type="text" class="border-black border-2" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" class="border-black border-2" placeholder="phone" onChange={(e) => setPhone(e.target.value)} />
                <input type="text" class="border-black border-2" placeholder="password" onChange={(e) => setPassword(e.target.value)} />

                <button onClick={postData} class="border-black border-2">Post</button>
            </div>

            <Footer />
        </div >
    )
}
