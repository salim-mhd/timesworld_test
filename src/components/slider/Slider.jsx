import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Slider = () => {
  const items = [
    { id: 1, content: "Image 1" },
    { id: 2, content: "Image 2" },
    { id: 2, content: "Image 3" },
    { id: 2, content: "Image 4" },
    { id: 2, content: "Image " },
  ];
  return (
    <Carousel
      className="custom-carousel border border-2 border-black"
      indicators
      nextIcon={
        <span className="arrow-next fs-6">
          <FaArrowRight />
        </span>
      }
      prevIcon={
        <span className="arrow-prev fs-6">
          <FaArrowLeft color="black" />
        </span>
      }
    >
      {items.map((item) => (
        <Carousel.Item key={item.id}>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "400px", backgroundColor: "#eee" }}
          >
            <p>{item.content}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
