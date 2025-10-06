import React from 'react';
import { css } from '@emotion/react';
import HeroSection from '../components/pages/HeroSection';
import AboutSection from '../components/pages/AboutSection';
import ProjectSection from '../components/pages/ProjectSection';

const Main = () => {
  return (
    <div css={mainContainer}>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </div>
  );
};

const mainContainer = css`
  width: 100%;
  height: 100vh;
`;

export default Main;
