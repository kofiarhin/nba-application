import React from "react";
import { Link } from "react-router-dom";
import styles from "./videoList.css";

//custom template
import CardInfo from "../CardInfo/cardInfo";

const VideoTemplate = (props) => {

    // console.log(props.data);
    const template = props.data.map((current, index) => {

        const teamId = current.team;

        return (

            <Link to={`/videos/${current.id}`} key={index} className={styles.videoItem}>

                <div className={styles.left} style={{
                    height: "100px",
                    width: "100px",
                    backgroundImage: `url(/images/videos/${current.image})`
                }}> <div> </div> </div>

                <div className={styles.right}>

                    <CardInfo teams={props.teams} teamId={teamId} date={current.date} />
                    {current.title}

                </div>

            </Link>
        )

    });
    return (

        <div className={styles.videoWrapper}>{template}</div>
    )
}


export default VideoTemplate;