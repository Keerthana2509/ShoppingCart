import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import '../style.css';
let biscut_image = [
    {
        path :"https://m.media-amazon.com/images/I/81D3VKI8AaL._AC_UL320_ML3_.jpg",
        price:445,
        name:"Planet Heavy Stainless Steel Vegetable and Fruit Bowl Basket - Nickel Chrome Plated"
    },
    {
        path :"https://m.media-amazon.com/images/I/61+Jrz1OdVL._AC_UL320_ML3_.jpg",
        price:2408,
        name:"Ciplaplast GEC-L5M 5 Step Milano Folding Ladder (Black)"
    },
    {
        path :"https://m.media-amazon.com/images/I/51JR7ZwFw5L._AC_UL320_ML3_.jpg",
        price:199,
        name:"Yellow Weaves PVC Plastic Refrigerator Mats (12x17-inch, Multicolour)"
    },
    {
        path :"https://m.media-amazon.com/images/I/61lR93HHNiL._AC_UL320_ML3_.jpg",
        price:329,
        name:"Amazon Brand - Solimo Wax Tealight Candles (Set of 100, Unscented)"
    },
    {
        path :"https://m.media-amazon.com/images/I/81vGpOIasIL._AC_UL320_ML3_.jpg",
        price:195,
        name:"Brite Guard Cellulose Cleaning Sponge Mop (20 x 16 x 0.5 cm, Multicolour) - Pack of 5 Pieces"
    },
    {
        path :"https://m.media-amazon.com/images/I/91AHWJesouL._AC_UL320_ML3_.jpg",
        price:1000,
        name:"Lifetime Stainless Steel 3 In 1 Triple Paper Dispenser and Holder/Wrap Aluminium Foil and Kitchen Roll"
    },
    {
        path :"https://m.media-amazon.com/images/I/71PN5jlRthL._AC_UL320_ML3_.jpg",
        price:980,
        name:"INDIAN DECOR -Tier Kitchen Countertop Organizer Holder Rack for Spice Jar, Can, Bottle and More (Chrome)"
    },
    {
        path :"https://m.media-amazon.com/images/I/810D-Fjsu-L._AC_UL320_ML3_.jpg",
        price:1998,
        name:"INDIAN DECOR 28765 Spice Rack Organizer 4 Tier Country Rustic Chicken Herb Holder Wall Mounted Storage Rack,Black"
    },
    {
        path :"https://m.media-amazon.com/images/I/71uOUBB2NXL._AC_UL320_ML3_.jpg",
        price:1090,
        name:"Smile Mom Aluminium Spray Mop Set with Microfiber Washable Pad, Best 360 Degree Easy Floor Cleaning for Home & Office (Green)"
    },
];
export default class Household extends Component {
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