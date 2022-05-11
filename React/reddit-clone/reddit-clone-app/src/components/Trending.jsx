import React from 'react'
import Icon from "../images/communityIcon.png"
import "../scss/trending.scss"
import itemPicture2 from "../images/itemPicture2.webp"
import itemPicture3 from "../images/itemPicture3.webp"
import itemPicture4 from "../images/itemPicture4.webp"
import itemPicture5 from "../images/itemPicture5.webp"

export default function Trending() {
    return (
        <div style={{
            margin: "0px auto",
            width: "73%",
            padding: "16px",
        }}>
            <div className="trending__name">
                <span>Trending today</span>
            </div>
            <div className="trending__items">
                <div className="trending__item" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62), rgba(2, 2, 2, 0.66), #080707ab), url(${itemPicture2})` }}>
                    <div className="item__inner">
                        <div className="news__title">
                            <h1>Elon Musk</h1>
                        </div>
                        <div className="news__text">
                            <p>Elon Musk to join Twitter's board of directors</p>
                        </div>
                        <div className="group">
                            <div className="group__logo">
                                <img src={Icon} alt="" />
                            </div>
                            <div className="group__name">
                                <h1>r/place and more</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trending__item" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62), rgba(2, 2, 2, 0.66), #080707ab), url(${itemPicture3})` }}>
                    <div className="item__inner">
                        <div className="news__title">
                            <h1>Charles Darwin Notebooks</h1>
                        </div>
                        <div className="news__text">
                            <p>Charles Darwin notebooks worth millions, stolen from Cambridge University library 22 years ago, anonymously returned in pink gift bag in good condition</p>
                        </div>
                        <div className="group">
                            <div className="group__logo">
                                <img src={Icon} alt="" />
                            </div>
                            <div className="group__name">
                                <h1>r/UpliftingNews and more</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trending__item" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62), rgba(2, 2, 2, 0.66), #080707ab), url(${itemPicture4})` }}>
                    <div className="item__inner">
                        <div className="news__title">
                            <h1>Ketanji Jackson Brown</h1>
                        </div>
                        <div className="news__text">
                            <p>Lindsey Graham: If GOP controlled Senate, Ketanji Brown Jackson wouldn’t get a hearing</p>
                        </div>
                        <div className="group">
                            <div className="group__logo">
                                <img src={Icon} alt="" />
                            </div>
                            <div className="group__name">
                                <h1>r/place and more</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trending__item" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62), rgba(2, 2, 2, 0.66), #080707ab), url(${itemPicture5})` }}>
                    <div className="item__inner">
                        <div className="news__title">
                            <h1>Amazon Workers' Chat</h1>
                        </div>
                        <div className="news__text">
                            <p>Sanders Hails Growing Union Movement as Threat to 'Oligarchy and Corporate Greed' - "If you think that the union victories at Amazon and Starbucks are an aberration, you would be sorely mistaken," said the Vermont senator.</p>
                        </div>
                        <div className="group">
                            <div className="group__logo">
                                <img src={Icon} alt="" />
                            </div>
                            <div className="group__name">
                                <h1>r/place and more</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
