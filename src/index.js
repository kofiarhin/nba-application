import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//componentss

import Header from "./components/header";

const App = () => {
  return <Header />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
