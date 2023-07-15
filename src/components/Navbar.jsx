import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;

const Container = styled.div`
  width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  a {
    text-decoration: none;
    color: white;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
  height: 70px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icon = styled.img`
  width: 30px;
`;

const Button = styled.a`
  width: 100px;
  padding: 10px;
  background-color: violet;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" alt="Logo" />
          <List>
            <ListItem>
              <a href="#home">Home</a>
            </ListItem>
            <ListItem>
              <a href="#who">Who</a>
            </ListItem>
            <ListItem>
              <a href="#works">Works</a>
            </ListItem>
            <ListItem>
              <a href="#contact">Contact</a>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" alt="Search Icon" />
          <Button href="https://www.linkedin.com/in/fulviotaroni/" target="_blank" rel="noopener noreferrer">
            Hire Now
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
