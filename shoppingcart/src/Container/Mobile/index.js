import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import '../style.css';
let biscut_image = [
    {
        path :"https://m.media-amazon.com/images/I/61UXDdyLTxL._AC_UY218_ML3_.jpg",
        price:9999,
        name:"Nokia 6.1 Plus (Black, 6GB RAM, 64GB Storage)"
    },
    {
        path :"https://m.media-amazon.com/images/I/81duLAWicbL._AC_UY218_ML3_.jpg",
        price:12999,
        name:"Xiaomi Mi A3 (Not just Blue, 4GB RAM, AMOLED Display, 64GB Storage, 4030mAH Battery)"
    },
    {
        path :"https://m.media-amazon.com/images/I/61ovWQUYp7L._AC_UY218_ML3_.jpg",
        price:21990,
        name:"Vivo V15 Pro (Topaz Blue, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
    },
    {
        path :"https://m.media-amazon.com/images/I/51khqzVPLlL._AC_UY218_ML3_.jpg",
        price:9990,
        name:"OPPO A7 (Glaze Blue, 3GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers"
    },
    {
        path :"https://m.media-amazon.com/images/I/819ak1fO+1L._AC_UY218_ML3_.jpg",
        price:11578,
        name:"Redmi Mi Note 6 Pro (Red, 6GB RAM, 64GB Storage)"
    },
    {
        path :"https://m.media-amazon.com/images/I/51WHcH3UsIL._AC_UY218_ML3_.jpg",
        price:599,
        name:"DETEL D1 Champ Mobile (Black Green)"
    },

];
export default class Mobile extends Component {
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