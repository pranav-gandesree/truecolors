import React from 'react';
import TypeAnimations from '../components/typeanimation/TypeAnimations';
import styled from 'styled-components';
import Card from '../components/servicecards/Card'
import photo1 from '../assets/06.jpg'
import photo2 from '../assets/img16.jpg'
import photo3 from '../assets/img17.jpg'
import photo4 from '../assets/event.jpg'
import AboutContent from '../components/AboutContent';


const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  // @media (min-width: 850px) and (max-width:1200px) {
  //   display: grid;
  //   grid-template-columns: 1fr 1fr; /* 1 column for 600px and below */
  // }


`;



export default function About() {
  return (
    <>
      <TypeAnimations/>
      <AboutContent/>
      
      <CardContainer>
      <Card imageUrl={photo1} title="Wedding Ceremony"/>
      <Card imageUrl={photo2} title="Outdoor PhotoShoot"/>
      <Card imageUrl={photo4} title="Event Coverage"/>
      <Card imageUrl={photo2} title="Outdoor Shoot"/>
      <Card imageUrl={photo3} title="Baby Photoshoot"/>
      </CardContainer>

    </>
  )
}
