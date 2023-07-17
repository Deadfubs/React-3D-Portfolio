import React, { useState } from 'react'
import styled from "styled-components"
import Development from './Development'
import GameDev from './GameDev'
import Python from './Python'
import Illustration from './Illustration'
import SocialMedia from './SocialMedia'

const data = [
  "Web Design",
  "Development",
  "Game Dev",
  "Illustration",
  "Social Media",
]

const Section = styled.div`
  margin-top: 200px;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  margin-top: 50px;
  width: 1100px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`

const Right = styled.div`
  flex: 1;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  &::after{
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    &::after{
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to{
          width: 100%;
        }
      }
    }
  }
`;

const Works = () => {
  const [work, setWork] = useState("Web Design")
  return (
    <Section id="works">
      <Container>
        <Left>
          <List>
            {data.map((item)=>(
              <ListItem key={item} text={item} onAnimationStart={()=>setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {
            work == "Web Design" ? (<Development/>)
            : work == "Development" ? (<Python/>)
            : work == "Game Dev" ? (<GameDev/>)
            : work == "Illustration" ? (<Illustration/>)
            : (<SocialMedia/>)
          }        
        </Right>
      </Container>
    </Section>
  )
}

export default Works
