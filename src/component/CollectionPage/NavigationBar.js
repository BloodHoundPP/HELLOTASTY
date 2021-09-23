import {Navbar,Nav} from 'react-bootstrap'
import logo from './images/logo.png'
import profile from './images/profile.png'
import { Icon } from '@iconify/react';
import './Collection.css'
function NavigationBar(){
    return (
        <div className="navigation">
            <Navbar  expand="lg">
                <Navbar.Brand href="#home"><img className="logo" src={logo} alt='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#cookbook">Cook Book</Nav.Link>
                    <Nav.Link href="#signin"><span><img src={profile} alt="profile" /></span>Sign in</Nav.Link>
                    <Nav.Link href="#home"><Icon className="cart" icon="clarity:shopping-cart-outline-badged" color="black" width="4" height="4" /></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar;