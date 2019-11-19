import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import './style.css';
let images = [
    {
        id:"biscuits",
        path:"https://m.media-amazon.com/images/I/71rrlqZ--oL._AC_UL320_ML3_.jpg",
        link:"/biscuts"
    },
    {
        id:"womens_fashion",
        path:"https://m.media-amazon.com/images/I/817lcXuvlFL._AC_UL320_ML3_.jpg",
        link:"/womenwear"
    },
    {
        id:"mens_fashion",
        path:"https://m.media-amazon.com/images/I/412calVd-6L._AC_UL320_ML3_.jpg",
        link:"/menwear"
    },
    {
        id:"chocolate",
        path:"https://m.media-amazon.com/images/I/71TfBEc5R7L._AC_UL320_ML3_.jpg",
        link:"/chocolate"
    },
    {
        id:"mobile",
        path:"https://m.media-amazon.com/images/I/71CyW7YCRaL._AC_UL320_ML3_.jpg",
        link:"/mobile"
    },
    {
        id:"household",
        path:"https://m.media-amazon.com/images/I/61yLH24wFML._AC_UL320_ML3_.jpg",
        link:"/household"
    },
];
export default class HomePage extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="container banner">
                    <Image src="https://images.cdn3.stockunlimited.net/preview1300/mobile-shopping-banner_2022429.jpg" fluid thumbnail/>
                </div>
                <div className="container text-center">
                    {images.map((image) => 
                        <Link to={image.link} className="col-3 image_div">
                            <div>
                                <Image  className="images" src={image.path} thumbnail/><br/>
                                <span>{image.id}</span>
                            </div>
                        </Link>
                    )}
                </div>
                <Footer/>
            </div>
        );
    }
}
