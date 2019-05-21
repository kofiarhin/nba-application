import React from "react";
import { Link } from "react-router-dom";
import { currentYear } from "../../config";


//footer styling
import style from "./footer.css";

const footer = () => {

    const logo = () => {

        return (
            <Link to="/" className={style.logo}>
                <img src="/images/nba_logo.png" alt="logo" />
            </Link>
        )

    }

    const copyright = () => {

        return (<div> All rights reserved {currentYear}</div>)
    }

    return (

        <div className={style.footer}>
            {logo()}
            {copyright()}
        </div>
    )
}


export default footer;