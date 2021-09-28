import React from 'react';
import {Row,Col} from 'react-bootstrap';
import './Features.css';
import img1 from './images/food-service.png';
import img2 from './images/feature1-05.png';
import img3 from './images/features3-06.png';

function Features()
{
    return (
        <div className="features">
            <p className="subheading">WHAT WE SERVE</p>
            <h2>Your Favourite Food Delivery Partener</h2>
            <div className="feature-elements">
                <Row>
                    <Col>
                        <img src={img1} alt="image-1"/>
                        <p>Hand picked Restaurants</p>
                    </Col>
                    <Col>
                        <img src={img2} alt="image-2"/>
                        <p>Easy to order</p>
                    </Col>
                    <Col>
                        <img src={img3} alt="image-3"/>
                        <p>Fastest delivery</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Features;