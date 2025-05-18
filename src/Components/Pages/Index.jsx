import React from "react";

import checkIcon from "./../../assets/check-icon.png";
import closeIcon from "./../../assets/xbox-x.png";
import userIcon from "./../../assets/users-icon.png";
import babyIcon from "./../../assets/baby-icon.png";
import roomIcon from "./../../assets/room-icon.png";
import hotelImg from "./../../assets/about-1.png";
import bedroomImg from "./../../assets/about-2.png";
import explore1 from "./../../assets/explore-icon-1.png";
import explore2 from "./../../assets/explore-icon-2.png";
import explore3 from "./../../assets/explore-icon-3.png";
import explore4 from "./../../assets/explore-icon-4.png";
import explore5 from "./../../assets/explore-icon-5.png";
import explore6 from "./../../assets/explore-icon-6.png";
import element1 from "./../../assets/bg-1.png";
import element2 from "./../../assets/bg-2.png";

import singleServiceIcon01 from "./../../assets/option-icon-1.png";
import singleServiceIcon02 from "./../../assets/option-icon-3.png";
import singleServiceIcon03 from "./../../assets/option-icon-4.png";
import singleServiceIcon04 from "./../../assets/option-icon-5.png";
import singleServiceIcon05 from "./../../assets/option-icon-6.png";

