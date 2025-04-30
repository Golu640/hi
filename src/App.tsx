import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { HomePage, SorryPage, ForgivePage } from './pages';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Arial', sans-serif;
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sorry" element={<SorryPage />} />
          <Route path="/forgive" element={<ForgivePage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
