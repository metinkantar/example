/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

class HomeCarousel extends Component {
  render() {
    return (
      <>
        <div id="carouselExampleDark" className="carousel carousel-dark" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner m-0 p-0">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="assets/images/banner-4.jpg" className="d-block w-100" height="320" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Slider label 1</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="assets/images/banner-5.jpg" className="d-block w-100" height="320" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Slider label 2</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="assets/images/banner-6.png" className="d-block w-100" height="320" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Slider label 3</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
  }
}

export default HomeCarousel;