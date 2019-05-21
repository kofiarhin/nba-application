import React from "react";
import { Link } from "react-router-dom";
import Slick from "react-slick";

import style from "./slider.css";

const sliderTemplate = (props) => {

    const data = props.data;


    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    let template = null;

    switch (props.type) {

        case "feature":
            template = props.data.map((current, index) => {

                return (
                    <div key={index}>
                        {/* image */}
                        <div className={style.feature_item}>
                            <div className={style.feature_image}
                                style={{
                                    background: `url(../images/articles/${current.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    zIndex: "-1"
                                }}
                            > </div>

                            <Link to={`/articles/${current.id}`}>
                                <div className={style.item_caption}>{current.title} </div>
                            </Link>
                        </div>
                    </div >
                )
            })
            break;
        default:
            template = null;
    }



    return <Slick {...settings}>
        {/* render template */}
        {template}

    </Slick>
}


export default sliderTemplate;