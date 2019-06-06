import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//component

import Home from "./components/Home/home";
import Layout from "./hoc/Layout/layout";
import NewsArticle from "./components/Articles/News/Post/index";
import VideoArticle from "./components/Articles/Videos/Video/index";
import MainNews from "./components/Articles/News/Main/index";
import MainVideos from "./components/Articles/Videos/Main/index";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>

          <Route path="/videos" exact component={MainVideos} />
          <Route path="/news" exact component={MainNews} />
          <Route path="/videos/:id" component={VideoArticle} />
          <Route path="/articles/:id" component={NewsArticle} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
