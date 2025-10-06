import React from 'react';
import { css } from '@emotion/react';

const ProjectSection = () => {
  return (
    <div css={projectSectionContainer}>
      <img src="/images/moon.png" alt="moon" css={moonImage} />
    </div>
  );
};

const projectSectionContainer = css`
  width: 100%;
  height: 100vh;
  padding: 0px 0px;
  position: relative;
`;

const moonImage = css`
  width: 500px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default ProjectSection;
