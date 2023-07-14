import React from 'react'
import styled from "styled-components"

const data = [
  "Web Design",
  "Development",
  "Game Dev",
  "DevOps",
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
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item)=>(
              <ListItem key={item} text={item}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>

        </Right>
      </Container>
    </Section>
  )
}

export default Works
