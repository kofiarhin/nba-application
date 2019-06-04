import React, { Component } from "react";
import axios from "axios";

import { URL } from "../../../../config";


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

        return <div> render video </div>
    }
    render() {

        return (

            <Header
                video={this.state.video}
                team={this.state.team[0]}
            />
        )
    }
}


export default VideoArticle;