import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
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
`;

const Button = styled.button`
  background-color: violet;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;


const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* 3d model */}
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatIDo>
            <Line src="./img/line.png" />
            <Subtitle>Who am I</Subtitle>
          </WhatIDo>
          <Desc>
            I'm a developer and a Software Engineer student with passion for art and design.
          </Desc>
          <Button>See my Work</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
