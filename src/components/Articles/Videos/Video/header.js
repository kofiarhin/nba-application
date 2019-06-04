import React from "react";
import TeamInfo from "../../Elements/teamInfo";


import styles from "../../articles.css";

const Header = (props) => {

    const renderTeamInfo = (team) => {

        return team ? <TeamInfo team={team} /> : null;
    }

    const renderVideo = () => {


        const video = props.video;

        return (

            <div className={styles.videoWrapper}>

                <h1> {video.title} </h1>

                <iframe
                    title="videoplayer"
                    width="100%"
                    height="300px"
                    src={`http://www.youtube.com/embed/${video.ur}`}
                > </iframe>


            </div>
        )
    }

    return (

        <div>
            {renderTeamInfo(props.team)}
            {renderVideo()}
        </div>
    )

}


export default Header;