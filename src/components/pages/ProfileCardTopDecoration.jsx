import React from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

const ProfileCardTopDecoration = () => {
  return (
    <div css={topDecorationContainer}>
      <div css={dotGrid}>
        {Array(9)
          .fill()
          .map((_, i) => {
            const row = Math.floor(i / 3);
            const col = i % 3;
            const delay = (row + col) * 0.15;

            return (
              <motion.div
                key={i}
                css={dotStyle}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: delay,
                  ease: 'easeInOut',
                }}
              />
            );
          })}
      </div>
      <div css={mainDivider} />
    </div>
  );
};

const topDecorationContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0px 0px 10px 0px;
`;

const dotGrid = css`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  gap: 4px;
  padding: 0px 4px;
`;

const dotStyle = css`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #555122;
`;

const mainDivider = css`
  border: none;
  width: 100%;
  height: 1px;
  background-color: #25292c;
  display: inline-block;
  margin-left: 10px;
`;

export default ProfileCardTopDecoration;
