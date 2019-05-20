import React from "react";
import SideNav from 'react-simple-sidenav';
// import style from "./sideNav.css";


//components
import SideNavItems from "./sideNavItems";

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

            <SideNavItems {...props} />

        </SideNav >
    )
}


export default sideNavigation;