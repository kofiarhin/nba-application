import React, { Component } from "react";
import axios from "axios";
import { URL } from "../../../config";


//components

import SliderTemplate from "./sliderTemplate";

class NewsSlider extends Component {

    state = {

        news: []
    }

    componentWillMount() {


        // console.log(URL);

        axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`).then(response => {

            //if there is a response
            if (response.status === 200) {

                //fetch data and set to news state
                this.setState({
                    news: response.data
                });

                // console.log(response.data);

            }
        })

    }

    render() {

        return <SliderTemplate data={this.state.news} type={this.props.type} settings={this.props.settings} />
    }
}


export default NewsSlider;