import React from "react";
import NewsSlider from "../Widgets/NewsSlider/slider";

import NewsList from "../Widgets/NewsList/newslist";
import VideoList from "../Widgets/VideoList/videolist";

const Home = () => {
  return (
    <div>

      {/* List of  news  */}
      <NewsSlider

        type="feature"
        start={0}
        amount={3}
        settings={{
          dots: true
        }}
      />

      <NewsList
        type="card"
        loadmore={true}
        start={3}
        amount={3}

      />


      <VideoList

        type="card"
        title={true}
        start={0}
        amount={6}
        loadMore={false}

      />

    </div>

  )
};

export default Home;
