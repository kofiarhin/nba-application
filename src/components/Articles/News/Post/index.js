import React, { Component } from "react";
import axios from "axios";


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


        return (


            <div>
                <Header team={team}
                    date={article.date}
                    author={article.author}
                />
                {/* <div>Footer Stuff</div> */}
            </div>
        )
    }
}


export default NewsArticle;