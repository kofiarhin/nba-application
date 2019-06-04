import React from "react";

//import styling
import style from "./cardInfo.css";

const CardInfo = (props) => {

    console.log(props);

    const getTeamName = () => {

        // console.log("some team name");

        const teamData = props.teams.find((current) => {

            return (current.id === props.teamId);
        });

        // console.log(teamData);

        if (teamData) {

            // console.log(teamData.name);

            return teamData.name;

        }
    }

    return <div className={style.cardInfo}>

        <p className={style.teamName}> {getTeamName()} </p>
        <p className={style.date}> {props.date}</p>


    </div>
}

export default CardInfo;