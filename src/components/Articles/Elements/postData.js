import React from "react";
import styles from "../articles.css";

const PostData = (props) => {

    const date = props.data.date,
        author = props.data.author;

    return (

        <div className={styles.postData}>

            <div className={styles.date}> Date <span> {date}</span></div>
            <div className={styles.author}> Author <span> {author} </span> </div>
        </div>
    )
}


export default PostData;