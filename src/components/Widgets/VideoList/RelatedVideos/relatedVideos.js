import React from "react";
import VideoTemplate from "../videoTemplate";

const RelatedVideo = (props) => {

    return (

        <VideoTemplate data={props.data} teams={props.teams} />
    )


}


export default RelatedVideo;