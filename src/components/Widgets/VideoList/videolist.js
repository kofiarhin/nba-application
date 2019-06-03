import React, { Component } from "react";
import axios from "axios";
import { URL } from "../../../config";

//import Styling
import styles from "./videoList.css";

//import custom components

import VideoTemplate from "./videoTemplate";

class VideoList extends Component {


    state = {

        teams: [],
        vidoes: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount

    }


    componentWillMount = () => {

        axios.get(`${URL}/videos?_start=${this.state.start}&_end=${this.state.end}`).then(response => {

            let videoData = response.data;



            if (this.state.teams.length < 1) {

                axios.get(`${URL}/teams`).then(response => {

                    this.setState({
                        teams: response.data,
                        videos: videoData
                    });


                })

            } else {

                this.setState({
                    videos: videoData
                })
            }



        });
    }

    renderTitle = () => {

        return this.props.title ? <h2 className={styles.title}><strong>NBA</strong> Videos </h2> : null;
    }
    render() {

        return (
            <div>
                {this.renderTitle()}
                <VideoTemplate videos={this.state.videos} teams={this.state.teams} type="card" />
            </div>
        )
    }
}

export default VideoList;