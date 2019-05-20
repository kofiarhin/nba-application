import React from "react";
import { Link } from "react-router-dom";
import style from "./header.css";
import Fontawesome from "react-fontawesome";
const Header = () => {
  const logo = () => {
    return (
      <Link to="/">
        <img src="/images/nba_logo.png" />
      </Link>
    );
  };

  const bars = () => {
    return (
      <div className="bars">
        <Fontawesome name="bars" />
      </div>
    );
  };
  return (
    <header className={style.header}>
      <div className={style.headerOpt}>
        <div className={style.bars}>{bars()} </div>
        <div>{logo()}</div>
      </div>
    </header>
  );
};

export default Header;