// Data
import Data from "./../../Data.json";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid quas iste consequatur sed! Officia odio iusto
                  quisquam, quam dolor aut!
                </p>
                <button className="btn">Visit Us</button>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="booking-form bg-white p-5 rounded">
                <h2>Book A Room</h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="booking-box">
                      <p>
                        <img src={checkIcon} alt="" /> Check In Date
                      </p>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="booking-box">
                      <p>
                        <img src={closeIcon} alt="" /> Check Out Date
                      </p>
                      <input type="date" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-3">
                  <div className="booking-box">
                    <p>
                      <img src={userIcon} alt="" /> Adults
                    </p>
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
                      <p>
                        <img src={babyIcon} alt="" /> Child
                      </p>
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
                      <p>
                        <img src={roomIcon} alt="" /> Room
                      </p>
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
                <button className="btn mt-5 chechk-btn">
                  CHECK AVAILABILITY
                </button>
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
              <img
                src={hotelImg}
                alt=""
                className="img-fluid shadow-sm main-img"
              />
              <img
                src={bedroomImg}
                alt=""
                className="overlay-img shadow-sm p-1 bg-white"
              />
            </div>
            <div className="col-lg-6 text-wrapper">
              <div className="section-title about-title">
                <span>About Us</span>
                <h2>
                  Most Safe & Rated <br /> Hotel In London
                </h2>
              </div>
              <p>
                Morbi tortor dolor sit amet consectetur adipisicing elit.
                Deserunt laborum laudantium excepturi molestiae quae cupiditate
                molestias in. Magni sunt labore earum maxime soluta provident,
                reprehenderit error aspernatur vel
              </p>
              <p>
                Cras finibus laoreet felis et hendrerit elit. Adipisci dolore
                voluptate voluptatibus vitae minima, debitis veritatis aperiam
                dolorem officia numquam obcaecati itaque, eveniet deserunt
                officiis enim in quia. At magni eveniet quas
              </p>

              <div className="feature-peregraphs mt-4 mb-4">
                <p>
                  <i className="ri-check-line"></i> 24 Month / 24,000km
                  Nationwide Warranty monotone
                </p>
                <p>
                  <i className="ri-check-line"></i> Curabitur dapibus nisl a
                  urna congue, in pharetra urna accumsan.
                </p>
                <p>
                  <i className="ri-check-line"></i> Customer Rewards Program and
                  excellent technology
                </p>
              </div>
              <button className="btn discover-btn mt-3">DISCOVER MORE</button>
            </div>
          </div>
        </div>
      </div>
      {/* Explore */}
      <div className="explore my-5 py-4 mb-0 position-relative">
        <div className="container">
          <img
            src={element1}
            className="element element1 position-absolute"
            alt=""
          />
          <div className="row">
            <div className="section-title text-center explore-title d-flex flex-column align-items-center">
              <span>Explore</span>
              <h2>The Hotel</h2>
              <p>
                Proin consectetur non dolor vitae pulvinar. sit amet consectetur
                adipisicing elit. Minima aliquid hic veniam quod. Ea, aut.
                Eveniet consequuntur error impedit? Ipsa, magnam repellendus.
              </p>
            </div>
            <div className="explore-wrapper mt-5">
              <div className="row">
                {/* card 1 */}
                <div className="col-lg-4 col-md-6 border-0 mb-4 mb-lg-0">
                  <div className="explore-card p-4 shadow">
                    <img src={explore1} className="img-fluid" alt="" />
                    <h2 className="my-2">Qulity Room</h2>
                    <p>
                      Nullam molestie lacus sit amet velit fermentum feugiat.
                      Quaerat perspiciatis eius voluptate at rem.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
                {/* card 2 */}
                <div className="col-lg-4 col-md-6 border-0 mb-4 mb-lg-0">
                  <div className="explore-card p-4 shadow">
                    <img src={explore2} className="img-fluid" alt="" />
                    <h2 className="my-2">Privet Beach</h2>
                    <p>
                      Nullam molestie lacus sit amet velit fermentum feugiat.
                      Inventore deserunt, perspiciatis cupiditate.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
                {/* card 3 */}
                <div className="col-lg-4 col-md-6 border-0 mb-4 mb-lg-0">
                  <div className="explore-card p-4 shadow">
                    <img src={explore3} className="img-fluid" alt="" />
                    <h2 className="my-2">Best Accommodation</h2>
                    <p>
                      Nullam molestie lacus sit amet velit fermentum feugiat.
                      Quaerat perspiciatis. Inventore deserunt.
                    </p>
                    <a href="#">
                      Read More <i className="ri-arrow-right-long-line"></i>
                    </a>
                  </div>
                </div>
                {/* card 4 */}
                <div className="col-lg-4 col-md-6 border-0 mt-lg-4 mt-sm-4 mt-md-0">
                  <div className="explore-card p-4 shadow">
                    <img src={explore4} className="img-fluid" alt="" />
                    <h2 className="my-2">Privet Beach</h2>
                    <p>
                      Nullam molestie lacus sit amet velit fermentum feugiat.
                      Perspiciatis quis nam dolorem cupiditate.
                    </p>
                    <a href="#">
                      Read More <i className="ri-arrow-right-long-line"></i>
                    </a>
                  </div>
                </div>
                {/* card 5 */}
                <div className="col-lg-4 col-md-6 border-0 mt-lg-4 mt-sm-4 mt-md-0">
                  <div className="explore-card p-4 shadow">
                    <img src={explore5} className="img-fluid" alt="" />
                    <h2 className="my-2">Restaurant & Bars</h2>
                    <p>
                      Nullam molestie lacus sit amet velit fermentum feugiat.
                      Quaerat perspiciatis eius voluptate at rem.
                    </p>
                    <a href="#">
                      Read More <i className="ri-arrow-right-long-line"></i>
                    </a>
                  </div>
                </div>
                {/* card 6 */}
                <div className="col-lg-4 col-md-6 border-0 mt-lg-4 mt-sm-4 mt-md-0">
                  <div className="explore-card p-4 shadow">
                    <img src={explore6} className="img-fluid" alt="" />
                    <h2 className="my-2">Special offers</h2>
                    <p>
                      Nullam molestie lacus sit amet velit fermentum feugiat.
                      Soluta labore optio consequuntur officia.
                    </p>
                    <a href="#">
                      Read More <i className="ri-arrow-right-long-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rooms */}
      <div className="container py-5">
        <div className="row">
          <div className="section-title text-center explore-title d-flex flex-column align-items-center">
            <span>The pleasure of luxury</span>
            <h2>Rooms & Suites</h2>
            <p>
              Proin consectetur non dolor viate amet consectetur adipisicing
              elit. Alias repellat praesentium, modi libero quo eius labore.
              Praesentium dolore recusandae nulla. Quibusdam quidem esse cum
              necessitatibus
            </p>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="mt-5 border p-3 rounded"
          >
            {Data.Rooms.map((Room, index) => (
              <SwiperSlide key={index}>
                <div className="single-service mb-3">
                  <div className="service-thumb">
                    <a
                      href={Room.src}
                      className="gallery-link popup-image"
                      tabIndex={-1}
                    >
                      <img
                        src={Room.src}
                        alt={Room.name}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="service-content p-4">
                    <div className="day-book">
                      <ul>
                        <li>{Room.Price}/Night</li>
                        <li style={{ cursor: 'pointer' }}>Book Now</li>
                      </ul>
                    </div>
                    <h5 className="card-title">{Room.name}</h5>
                    <p className="card-text mt-3 room-pere">
                      {Room.description}
                    </p>
                    <div className="icon">
                      <ul>
                        <li>
                          <img
                            src={singleServiceIcon01}
                            className="img-fluid"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={singleServiceIcon02}
                            className="img-fluid"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={singleServiceIcon03}
                            className="img-fluid"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={singleServiceIcon04}
                            className="img-fluid"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={singleServiceIcon05}
                            className="img-fluid"
                            alt=""
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Index;
