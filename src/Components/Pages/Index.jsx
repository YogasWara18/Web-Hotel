import React from "react";

import checkIcon from "./../../assets/check-icon.png"
import closeIcon from "./../../assets/xbox-x.png"
import userIcon from "./../../assets/users-icon.png"
import babyIcon from "./../../assets/baby-icon.png"
import roomIcon from "./../../assets/room-icon.png"
import hotelImg from "./../../assets/about-1.png"
import bedroomImg from "./../../assets/about-2.png"

const Index = () => {
  return (
    <>
       {/* Hero */}
      <header className="pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-content">
                <h1>Enjoy A Luxuary Experience</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid quas iste consequatur sed! Officia odio iusto
                  quisquam, quam dolor aut!</p>
                <button className="btn">Visit Us</button>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="booking-form bg-white p-5 rounded">
                <h2>Book A Room</h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="booking-box">
                      <p><img src={checkIcon} alt="" /> Check In Date</p>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="booking-box">
                      <p><img src={closeIcon} alt="" /> Check Out Date</p>
                      <input type="date" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-3">
                  <div className="booking-box">
                    <p><img src={userIcon} alt="" /> Adults</p>
                    <select className="w-100">
                      <option value="Adults">Adults</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="booking-box">
                      <p><img src={babyIcon} alt="" /> Child</p>
                      <select className="w-100">
                        <option value="Child">Child</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                <div className="col-md-6">
                  <div className="booking-box">
                    <p><img src={roomIcon} alt="" /> Room</p>
                    <select className="w-100">
                      <option value="Room">Room</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    </div>
                  </div>
                </div>
                <button className="btn mt-5 chechk-btn">CHECK AVAILABILITY</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* About */}
      <div className="about-section my-5 py-5" id="about">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6 position-relative image-wrapper">
              <img src={hotelImg} alt="" className="img-fluid shadow-sm main-img" />
              <img src={bedroomImg} alt="" className="overlay-img shadow-sm p-1 bg-white" />
            </div>
            <div className="col-lg-6 text-wrapper">
              <div className="section-title about-title">
                <span>About Us</span>
                <h2>Most Safe & Rated <br/> Hotel In London</h2>
              </div>
              <p>Morbi tortor dolor sit amet consectetur adipisicing elit. Deserunt laborum laudantium excepturi molestiae quae cupiditate molestias in. Magni sunt labore earum maxime soluta provident, reprehenderit error aspernatur vel</p>
              <p>Cras finibus laoreet felis et hendrerit elit. Adipisci dolore voluptate voluptatibus vitae minima, debitis veritatis aperiam dolorem officia numquam obcaecati itaque, eveniet deserunt officiis enim in quia. At magni eveniet quas</p>
            
              <div className="feature-peregraphs mt-4 mb-4">
                <p><i className="ri-check-line"></i> 24 Month / 24,000km Nationwide Warranty monotone</p>
                <p><i className="ri-check-line"></i> Curabitur dapibus nisl a urna congue, in pharetra urna accumsan.</p>
                <p><i className="ri-check-line"></i> Customer Rewards Program and excellent technology</p>
              </div>
              <button className="btn discover-btn mt-3">DISCOVER MORE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
