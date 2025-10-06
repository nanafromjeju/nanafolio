import React from 'react';
import { css } from '@emotion/react';
import TopDecoration from './TopDecoration';
import ProfileCard from './ProfileCard';
import { rollingTexts } from '../../data/text';

const AboutSection = () => {
  return (
    <div css={aboutSection}>
      <TopDecoration />
      <div css={aboutContent}>
        <h3 css={aboutTitle}>ABOUT</h3>
        <p>UX 문제점을 개선하고 사용자 경험을 중시하는 개발자 김난아입니다.</p>

        <div css={profileCardWrapper}>
          <ProfileCard
            type="EXPERIENCE"
            title="팀토이즈"
            subtitle="프론트엔드 개발자"
            date="2025.05 - 현재"
          />
        </div>
      </div>

      <div css={rollingTextContainer}>
        <h1 css={rollingTextWrapper}>
          {rollingTexts.map((text, index) => (
            <span key={index} css={rollingTextItem}>
              {text}
              <span css={symbolStyle}> ✦ </span>
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

const aboutSection = css`
  width: 100%;
  height: 100vh;
  padding: 0px 0px;
  position: relative;
`;

const aboutContent = css`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

const aboutTitle = css`
  margin: 0;
  margin-bottom: 10px;
  font-family: 'Supply', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #edf3bd;
  opacity: 0.5;
`;

const profileCardWrapper = css`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 0px 20px;
`;

const rollingTextContainer = css`
  width: 100%;
  overflow: hidden;
  position: absolute;
  bottom: 20px;
  left: 0;
`;

const rollingTextWrapper = css`
  display: flex;
  white-space: nowrap;
  letter-spacing: -1px;
  margin: 0;
  animation: scrollBottomText 30s linear infinite;

  @keyframes scrollBottomText {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const rollingTextItem = css`
  font-size: 30px;
  color: #fff;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  font-family: 'Supply', sans-serif;
`;

const symbolStyle = css`
  color: #edf3bd;
  font-size: 20px;
  padding-right: 20px;
`;

export default AboutSection;
