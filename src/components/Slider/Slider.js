import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import { Navbar, Container, Image } from "react-bootstrap";
import logo from "../../images/Nav-logo.png";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <a style={{ textDecoration: "none" }} href="privateprivates.ml">
            <Navbar.Brand
              style={{
                textAlign: "center",
                justifyContent: "center",
                color: "#f4abba",
              }}
            >
              <Image
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              Where you at ?
            </Navbar.Brand>
          </a>
        </Container>
      </Navbar>
      <div className="container-slider">
        {dataSlider.map((obj, index) => {
          return (
            <div
              id={obj.id}
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <a
                href={dataSlider[slideIndex - 1].result}
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt={`img${index + 1}.jpg`}
                  src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
                />
              </a>
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />

        <div className="container-dots">
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
