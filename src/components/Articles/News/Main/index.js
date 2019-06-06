import React from "react";
import NewsSlider from "../../../Widgets/NewsSlider/slider";
import NewsList from "../../../Widgets/NewsList/newslist";

const MainNews = () => {

    return (

        <div>

            <NewsSlider

                type="feature"
                loadMore={true}
                start={0}
                amount={3}
                settings={{
                    dots: false
                }}
            />

            <NewsList

                type="cardMain"
                start={3}
                amount={6}

            />

        </div>
    )

}


export default MainNews;