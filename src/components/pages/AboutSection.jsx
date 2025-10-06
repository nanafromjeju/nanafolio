import React from 'react';
import { css } from '@emotion/react';

const AboutSection = () => {
  return (
    <div css={aboutSection}>
      <p css={aboutTitle}>About</p>
      <p css={aboutTitle}>Stack</p>
      <p css={aboutTitle}>Experience</p>
      <p css={aboutTitle}>Education</p>
      <p css={aboutTitle}>Certification</p>
    </div>
  );
};

const aboutSection = css`
  width: 100%;
  height: 100%;
`;

const aboutTitle = css`
  font-family: 'Supply', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #edf3bd;
`;

export default AboutSection;
