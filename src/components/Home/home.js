import React from "react";
import NewsSlider from "../Widgets/NewsSlider/slider";

import NewsList from "../Widgets/NewsList/newslist";

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

      {/* List of videos */}



      {/* <VideosList /> */}
    </div>

  )
};

export default Home;
