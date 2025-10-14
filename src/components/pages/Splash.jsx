import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { percent } from 'framer-motion';

const Splash = ({ onComplete, percent }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div css={splashContainer(isVisible)}>
      <div css={splashContent}>
        <img src="/images/moon.png" alt="moon" css={moonImage} />
        {percent}
      </div>
    </div>
  );
};

const splashContainer = (isVisible) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: ${isVisible ? 1 : 0};
  transition: opacity 0.5s ease-out;
`;

const splashContent = css`
  text-align: center;
  color: #edf3bd;
  font-family: 'Supply', sans-serif;
`;

const moonImage = css`
  width: 700px;
  height: auto;
  opacity: 0.4;
`;

export default Splash;
