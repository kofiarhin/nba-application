import React from "react";
import style from "./buttons.css";

const Button = (props) => {

    const renderButton = () => {

        let template = null;

        switch (props.type) {
            case "loadmore":
                template = <div className={style.loadmore} onClick={props.loadmore}> Load More </div>
                break;

            default:
                template = null;
                break;
        }

        return template;
    }

    return <div> {renderButton()} </div>
}

export default Button;