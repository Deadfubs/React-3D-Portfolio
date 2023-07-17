import React, {Suspense} from 'react'
import styled from "styled-components"
import Navbar from './Navbar'
import { MeshDistortMaterial, Sphere} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: auto;
  width: 1300px;
  display: flex; 
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  };
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }


`;
const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
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
  color: hotpink;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightcyan;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  };
`;

const Button = styled.a`
  background-color: hotpink;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 400px;
  height: 450px;
  object-fit: contain;
  position: absolute;
  top: 0px;
  bottom: 100px;
  right: 0px;
  left: 5px;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  };
  
  @keyframes animate {
    to{
      transform: translateY(30px);
    }
  };
  
`;


const Hero = () => {
  return (
    <Section id="home">
      <Navbar/>
      <Container>
        <Left>
          <Title>Think. Make. Innovate.</Title>
          <WhatIDo>
            <Line src="./img/line.png"/>
            <Subtitle>What I Do</Subtitle>
          </WhatIDo>
          <Desc>I enjoy creating delightful, human-centered digital experience. Also a game dev on the free time.</Desc>
          <Button href="https://github.com/Deadfubs" target="_blank" rel="noopener noreferrer">
            Learn More
          </Button>  
        </Left>
        <Right>
        <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.6}>
                <MeshDistortMaterial
                  color="#9408ff"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/badge.png"/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
