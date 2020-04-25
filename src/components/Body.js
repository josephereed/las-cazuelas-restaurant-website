import React from 'react';
import doubleTaco from '../images/double-taco.jpg';
import cheese from '../images/chees.jpg';
import burrito from '../images/burrito.jpg';
import edited2 from '../images/edit.jpg';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

const Body = () => {
  return (
    <bodyContainer className="body" id="test">
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <div
          className="content-image-container"
          style={{ width: '724px', float: 'left' }}
        >
          {/* Carousel */}
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={edited2}
                  alt="First slide"
                  width="115%"
                  height="100%"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={burrito}
                  alt="Second slide"
                  width="115%"
                  height="100%"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={doubleTaco}
                  alt="Third slide"
                  width="115%"
                  height="100%"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          {/* Carousel */}
          {/* <img src={cheese} alt="homeImage" width="115%" height="100%"/>  */}
        </div>
        <div
          className="content-text-container"
          style={{
            marginLeft: '690px',
            backgroundColor: 'white',
            marginTop: '0'
          }}
        >
          <h2 className="content-header">
            Festive spot for traditional taco shop fare, bottled beer &
            margaritas with a salsa bar & patio
          </h2>
          <p>
            <span>
              <strong>Saturday - Sunday: </strong>8am-9pm
            </span>
          </p>
          <p>
            <span>
              <strong>Monday - Friday: </strong>9am-9pm
            </span>
          </p>
          <br />
          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={{ background: '#b63456', borderColor: '#b63456' }}
          >
            More Info
          </button>
        </div>
      </div>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <div
          className="content-text-container"
          style={{ width: '400px', float: 'left', marginTop: '25%' }}
        >
          <h1 className="content-header">Our menu</h1>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={{ background: '#b63456', borderColor: '#b63456' }}
          >
            View
          </button>
        </div>
        <div
          className="content-image-container"
          style={{ marginLeft: '420px' }}
        >
          <img src={cheese} alt="homeImage" width="100%" height="100%" />
        </div>
      </div>
    </bodyContainer>
  );
};

export default Body;

// Media

const customMedia = generateMedia({
  tablet: '990px'
});

const bodyContainer = styled.div``;
