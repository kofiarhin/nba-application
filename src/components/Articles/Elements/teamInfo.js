import React from "react";

//import styles
import styles from "../articles.css";

const TeamInfo = (props) => {

    // console.log(props);


    const logo = props.team.logo,
        teamName = props.team.name,
        wins = props.team.stats[0].wins,
        defeat = props.team.stats[0].defeats;
    // console.log(defeat);



    return (

        <div className={styles.teamHeaderWrapper}>

            <div className={styles.left} style={{
                height: "100px",
                width: "100px",
                backgroundImage: `url(/images/teams/${logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}>

            </div>
            <div className={styles.right}>
                <h2> {teamName} </h2>
                <div className={styles.stats}>

                    <p>W {wins} : L {defeat}</p>
                </div>

            </div>

        </div>
    )
}

export default TeamInfo;