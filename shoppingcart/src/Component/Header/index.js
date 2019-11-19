import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from '../Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import './style.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="TextColor header_fixed bg-danger">
                <Navbar expand="lg" bg="danger" variant="dark">
                    <Navbar.Brand>Shopping Cart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Form inline>
                    <InputGroup>
                        <InputGroup>
                            <FormControl className="input" placeholder="Search.."/>
                            <InputGroup.Append>
                                <Base variant="success" text="Search"/>
                            </InputGroup.Append>
                        </InputGroup>
                    </InputGroup>
                    </Form>
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link">HOME</Link>
                            <Link to="/biscuts" className="nav-link">Biscuts</Link>
                            <Link to="/womenwear" className="nav-link">Women's Fashion</Link>
                            <Link to="/menwear" className="nav-link">Men's Fashion</Link>
                            <Link to="/chocolate" className="nav-link">Chocolates</Link>
                            <Link to="/mobile" className="nav-link">Mobiles</Link>
                            <Link to="/household" className="nav-link">Household</Link>
                        </Nav>
                    </Navbar.Collapse>
                    {/* <Link to="/report"><Base variant="success" text="Report"/></Link> */}
                    <Base variant="success" text="Cart"/>
                    <Base variant="success" text="MyOrders"/>
                </Navbar>
            </div>  
        );
    }
}
export default Header;