import React from "react";
import VideoList from "../../../Widgets/VideoList/videolist";


const MainVideos = () => {


    return <VideoList
        title={false}
        type="card"
        start={0}
        amount={10}
        loadMore={true} />
}


export default MainVideos;