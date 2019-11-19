import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import '../style.css';
let biscut_image = [
    {
        path :"https://m.media-amazon.com/images/I/51jvywFsQ7L._AC_UL320_ML3_.jpg",
        price:344,
        name:"Women's Twill Tafeta Gown"
    },
    {
        path :"https://m.media-amazon.com/images/I/61AxNhExZTL._AC_UL320_ML3_.jpg",
        price:799,
        name:"Women's Long Embroidered Rayon Kurti, Yellow"
    },
    {
        path :"https://m.media-amazon.com/images/I/615+rA7clZL._AC_UL320_ML3_.jpg",
        price:425,
        name:"Women's Plain Regular fit Top"
    },
    {
        path :"https://m.media-amazon.com/images/I/81WfD9hHlUL._AC_UL320_ML3_.jpg",
        price:488,
        name:"Women's Pink Floral Georgette Long Shrug/Jacket with Full Sleeves"
    },
    {
        path :"https://m.media-amazon.com/images/I/61NM1lWx81L._AC_UL320_ML3_.jpg",
        price:375,
        name:"Floral Printed Knee Length Dress for Women"
    },
    {
        path :"https://m.media-amazon.com/images/I/810I1IpM+aL._AC_UL320_ML3_.jpg",
        price:695,
        name:"Women Royal Silk Skirt"
    },
    {
        path :"https://m.media-amazon.com/images/I/61EvPLNdVBL._AC_UL320_ML3_.jpg",
        price:399,
        name:"Silk Saree with Blouse Piece"
    },
    {
        path :"https://m.media-amazon.com/images/I/61rfbdedzeL._AC_UL320_ML3_.jpg",
        price:550,
        name:"Multi Color Heavy Soft Net Fabric Embroidery Work Round Neck"
    },
    {
        path :"https://m.media-amazon.com/images/I/61tIHkTJMCL._AC_UL320_ML3_.jpg",
        price:399,
        name:"Women's Tafeta Satin Anarkali Style Gown"
    },

];
export default class Womenwear extends Component {
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