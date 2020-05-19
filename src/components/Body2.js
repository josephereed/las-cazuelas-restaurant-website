import React from "react";
import doubleTaco from "../images/double-taco.jpg";
import cheese from "../images/chees.jpg";
import burrito from "../images/burrito.jpg";
import edited2 from "../images/edit.jpg";

const Body2 = () => {
  return (
    <>
      <div className="row body">
        <div className="col-md-8 col-sm-12">
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
        </div>
        <div className="col-md-4 content-text-container">
          <div className="pt-5">
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
              style={{ background: "#b63456", borderColor: "#b63456" }}
            >
              More Info
            </button>
          </div>
        </div>
      </div>
      <div className="row body">
        <div className="col-md-4 d-inline content-text-container">
          <div style={{ position: 'relative', top: '40%', transform: 'translateY(-50%);' }}>
          <h2 className="content-header">
              OUR MENU
            </h2>
            <br />
            <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{ background: "#b63456", borderColor: "#b63456" }}
            >
              More Info
            </button>
          </div>
        </div>
        <div className="col-md-8">
          <div className="content-image-container">
            <img src={cheese} alt="cheese" width="100%"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body2;
