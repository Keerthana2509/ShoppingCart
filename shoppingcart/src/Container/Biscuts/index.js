import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import '../style.css';
let biscut_image = [
    {
        path :"https://m.media-amazon.com/images/I/61f438ZhWAL._AC_UL320_ML3_.jpg",
        price:250,
        name:"BournVita ,120gm (Pack of 10)"
    },
    {
        path:"https://m.media-amazon.com/images/I/712E-QbrE8L._AC_UL320_ML3_.jpg",
        price:264,
        name:"Cadbury Oreo Vanilla Crème Biscuit Family Pack, 300 gm (Pack of 4)"
    },
    {
        path:"https://m.media-amazon.com/images/I/710+OXfviTL._AC_UL320_ML3_.jpg",
        price:40,
        name:"Parle Hide and Seek Chocolate Chip Cookies, 200g"
    },
    {
        path:"https://m.media-amazon.com/images/I/61S+3QYd7SL._AC_UL320_ML3_.jpg",
        price:89,
        name:"Dark Fantasy Choco Fills, 300g"
    },
    {
        path:"https://m.media-amazon.com/images/I/61DjcXIjHnL._AC_UL320_ML3_.jpg",
        price:45,
        name:"Sunfeast Farmlite Oats with Almonds Biscuits, 150g"
    },
    {
        path:"https://m.media-amazon.com/images/I/71jbj4kRABL._AC_UL320_ML3_.jpg",
        price:57,
        name:"Sunfeast Marie Light Rich Taste, 120g (Buy 4 Get 1 Free)"
    },
    {
        path:"https://m.media-amazon.com/images/I/61buiq+BR5L._AC_UL320_ML3_.jpg",
        price:9,
        name:"Britannia Little Hearts , 34.5g"
    },
    {
        path:"https://m.media-amazon.com/images/I/91eC2O5IN5L._AC_UL320_ML3_.jpg",
        price:63,
        name:"Parle-g Original Glucose Biscuit, 800g"
    },
    {
        path:"https://m.media-amazon.com/images/I/61XOhoJTD5L._AC_UL320_ML3_.jpg",
        price:19,
        name:"Britannia Bourbon, 120g"
    },
];
export default class Biscuts extends Component {
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