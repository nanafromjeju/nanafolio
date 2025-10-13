import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import ProfileCardTopDecoration from './ProfileCardTopDecoration';
import { iconVariants } from '../../constants/motion';

const ProfileCard = ({ type, title, subtitle, date, children, onClick }) => {
  return (
    <motion.div
      css={profileCardContainer}
      whileHover="hover"
      initial="initial"
      onClick={onClick}
    >
      <motion.span css={topLeftIcon} variants={iconVariants}>
        +
      </motion.span>
      <motion.span css={topRightIcon} variants={iconVariants}>
        +
      </motion.span>
      <motion.span css={bottomLeftIcon} variants={iconVariants}>
        +
      </motion.span>
      <motion.span css={bottomRightIcon} variants={iconVariants}>
        +
      </motion.span>

      <ProfileCardTopDecoration />

      <div css={contentBoxStyle}>
        <div>
          <div css={headerStyle}>{type}</div>
        </div>
      </div>

      <div css={bottomInfoStyle}>
        <div css={titleStyle}>
          {title}
          <div css={dateStyle}>{date}</div>
        </div>
        {subtitle && <div css={subtitleStyle}>{subtitle}</div>}
        {children}
      </div>
    </motion.div>
  );
};

const profileCardContainer = css`
  position: relative;
  background-color: #edf3bd;
  padding: 20px;
  min-width: 250px;
  max-width: 330px;
  min-height: auto;
  width: 100%;
  margin: 40px auto;
  cursor: pointer;
`;

const contentBoxStyle = css`
  background-color: #55512e;
  min-height: 230px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const headerStyle = css`
  color: #edf3bd;
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-family: 'Supply', sans-serif;
`;

const bottomInfoStyle = css`
  margin-top: auto;
`;

const titleStyle = css`
  color: #1a1c12;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10px;
  font-family: 'Supply', sans-serif;
`;

const subtitleStyle = css`
  color: #55512e;
  font-size: 16px;
  margin-bottom: 10px;
  font-family: 'Supply', sans-serif;
`;

const dateStyle = css`
  color: #55512e;
  font-size: 12px;
  text-align: right;
  font-family: 'Supply', sans-serif;
  font-weight: 400;
  white-space: pre-line;
  flex-shrink: 0;
`;

const cornerPlusStyle = css`
  position: absolute;
  color: #edf3bd;
  font-size: 40px;
  font-weight: 100;
  line-height: 1;
  display: inline-block;
`;

const topLeftIcon = css`
  ${cornerPlusStyle}
  top: -30px;
  left: -30px;
`;

const topRightIcon = css`
  ${cornerPlusStyle}
  top: -30px;
  right: -30px;
`;

const bottomLeftIcon = css`
  ${cornerPlusStyle}
  bottom: -30px;
  left: -30px;
`;

const bottomRightIcon = css`
  ${cornerPlusStyle}
  bottom: -30px;
  right: -30px;
`;

export default ProfileCard;
