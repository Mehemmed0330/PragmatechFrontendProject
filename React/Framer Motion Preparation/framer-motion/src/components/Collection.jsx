import React from 'react'
import "../css/Collection.css"
import picture from "../images/left-line-first.webp"
import picture2 from "../images/left-line-second.webp"
import picture3 from "../images/left-line-thrid.webp"
import picture4 from "../images/right-line-first.webp"
import picture5 from "../images/right-line-second.webp"
import item1 from "../images/item-picture-1.webp"
import item2 from "../images/item-picture-2.webp"
import item3 from "../images/item-picture-3.webp"

import end from "../images/end-line.webp"
import "../css/reset.css"


export default function Collection() {
    return (
        <div>
            <div style={{ boxSizing: "border-box", width: "100%", margin: "0px auto", padding: "40px" }}>
                <div className="collection-top">
                    <div className="collection-svg">
                        <svg width="40" height="40" viewBox='0 0 40 40' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.6312 40C29.4438 40 34.9681 35.9638 38.4405 29.8179L37.5199 29.271C34.9681 33.4899 29.9699 37.396 22.7885 37.396C11.8976 37.396 4.53189 28.568 4.53189 17.7607C4.53189 8.93242 9.45125 1.58875 18.8425 1.58875C25.8925 1.58875 32.6533 5.7293 35.6521 14.1148H35.8101L39.5454 11.9011C35.9678 3.67196 28.9177 0 21.1048 0C9.47737 0 0.454529 8.67189 0.454529 20.0002C0.454529 31.0678 9.21445 40 20.6312 40ZM11.1875 30.5731H27.7076L28.5496 27.995L28.3916 27.8386C24.2879 28.6202 20.763 29.1407 16.3959 29.3752L16.0277 27.4739V11.9533L17.7376 9.71374V9.50518H11.2136V9.71374L12.9237 11.9533V28.3075L11.1875 30.3387V30.5731ZM19.2633 25.1565H30.1542L31.0223 22.6823L30.8383 22.5001C28.576 23.2812 26.3659 23.9322 24.1302 24.2189L23.8407 22.5001V17.5782H26.5241L28.5232 18.9325H28.6809V15.2606H28.5232L26.5241 16.5886H23.8407V10.469H26.6029L30.4438 12.7607L30.6539 12.6305L30.1542 9.50518H19.2633V9.71374L20.7891 11.9533V22.6042L19.2633 25.0002V25.1565Z" fill='currentColor'></path>
                        </svg>
                    </div>
                    <div className="top-text">
                        <p>
                            Located above Crans-Montana mountain resort, on the edge of
                            a peaceful Alpine forest, LeCrans is a haven of warmth,
                            tranquillity and restoration. Bathed in the resplendent sunshine
                            and crystal-clear skies, it offers breath-taking views of the
                            highest peaks of the Swiss Alps
                        </p>
                    </div>
                </div>
                <div className="timeline">
                    <div className="left-about" style={{}}>
                        <div style={{ marginTop: "200px" }}>
                            <img src={picture} style={{ height: "700px" }} alt="" />
                            <ul style={{ listStyle: "inherit", padding: "20px", width: "60%" }}>
                                <li style={{ fontSize: "20px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                            </ul>
                            <img src={picture2} alt="" style={{ height: "250px", float: "right", margin: "190px 0px" }} />
                        </div>

                        <div style={{ margin: "60px 0px" }}>
                            <img src={picture3} alt="" style={{ height: "220px" }} />

                            <ul style={{ listStyle: "inherit", padding: "20px", width: "60%" }}>
                                <li style={{ fontSize: "20px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elitLorem, ipsum dolor sit amet c</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ position: "relative", width: "49%", display: "flex", justifyContent: "center" }}>
                        <div className="center-line">
                            <div className="line-text-first">
                                <p> In the heart of the Swiss Alps, outstanding views abound</p>
                            </div>
                            <div className="line-text-second">
                                <p> Exquisitely designed rooms far from the disturbances of everyday life</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-about" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                        <div className="right-inner">
                            <div className="item" style={{ width: "80%" }}>
                                <img src={picture4} style={{ height: "250px" }} alt="" />
                                <ul style={{ listStyle: "inherit", width: "100%" }}>
                                    <li style={{ fontSize: "22px", margin: "10px 0px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                                </ul>
                            </div>

                            <div className="item" style={{ width: "85%" }}>
                                <img src={picture5} style={{ height: "650px" }} alt="" />
                                <ul style={{ listStyle: "inherit", width: "100%" }}>
                                    <li style={{ fontSize: "22px", margin: "10px 0px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="end-timeline">
                    <img src={end} alt="" />

                </div>
                <div style={{ textAlign: "center", fontSize: "30px", fontFamily: "sans-serif", fontWeight: "600", margin: "20px 0px" }}>
                    <h1>The timeless luxury of a homely Alpine retreat</h1>
                    <button className="end-btn">Discover the Hotel</button>

                </div>


            </div>
            <section className="green-area">
                <div className="area-title">
                    One of the world’s most <br />  desirable locations
                </div>
                <div className="segment-parts">
                    <div className="left-segment">
                        <h1>
                            Perfectly situated for
                            an unforgettable
                            experience
                        </h1>
                        <p>
                            A superior, 5-star resort embodying
                            the very best of Swiss Alpine luxury,
                            tranquillity & sophistication.
                        </p>
                        <button className="area-btn">Discover Experience</button>
                    </div>
                    <div className="right-segment">
                        <video style={{ height: "420px" }} src="https://admin.lecrans.com/uploads/LC_video_8fd06db8af.mp4"></video>
                    </div>
                </div>
                <div className="area-items">
                    <div className="area-item">
                        <div className="item-img">
                            <img src={item1} alt="" />
                        </div>
                        <div className="item-title">
                            <h1>Wellness</h1>
                        </div>
                        <div className="item-text">
                            <p>A deeply personal experience at the heart of LeCrans, where each step is a new chapter in your wellness journey</p>
                        </div>
                        <button className="item-btn">Discover More</button>
                    </div>
                    <div className="area-item">
                        <div className="item-img">
                            <img src={item2} alt="" />
                        </div>
                        <div className="item-title">
                            <h1>Wellness</h1>
                        </div>
                        <div className="item-text">
                            <p>From panoramic helicopter flights to skiing, paragliding and more, we have something for every adventure enthusiast</p>
                        </div>
                        <button className="item-btn">Discover More</button>
                    </div><div className="area-item">
                        <div className="item-img">
                            <img src={item3} alt="" />
                        </div>
                        <div className="item-title">
                            <h1>Wellness</h1>
                        </div>
                        <div className="item-text">
                            <p>Indulge in an unforgettable gastronomic experience in one of the world’s most magical settings</p>
                        </div>
                        <button className="item-btn">Discover More</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
