import React from "react";
import SideNav from 'react-simple-sidenav';
import style from "./sideNav.css";

const sideNavigation = (props) => {


    return (
        <SideNav

            showNav={props.showNav}
            onHideNav={props.onHideNav}

            navStyle={{
                background: "#242424",
                maxWidth: "220px",
                color: "white"

            }}
        >

            OPTIONS

        </SideNav >
    )
}


export default sideNavigation;