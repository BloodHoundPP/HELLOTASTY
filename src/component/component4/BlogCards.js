import React from 'react';
import './Footer.css';
import man from './Images/chef-transparent-background-1.png';
import woman from './Images/chef_woman.png';
import {Row,Col} from 'react-bootstrap';

function BlogCards(){
    return (
        <div>
            <div className="extra-space">

            </div>
        
            <Row>
                <Col>
                    <div className="blog left">
                        <Row>
                            <Col>
                                <div className="blog-text">
                                    <h2>Join the Cook Book</h2>
                                    <p>Share your views with us</p>
                                    <a href="www.google.com">Write a Blog</a>
                                </div>
                            </Col>
                            <Col>
                                <div className="blog-img man">
                                    <img src={man} alt="man-chef"/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    
                </Col>
                <Col>
                    <div className="blog right">
                            <Row>
                                <Col>
                                    <div className="blog-img woman">
                                        <img src={woman} alt="man-chef"/>
                                    </div>
                                    
                                </Col>
                                <Col>
                                    <div className="blog-text">
                                        <h2>Watch our best recipes</h2>
                                        <p>See the best recipes on blogs</p>
                                        <a href="www.google.com">Read Blogs</a>
                                    </div>
                                </Col>
                            </Row>
                    </div>
                    
                </Col>
            </Row>

        </div>
    );
}

export default BlogCards;