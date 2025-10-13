import React from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import TopDecoration from './TopDecoration';
import ProfileCard from './ProfileCard';
import { rollingTexts } from '../../data/text';

const AboutSection = () => {
  return (
    <div id="about-section" css={aboutSection}>
      <TopDecoration />
      <motion.div
        css={aboutContent}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h3
          css={aboutTitle}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.5, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ABOUT
        </motion.h3>

        <motion.p
          css={aboutDescription}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A frontend developer passionate about solving UX problems
        </motion.p>
      </motion.div>

      <motion.div
        css={profileCardWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <ProfileCard
          type="EXPERIENCE"
          title="TEAMTOYS"
          subtitle="Front-end Developer"
          date="2025.05 - Present"
        />
      </motion.div>

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
`;

const aboutDescription = css`
  font-size: 16px;
  color: #fff;
  font-weight: 400;
  font-family: 'Supply', sans-serif;
`;

const profileCardWrapper = css`
  position: absolute;
  top: 30%;
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
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
  color: #edf3bd;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  font-family: 'Supply', sans-serif;
`;

const symbolStyle = css`
  color: #55512e;
  font-size: 20px;
  padding-right: 20px;
  padding-top: 4px;
`;

export default AboutSection;
