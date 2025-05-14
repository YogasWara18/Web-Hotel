import React from 'react'

import checkIcon from './../../assets/check-icon.png'

const Index = () => {
    return (
       // Hero
       <header className="pt-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="hero-content">
                        <h1>Enjoy A Luxuary Experience</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quas iste consequatur sed! Officia odio iusto quisquam, quam dolor aut!</p>
                        <button className="btn">Visit Us</button>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="booking-form bg-white p-5 rounded">
                        <h2>Book A Room</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="booking-box">
                                    <p><img src={checkIcon} alt=""/> Check In Date</p>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="booking-box">
                                    <p><img src={checkIcon} alt="" /> Check Out Date</p>
                                    <input type="date" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </header>
    )
}

export default Index