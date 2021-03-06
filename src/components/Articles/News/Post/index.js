import React, { Component } from "react";
import axios from "axios";
import styles from "../../articles.css";


//import url 

import { URL } from "../../../../config";

//custom components
import Header from "./header";

class NewsArticle extends Component {

    state = {
        article: [],
        team: []
    }

    componentWillMount() {

        //mount stuff
        // console.log("mount stuff");
        let id = this.props.match.params.id;

        axios.get(`${URL}/articles?id=${id}`).then(response => {

            if (response.status === 200) {

                let article = response.data[0];

                // console.log(article);
                //fetch team
                axios.get(`${URL}/teams?id=${id}`).then(response => {

                    this.setState({
                        article,
                        team: response.data
                    })
                })
            }
        });

    }

    render() {


        let team = this.state.team[0];
        let article = this.state.article;

        const body = article.body
        const title = article.title;

        return (

            <div>
                <Header
                    team={team}
                    date={article.date}
                    author={article.author}
                />

                {/* render body here */}

                <div className={styles.articleWrapper}>

                    <h1> {title}</h1>
                    <div className={styles.articleImage} style={{
                        backgroundImage: `url(/images/articles/${article.image})`
                    }}></div>
                    <div className={styles.articleBody}>{body}</div>
                </div>
            </div>
        )
    }
}


export default NewsArticle;