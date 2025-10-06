import React from 'react';
import { css } from '@emotion/react';
import TopDecoration from './TopDecoration';
import ProfileCard from './ProfileCard';

const AboutSection = () => {
  return (
    <div css={aboutSection}>
      <TopDecoration />
      <p css={aboutTitle}>ABOUT</p>
      <p>UX 문제점을 개선하고 사용자 경험을 중시하는 개발자 김난아입니다.</p>

      <div css={profileCardWrapper}>
        <ProfileCard
          type="EXPERIENCE"
          title="팀토이즈"
          subtitle="프론트엔드 개발자"
          date="2025.05 - 현재"
        />
        <ProfileCard
          type="EXPERIENCE"
          title="팀토이즈"
          subtitle="프론트엔드 개발자"
          date="2025.05 - 현재"
        />
        <ProfileCard
          type="EXPERIENCE"
          title="팀토이즈"
          subtitle="프론트엔드 개발자"
          date="2025.05 - 현재"
        />
      </div>
      <p css={aboutTitle}>STACK</p>
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
  opacity: 0.5;
`;

const profileCardWrapper = css`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 0px 20px;
`;

export default AboutSection;
