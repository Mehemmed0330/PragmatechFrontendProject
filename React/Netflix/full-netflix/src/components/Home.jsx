import React from 'react';
import MiniSlider from "./Home/MiniSlider"
// import Item from "../components/Home/Item"
import useAPI from "./hook/api"
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SelectList } from "./redux/slices/lists"
import {useSelector} from "react-redux"
import BigSlider from "../components/Home/BigSlider"


const Home = () => {
    const list = useSelector(SelectList)
    console.log(list)

    return (
        <div style={{ padding: "0px 40px" }}>
            <BigSlider/>
            {list.map(s =>
                <MiniSlider key={s.id} title={s.name}
                    movies={s.results.map(s => ({ img: "https://image.tmdb.org/t/p/original/" + s.backdrop_path, title: s.title ?? s.name }))} />
            )}
        </div>
        
    );
}

export default Home;
