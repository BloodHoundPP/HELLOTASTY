import React from 'react';
import './Footer.css';
import BlogCards from './BlogCards';
import About from './About';
// import man from './Images/chef-transparent-background-1.png';
// import woman from './Images/chef_woman.png';
// import {Row,Col} from 'react-bootstrap';
// import {Button} from 'react-bootstrap';

function Footer(){
    return (
        <div >
              <BlogCards />
              <About />
        </div>
    );
}

export default Footer;