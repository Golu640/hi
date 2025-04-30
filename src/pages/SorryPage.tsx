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
  line-height: 1.6;
`;

const Button = styled(motion.button)`
  background: #3498db;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2980b9;
  }
`;

const SorryPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>😔 I'm So Sorry</Title>
      <Message>
        I know I made a mistake, and I truly regret it.
        <br />
        You mean the world to me, and I never want to hurt you.
        <br />
        Can you find it in your heart to forgive me?
      </Message>
      <Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/forgive')}
      >
        Please Forgive Me
      </Button>
    </Container>
  );
};

export default SorryPage; 