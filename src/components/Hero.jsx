import React from 'react'
import styled from "styled-components"
import Navbar from './Navbar'


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1200px;
  display: flex; 
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Title = styled.h1`
  font-size: 74px;
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: hotpink
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightcyan
`;

const Button = styled.button`
  background-color: blueviolet;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  
  @keyframes animate {
    to{
      transform: translateY(40px);
    }
  }
  
`;


const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Think. Make. Innovate.</Title>
          <WhatIDo>
            <Line src="./img/line.png"/>
            <Subtitle>What I Do</Subtitle>
          </WhatIDo>
          <Desc>I enjoy creating delightful, human-centered digital experience</Desc>
          <Button>Learn More</Button>  
        </Left>
        <Right>
          {/* 3d model */}
          <Img src="./img/badge.png"/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
