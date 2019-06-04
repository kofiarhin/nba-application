import React, { Component } from "react";
import axios from "axios";
import { URL } from "../../../config";

//import Styling
import styles from "./videoList.css";
import Button from "../Buttons/buttons";

//import custom components

import VideoTemplate from "./videoTemplate";

class VideoList extends Component {


    state = {

        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount

    }


    componentWillMount = () => {


        //fetch list of videos

        axios.get(`${URL}/videos?_start=${this.state.start}&_end=${this.state.end}`).then(response => {

            this.setState({
                videos: [...this.state.videos, ...response.data]
            })
        });

        //fetch list of teams

        if (this.state.teams.length < 1) {

            axios.get(`${URL}/teams`).then(response => {

                this.setState({
                    teams: response.data
                })

            });
        }


    }


    renderTitle = () => {

        return this.props.title ? <h2 className={styles.title}><strong>NBA</strong> Videos </h2> : null;
    }

    renderVideos = () => {

        // return this.state.videos ? <VideoTemplate /> : "no videos"

        let template = null;
        switch (this.props.type) {

            case 'card':


                template = <VideoTemplate
                    data={this.state.videos}
                    teams={this.state.teams}
                />
                break;
            default:
                template = null;
                break;
        }

        // console.log(template);

        return template;

    }

    renderButton = () => {

        // console.log(this.props);

        return this.props.loadmore ? <div> Load More </div> : <Button type="linkTo" link="/videos" cta="More videos" />
    }

    render() {



        return (
            <div>
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        )
    }
}

export default VideoList;