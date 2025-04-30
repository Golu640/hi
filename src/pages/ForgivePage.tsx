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
  background: #2ecc71;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #27ae60;
  }
`;

const Heart = styled(motion.div)`
  font-size: 3rem;
  margin: 1rem 0;
`;

const ForgivePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>💖 Thank You!</Title>
      <Message>
        Your forgiveness means everything to me.
        <br />
        
        Iram💖, You're the best thing that ever happened to me!
      </Message>
      <Heart
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        💝
      </Heart>
      <Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/')}
      >
        Start Over
      </Button>
    </Container>
  );
};

export default ForgivePage; 