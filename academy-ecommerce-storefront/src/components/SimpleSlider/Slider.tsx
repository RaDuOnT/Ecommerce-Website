import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./slick.css";
import "./slick-theme.css";

interface SimpleSliderProps {
  images?: string[];
}

const NewDiv = styled.div`
  display:block;
  width: 100%;
  height: 400px;
  object-fit: contain;
  @media (max-width: 768px) {
    height: 300px;
  }
  `;


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,

};

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const SimpleSlider = ({ images }: SimpleSliderProps) => (
  <Slider {...settings}>
    {images?.map((image) => (
    <NewDiv>
      <Image src={image} alt="image" />
    </NewDiv>
    ))}
  </Slider>
);
