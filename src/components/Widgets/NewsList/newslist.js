import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import axios from "axios";

import style from "./newslist.css"

import { URL } from "../../../config";



class NewsList extends Component {


    state = {

        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount,
        type: this.props.type
    }


    componentWillMount() {

        //get data
        axios.get(`${URL}/articles?_start=${this.state.start}&_end=${this.state.end}`)
            .then(response => {
                this.setState({
                    items: response.data
                })
                // console.log(this.state.items);
            });

    }

    renderNews = (type) => {

        let template = null;

        switch (type) {

            case "card":
                template = this.state.items.map((current, index) => {

                    return (
                        <div className={style.card} key={index}> {current.title} </div>
                    )

                });
                break;

            default:
                template = null;
        }


        return template;

    }

    loadmore = () => {

        //get url
        this.setState({

            start: this.state.end,
            end: this.state.end + this.props.amount
        });

        axios.get(`${URL}?_start=${this.state.start}&_end=${this.state.end}`).then(response => {

            this.setState({
                items: [...this.state.items, ...response.data]
            });

            //console.log(this.state.items);

        });
    }

    render() {


        return <div className={style.news}>

            {this.renderNews(this.state.type)}

            <div className={style.loadmore} onClick={() => this.loadmore()}> Load More </div>
        </div>
    }
}


export default NewsList;