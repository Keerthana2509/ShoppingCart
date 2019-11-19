import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import '../style.css';
let biscut_image = [
    {
        path :"https://m.media-amazon.com/images/I/71K3-rYkPHL._AC_UL320_ML3_.jpg",
        price:409,
        name:"Tshirts for Men|Full Sleeve Cowl Neck Tshirts|Men's Regular Fit "
    },
    {
        path :"https://m.media-amazon.com/images/I/6168P5fdznL._AC_UL320_ML3_.jpg",
        price:699,
        name:"Men's Cotton Casual White Shirt for Men Full Sleeves"
    },
    {
        path :"https://m.media-amazon.com/images/I/41xlqDiwonL._AC_UL320_ML3_.jpg",
        price:650,
        name:"Men's Cotton Casual Fancy Shirt for Men Full Sleeves"
    },
    {
        path :"https://m.media-amazon.com/images/I/410el0B7L6L._AC_UL320_ML3_.jpg",
        price:598,
        name:"Men's Plain Solid Slim Fit Cotton Causal Shirt"
    },
    {
        path :"https://m.media-amazon.com/images/I/71pptbGD1sL._AC_UL320_ML3_.jpg",
        price:349,
        name:"Men's Cotton Waist Coat Style Tshirt/T-Shirt"
    },
    {
        path :"https://m.media-amazon.com/images/I/616NIHQ41DL._AC_UL320_ML3_.jpg",
        price:1449,
        name:"Leather Retail Black Color Designer Faux Leather Biker Jacket for Man"
    },
    {
        path :"https://m.media-amazon.com/images/I/41xCWDx-OyL._AC_UL320_ML3_.jpg",
        price:699,
        name:"Men's Cotton Casual Shirt for Men Full Sleeves"
    },
    {
        path :"https://m.media-amazon.com/images/I/71yGwgI4FgL._AC_UL320_ML3_.jpg",
        price:599,
        name:"Men's Regular Fit Denim Jeans"
    },
    {
        path :"https://m.media-amazon.com/images/I/71peHvQaWkL._AC_UL320_ML3_.jpg",
        price:478,
        name:"Men's Cotton Short Kurta"
    },

];
export default class Menwear extends Component {
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