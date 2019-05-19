import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//components
import Routes from "./routes";
const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
