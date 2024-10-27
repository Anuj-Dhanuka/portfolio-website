import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const formContainerRef = useRef();
  const isInView = useInView(formContainerRef, { once: true, threshold: 0.2 });

  const onSubmitForm = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_dwpf75f",
        "template_1aqap6z",
        form.current,
        "05bCxCcaLu4vv2jaQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };

  return (
    <Container>
      <FormContainer
        ref={formContainerRef}
        as={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <Form ref={form} onSubmit={onSubmitForm}>
          <Title>Contact Me</Title>
          <Subtitle>Let’s connect and discuss your project.</Subtitle>
          <Label>Name:</Label>
          <Input
            type="text"
            name="user_name"
            placeholder="Enter your name..."
            required
            as={motion.input}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          />
          <Label>Email:</Label>
          <Input
            type="email"
            name="user_email"
            placeholder="Enter your email address.."
            required
            as={motion.input}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
          />
          <Label>Message:</Label>
          <Textarea
            rows="6"
            placeholder="Write your message here..."
            name="message"
            required
            as={motion.textarea}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          />
          <SubmitButton
            type="submit"
            as={motion.button}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.7 }}
          >
            Send Message
          </SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Contact;

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 15px;
  background: linear-gradient(135deg, #e3e9f1, #ffffff);
  color: #333;

  @media screen and (max-width: 1024px) {
    max-width: 1024px;
    padding: 80px 24px;
  }

  @media (max-width: 767px) {
    padding: 36px 24px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-out both;

  @media screen and (max-width: 1024px) {
    max-width: 1024px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    box-shadow: none;
  }

  @media (max-width: 480px) {
    //box-shadow: none;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 100%;

  @media (max-width: 767px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 8px;
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    font-size: 1rem;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    
  }
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Adjust font size on mobile */
  }
`;

const Input = styled.input`
  padding: 12px 18px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  margin-bottom: 18px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 8px rgba(100, 150, 255, 0.3);
  }

  @media (max-width: 767px) {
    font-size: 0.7rem;
    padding: 10px 15px; /* Reduce padding for mobile */
  }
`;

const Textarea = styled.textarea`
  padding: 12px 18px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  margin-bottom: 18px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 8px rgba(100, 150, 255, 0.3);
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #6c63ff, #8a80ff);
  color: white;
  padding: 14px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  box-shadow: 0 10px 20px rgba(100, 150, 255, 0.3);

  &:hover {
    background: linear-gradient(135deg, #5a52d0, #7870ff);
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(100, 150, 255, 0.4);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 480px) {
    padding: 12px 20px; /* Adjust button size on mobile */
  }
`;

