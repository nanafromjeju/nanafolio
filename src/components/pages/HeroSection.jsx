import React from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const introText =
    "HI, THERE!\nI'M NANA, A FRONTEND DEVELOPER\nWHO LOVES CODE AND CATS";

  return (
    <div css={heroSection}>
      <div css={mainTextWrapper}>
        <motion.div
          css={mainTextTopGroup}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            css={mainTitle}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Nana's
          </motion.p>
          <motion.div
            css={mainDivider}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ transformOrigin: 'left' }}
          />
        </motion.div>

        <motion.div
          css={mainTextBottomGroup}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.p
            css={mainSubtitle}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Portfolio
          </motion.p>

          <motion.p
            css={mainIntroduction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.2 }}
          >
            {introText.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay: 2.3 + index * 0.03,
                }}
              >
                {char === '\n' ? <br /> : char}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

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
  flex-direction: row-reverse;
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

export default HeroSection;
