import React, { Component } from "react";
import axios from "axios";

import { URL } from "../../../../config";

import styles from "../../articles.css";
//custom components
import Header from "./header";

class VideoArticle extends Component {

    state = {
        video: [],
        team: []
    }

    componentWillMount() {

        //get the id
        const id = this.props.match.params.id;

        axios.get(`${URL}/videos?id=${id}`).then(response => {

            const video = response.data[0];

            axios.get(`${URL}/teams?id=${video.team}`).then(response => {

                this.setState({

                    video,
                    team: response.data
                });

            });
        })
    }

    renderVideo = () => {

        const video = this.state.video;

        const title = video.title;
        const url = video.url;

        return (

            <div className={styles.content}>
                <h1>{title}</h1>
                <iframe

                    title="videoplayer"
                    width="100%"
                    height="300px"
                    src={`http://www.youtube.com/embed/${url}`}
                > </iframe>
            </div>

        )
    }

    render() {

        return (

            <div className={styles.videoWrapper}>
                <Header
                    video={this.state.video}
                    team={this.state.team[0]}
                />

                {this.renderVideo()}
            </div>



        )
    }
}


export default VideoArticle;