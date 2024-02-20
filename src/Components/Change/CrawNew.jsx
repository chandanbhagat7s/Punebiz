import React from "react";

export default function CrawNew() {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide flex justify-content-center m-auto rounded lg:px-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner lg:h-[35vh]">
          <div className="carousel-item active m-auto" data-bs-interval="4000">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7258d330df72ecde.jpg?q=20"
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/340993fa504d1c6c.jpg?q=20"
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7258d330df72ecde.jpg?q=20"
              className="d-block w-100  "
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon "
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
