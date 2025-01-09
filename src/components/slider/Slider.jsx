import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "400px", backgroundColor: "#eee" }}
        >
          <p>Image 1</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "400px", backgroundColor: "#eee" }}
        >
          <p>Image 2</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
