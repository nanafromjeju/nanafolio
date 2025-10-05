import React from 'react';
import { css } from '@emotion/react';

const Main = () => {
  return (
    <div css={mainContainer}>
      <div css={heroSection}>
        <div css={mainTextWrapper}>
          <div css={mainTextTopGroup}>
            <p css={mainTitle}>Nana's</p>
            <div css={mainDivider} />
          </div>
          <div css={mainTextBottomGroup}>
            <p css={mainIntroduction}>
              Hi, there!
              <br /> I'm Nana, a front-end developer based in Korea
            </p>
            <p css={mainSubtitle}>Portfolio</p>
          </div>
        </div>
      </div>

      {/* <div css={aboutSection}>
        <p css={aboutTitle}>About</p>
        <p css={aboutTitle}>Stack</p>
        <p css={aboutTitle}>Experience</p>
        <p css={aboutTitle}>Education</p>
        <p css={aboutTitle}>Certification</p>
      </div> */}
    </div>
  );
};

export default Main;

const mainContainer = css`
  width: 100%;
  height: 100vh;
`;

const heroSection = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url('/images/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

// const aboutSection = css`
//   width: 100%;
//   height: 100%;
// `;

const mainTextWrapper = css`
  text-align: center;
  flex-direction: column;
`;

const mainTextTopGroup = css`
  display: flex;
  flex-direction: row;
`;

const mainTextBottomGroup = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const mainDivider = css`
  border: none;
  width: 100%;
  height: 1px;
  background-color: #edf3bd;
  display: inline-block;
  margin: auto 20px;
`;

const mainTitle = css`
  font-family: 'PPMondwest', sans-serif;
  font-weight: 400;
  font-size: 140px;
  color: #edf3bd;
`;

const mainSubtitle = css`
  font-family: 'PPPangaia';
  font-weight: 400;
  font-size: 140px;
  font-style: italic;
  color: #edf3bd;
`;

const mainIntroduction = css`
  font-family: 'Supply', sans-serif;
  font-weight: 400;
  font-size: 14px;
  margin-top: 20px;
  color: #fff;
  text-align: left;
`;

// const aboutTitle = css`
//   font-family: 'Supply', sans-serif;
//   font-weight: 400;
//   font-size: 20px;
//   color: #edf3bd;
// `;
