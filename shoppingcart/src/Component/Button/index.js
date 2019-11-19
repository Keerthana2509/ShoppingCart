import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import './style.css';

export default class Base extends Component {
    render() {
        return(
                <Button className="space" variant= {this.props.variant} onClick={this.props.click}>
                    {this.props.text} 
                </Button>
        );
    }
}