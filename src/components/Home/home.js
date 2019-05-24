import React from "react";
import NewsSlider from "../Widgets/NewsSlider/slider";

import NewsList from "../Widgets/NewsList/newslist";

const Home = () => {
  return (
    <div>
      <NewsSlider />
      <NewsList
        type="card"
        loadmore={true}
        start={3}
        amount={3}

      />
    </div>

  )
};

export default Home;
