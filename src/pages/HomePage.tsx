import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  max-width: 600px;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  color: #34495e;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Button = styled(motion.button)`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #c0392b;
  }
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>💝 Welcome to My Apology</Title>
      <Message>
        I have something important to tell you...
        <br />
        Will you hear me out?
      </Message>
      <Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/sorry')}
      >
        Click to Continue
      </Button>
    </Container>
  );
};

export default HomePage; 