import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  resize: none;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
  resize: none;
`;

const Button = styled.button`
  background-color: violet;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fke4j36",
        "template_nf3o1r7",
        ref.current,
        "_D64dT68mjy3wBZnp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setError(null);
          setTimeout(() => {
            setSuccess(null);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          setError("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={8}
            />
            <Button type="submit">Send</Button>
            {success && (
              <SuccessMessage>
                Your message has been sent. I'll get back to you soon :)
              </SuccessMessage>
            )}
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};


export default Contact;