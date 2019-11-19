import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import '../style.css';
let biscut_image = [
    {
        path :"https://m.media-amazon.com/images/I/71Dgr0PuqoL._AC_UL320_ML3_.jpg",
        price:279,
        name:"Cadbury Celebrations Premium Assorted Chocolate Gift Pack, 286.3 g"
    },
    {
        path :"https://m.media-amazon.com/images/I/61JjkACMxIL._AC_UL320_ML3_.jpg",
        price:349,
        name:"Cadbury Dairy Milk Silk Miniatures Chocolate Gift Pack, 240 g"
    },
    {
        path :"https://m.media-amazon.com/images/I/51CwwII07bL._AC_UL320_ML3_.jpg",
        price:449,
        name:"Cadbury Dairy Milk Silk Oreo Chocolate Bar, 60g (Pack of 7)."
    },
    {
        path :"https://m.media-amazon.com/images/I/61KO84Gx6XL._AC_UL320_ML3_.jpg",
        price:320,
        name:"Cadbury Dairy Milk Silk Fruit and Nut Chocolate Bar, 2 x 137 g"
    },
    {
        path :"https://m.media-amazon.com/images/I/51xmJNjfbfL._AC_UL320_ML3_.jpg",
        price:165,
        name:"4700BC Nutty Tuxedo Chocolate Popcorn, Tin, 125g"
    },
    {
        path :"https://m.media-amazon.com/images/I/61UznSnDuwL._AC_UL320_ML3_.jpg",
        price:191,
        name:"Skittles Original Bite-size Fruit Candies Gift Pack, 204g (Pack of 3)"
    },
    {
        path :"https://m.media-amazon.com/images/I/71tJLvt96ZL._AC_UL320_ML3_.jpg",
        price:170,
        name:"Cadbury Choclairs Gold Candies Birthday Pack, 655.5 g"
    },
    {
        path :"https://m.media-amazon.com/images/I/916Lq9Pq-sL._AC_UL320_ML3_.jpg",
        price:108,
        name:"Cadbury Dairy Milk Chocolate Shots, 208.8 gm Carton (58 units x 3.6 gm)"
    },
    {
        path :"https://m.media-amazon.com/images/I/61l6FZThHoL._AC_UL320_ML3_.jpg",
        price:349,
        name:"Cadbury Dairy Milk Silk Pralines Chocolate Gift Box, 160g"
    },
    {
        path :"https://m.media-amazon.com/images/I/71yuS-hCv1L._AC_UL320_ML3_.jpg",
        price:25,
        name:"Recettes Gourmandes au chocolat (Les minis livres t. 1)"
    },
    {
        path :"https://m.media-amazon.com/images/I/610jbnLMKvL._AC_UL320_ML3_.jpg",
        price:250,
        name:"Brookside Exotic Chocolate Best Wishes Gift Pack "
    },
    {
        path :"https://m.media-amazon.com/images/I/81PV7e4a-sL._AC_UL320_ML3_.jpg",
        price:347,
        name:"Hershey's Kisses Milk Chocolate 150g"
    },
];
export default class Chocolate extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="container text-center main_div">
                    {biscut_image.map((image) => 
                        <Link to={{
                            pathname:"/singleproduct",
                            aboutProps : {
                                imgpath: image.path,
                                imgname: image.name,
                                imgprice: image.price
                            }
                        }}>
                        <div className="col-3 img_div">
                            <div>
                                <Image src={image.path} thumbnail/><br/>
                                <p>{image.name}</p>
                                <h5>Price: {image.price}</h5>
                            </div>
                        </div>
                        </Link>
                    )}
                </div>
                <Footer/>
            </div>
        );
    }
}