import React from "react";
import { Link } from "react-router-dom";

//import styling
import styles from "./videoList.css";


const VideoTemplate = (props) => {


    let template = null;

    switch (props.type) {

        case "card":

            let videos = props.videos;

            if (videos) {

                template = videos.map((current, index) => {

                    // console.log(current);

                    return (

                        <Link to={`/vidoes/${current.id}`} key={index}>
                            <div className={styles.link_wrapper}>
                                <img src={`/images/videos/${current.image}`} className={styles.link_image} />
                                {current.title}
                            </div>
                        </Link>
                    )

                });
            }
            break;

        default:
            template = null;
            break;
    }

    return (

        <div>{template}</div>
    )
}



export default VideoTemplate;