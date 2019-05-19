import React, { Component } from "react";

//components
import Header from "../../components/Header/header";
import "./layout.css";

class Layout extends Component {
  state = {
    showNav: false
  };
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        Footer
      </div>
    );
  }
}

export default Layout;
