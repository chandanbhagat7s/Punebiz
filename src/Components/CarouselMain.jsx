import cardImg from "./../assets/cardimg.png";

export default function Slider() {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide flex justify-content-center m-auto rounded lg:px-2"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner lg:h-[75vh]">
          <div className="carousel-item active m-auto" data-bs-interval="4000">
            <img
              src={cardImg}
              className="d-block w-100 lg:h-[70vh] "
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src={cardImg}
              className="d-block w-100 lg:h-[70vh]"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={cardImg}
              className="d-block w-100 lg:h-[70vh]"
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
