import React, { Component } from "react";
import axios from "axios";


//components

import SliderTemplate from "./sliderTemplate";

class NewsSlider extends Component {

    state = {

        news: []
    }

    componentWillMount() {

        axios.get(`http://localhost:3004/articles?_start=0&_end=3`).then(response => {

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

        return <SliderTemplate data={this.state.news} type="feature" />
    }
}


export default NewsSlider;