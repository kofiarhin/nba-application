import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//component

import Home from "./components/Home/home";
import Layout from "./hoc/Layout/layout";
import NewsArticle from "./components/Articles/News/Post/index";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>

          <Route path="/articles/:id" component={NewsArticle} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
