import React from "react";
import { Link } from "react-router-dom";
import style from "./header.css";
import Fontawesome from "react-fontawesome";

//components
import SideNav from "./SideNav/sideNav";

const Header = props => {
  // console.log(props);

  const logo = () => {
    return (
      <Link to="/">
        <img src="/images/nba_logo.png" alt="logo" />
      </Link>
    );
  };

  const bars = () => {
    return (
      <div className="bars">
        <Fontawesome name="bars" onClick={props.onOpenNav} />
      </div>
    );
  };

  return (
    <header className={style.header}>
      {/* side navigation */}
      <SideNav {...props} />

      {/* main header */}
      <div className={style.headerOpt}>
        <div className={style.bars}> {bars()} </div>
        <div>{logo()}</div>
      </div>
    </header>
  );
};

export default Header;
