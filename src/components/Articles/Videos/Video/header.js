import React from "react";
import TeamInfo from "../../Elements/teamInfo";


import styles from "../../articles.css";

const Header = (props) => {

    const renderTeamInfo = (team) => {

        return team ? <TeamInfo team={team} /> : null;
    }



    return (

        <div>
            {renderTeamInfo(props.team)}

        </div>
    )

}


export default Header;