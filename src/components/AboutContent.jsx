import React from 'react';
import styled from 'styled-components';

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Caption = styled.h3`
    color: white;
    font-weight: lighter;
    text-align: center;
    font-size: 1.8rem;
`;

const Para = styled.h3`
    color: white;
    opacity:0.9;
    font-weight: lighter;
    text-align: center;
    padding-top:15px;

    position: relative;
    width: 90%;
    font-family: system-ui;

    @media (max-width: 768px) {
        z-index:-4;
    }

`;

const Heading = styled.h2`
color: white;
opacity:0.9;
font-size:2.8rem;
font-weight:600;

text-align: center;
left: 27px;
position: relative;
width: 90%;
font-family: serif;

@media (max-width: 768px) {
  left:0px
}

`

function AboutContent() {
  return (
    <>
      <TextBlock>
      <Caption> "Life's a kaleidoscope through our lens."</Caption>
      <Para>Welcome to TrueColors Photography, beyond black and white, we capture the true hues of life.We are more than just photographers; we are storytellers, capturing the essence of your most cherished moments with authenticity and artistry.</Para>
      <Para>At TrueColors, we have a straightforward vision: using the vibrant palette of true emotions to paint your memories. Our team is dedicated to bringing out the true colors of every moment, making each image a masterpiece in its own right.</Para>
      <Para>
      Whether it's a wedding, a family portrait, or a milestone event, we're here to tell your story. Let TrueColors Photography be the brush that paints your memories vividly and authentically.
      <Para>Thank you for considering us to be a part of your journey.</Para>
      </Para><br />
      <Heading>OUR SERVICES</Heading><br />
      </TextBlock>

    </>
  );
}

export default AboutContent;
