import React, { Component } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";


//import the css styling option
import style from "./newslist.css"


//importing the config file
import { URL } from "../../../config";


// import custom components

import CardInfo from "../../Widgets/CardInfo/cardInfo";
import Button from "../../Widgets/Buttons/buttons";

class NewsList extends Component {


    state = {

        items: [],
        teams: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount,
        type: this.props.type
    }


    componentWillMount() {

        this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {

        //get list of teams

        if (this.state.teams.length < 1) {
            axios.get(`${URL}/teams`).then(response => {

                this.setState({
                    teams: response.data
                });

            });
        }

        // console.log("get list of teams");

        //get data
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
            .then(response => {
                this.setState({
                    items: [...this.state.items, ...response.data]
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

                        <div className={style.news_item} key={index}>

                            <Link to={`/articles/${current.id}`}>

                                <CardInfo teams={this.state.teams} teamId={current.id} date={current.date} />
                                <div className={style.card}> {current.title} </div>
                            </Link>

                        </div>



                    )

                });
                break;

            default:
                template = null;
        }
        return template;

    }

    loadmore = () => {

        let end = this.state.end + this.state.amount;

        this.setState({
            start: end,
            end: end + this.state.amount
        });

        // console.log(this.state.start, end);

        this.request(this.state.end, end);
    }

    render() {


        return (


            <div className={style.news}>

                {this.renderNews(this.state.type)}

                {/* <div className={style.loadmore} onClick={() => this.loadmore()}> Load More </div> */}

                {/* create a button component with props of loadmore; type => card; onclick event load more newslist */}

                <Button

                    type="loadmore"
                    loadmore={() => this.loadmore()}
                    text="Load More"
                />
            </div>

        )
    }
}


export default NewsList;