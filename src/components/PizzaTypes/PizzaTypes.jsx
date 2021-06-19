import React from 'react';

import './PizzaTypes.css'

import image1 from '../../images/1.jpg'
import image2 from '../../images/1.jpg'
import image3 from '../../images/1.jpg'
import image4 from '../../images/4.jpg'

const PizzaTypes = () => {
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center">Pizza Types</h1>

                <br />

                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src={image1} alt="Vegetable" />
                        <div className="caption">
                            <h3>Vegetable Pizza</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                .
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src={image2} alt="Pepperoni" />
                        <div className="caption">
                            <h3>Pepperoni Pizza</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                .
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src={image3} alt="Nungua" />
                        <div className="caption">
                            <h3>Nungua Pizza</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                .
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src={image4} alt="Meat" />
                        <div className="caption">
                            <h3>Meat Deluxe</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                .
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default PizzaTypes;
