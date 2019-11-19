import React, { Component } from "react";
import './style.css';

export default class List extends Component {
    render() {
        return(
            <ul>
                {this.props.listItems.map((steps) => <li className="list">{steps}</li>)}
            </ul>
        );
    }
}