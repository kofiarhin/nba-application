import React from "react";
import { Link } from "react-router-dom";
import styles from "./buttons.css";

const Button = (props) => {

    const renderButton = () => {

        let template = null;

        switch (props.type) {
            case "loadmore":
                template = <div className={styles.loadmore} onClick={props.loadmore}> Load More </div>
                break;
            case "linkTo":
                // console.log(props);
                template = <Link to={props.link} className={styles.btn}> {props.cta}</Link>
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