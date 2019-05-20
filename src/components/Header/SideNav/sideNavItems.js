import React from "react";
import { Link } from "react-router-dom";
import Fontawesome from "react-fontawesome";
import style from "./sideNav.css";

const SideNavItems = props => {
  const items = [
    {
      type: style.option,
      icon: "home",
      text: "Home",
      link: "/"
    },

    {
      type: style.option,
      icon: "file-text-o",
      text: "News",
      link: "/news"
    },

    {
      type: style.option,
      icon: "play",
      text: "Videos",
      link: "/videos"
    },

    {
      type: style.option,
      icon: "sign-in",
      text: "Sign In",
      link: "/sign-in"
    },

    {
      type: style.option,
      icon: "sign-out",
      text: "Sign Out",
      link: "/sign-out"
    }
  ];

  const showItems = () => {
    const itemList = items.map((current, index) => {
      return (
        <div key={index} className={style.option}>
          <Link to={current.link}>
            <Fontawesome name={current.icon} />
            {current.text}
          </Link>
        </div>
      );
    });

    return itemList;
  };
  //

  return <div className={style.options}>{showItems()}</div>;
};

export default SideNavItems;
