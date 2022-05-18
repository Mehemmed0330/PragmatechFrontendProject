import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from 'react'
import Slider from "react-slick";
import { FaGooglePlay } from "react-icons/fa"
import { BsApple } from "react-icons/bs"
import Footer from "./Footer"

class CustomSlide extends Component {
    render() {
        const { index, ...props } = this.props;
        return (
            <div {...props}>
                <h3>{index}</h3>
            </div>
        );
    }
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
        />
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
        />
    );
}

export default function AutoPlay() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        autoplaySpeed: 4000,
        autoplay: true,


        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div>
            <div class="bg-yellow-300 flex flex-col justify-center" style={{ height: 'calc(100vh - 36px)' }} >
                <Slider {...settings}>
                    <div class="px-10" index={1}>
                        <div class="bg-sliderFirst bg-cover bg-center bg-no-repeat mx-2" style={{ height: "60vh" }} >
                            <div class="flex flex-col justify-center h-96 text-white leading-10	tracking-wide		">
                                <span class="text-center text-5xl	font-bold	">Lorem, ipsum.</span>
                                <p class="text-center text-2xl	">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                <p class="text-center text-base mt-2	">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non temporibus necessitatibus optio quibusdam explicabo esse illo, sequi placeat eligendi.</p>

                            </div>
                        </div>
                    </div>
                    <div class="px-10" index={2}>
                        <div class="bg-sliderSecond bg-cover bg-center bg-no-repeat mx-2" style={{ height: "60vh" }} >
                            <div class="flex flex-col justify-center h-96 text-white leading-10	tracking-wide		">
                                <span class="text-center text-5xl	font-bold	">Lorem, ipsum.</span>
                                <p class="text-center text-2xl	">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                <p class="text-center text-base mt-2	">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non temporibus necessitatibus optio quibusdam explicabo esse illo, sequi placeat eligendi.</p>

                            </div>
                        </div>
                    </div>
                    <div class="px-10" index={3}>
                        <div class="bg-sliderThred bg-cover bg-center bg-no-repeat mx-2" style={{ height: "60vh" }} >
                            <div class="flex flex-col justify-center h-96 text-white leading-10	tracking-wide		">
                                <span class="text-center text-5xl	font-bold	">Lorem, ipsum.</span>
                                <p class="text-center text-2xl	">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                <p class="text-center text-base mt-2	">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non temporibus necessitatibus optio quibusdam explicabo esse illo, sequi placeat eligendi.</p>

                            </div>
                        </div>
                    </div>
                    <div class="px-10" index={4}>
                        <div class="bg-sliderFourth bg-cover bg-center bg-no-repeat mx-2" style={{ height: "60vh" }} >
                            <div class="flex flex-col justify-center h-96 text-white leading-10	tracking-wide		">
                                <span class="text-center text-5xl	font-bold	">Lorem, ipsum.</span>
                                <p class="text-center text-2xl	">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                <p class="text-center text-base mt-2	">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non temporibus necessitatibus optio quibusdam explicabo esse illo, sequi placeat eligendi.</p>

                            </div>
                        </div>
                    </div>

                    {/* <div class="px-10" index={5}>
                    <div class="bg-red-400  mx-2 h-10">

                    </div>
                </div>
                <div class="px-10" index={6}>
                    <div class="bg-red-400  mx-2 h-10">

                    </div>
                </div> */}
                </Slider>
                <div class="flex py-4 justify-center mt-10">
                    <button class="flex items-center border-2 rounded-lg mx-2	 border-black px-3.5 py-4 text-black"><FaGooglePlay class="text-2xl" /> <span class="pl-2 font-semibold text-2xl">Google Play</span></button>
                    <button class="flex items-center border-2 rounded-lg mx-2	 border-black px-3.5 py-4 text-black"><BsApple class="text-2xl" /> <span class="pl-2 font-semibold text-2xl">App Store</span></button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
