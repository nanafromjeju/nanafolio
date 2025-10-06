import { css } from '@emotion/react';
import ProfileCardTopDecoration from './ProfileCardTopDecoration';

const ProfileCard = ({ type, title, subtitle, date, children }) => {
  return (
    <div css={profileCardContainer}>
      <span css={topLeftIcon}>+</span>
      <span css={topRightIcon}>+</span>
      <span css={bottomLeftIcon}>+</span>
      <span css={bottomRightIcon}>+</span>

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
    </div>
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
`;

const contentBoxStyle = css`
  background-color: #25292c;
  min-height: 230px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const headerStyle = css`
  color: #888;
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 20px;
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
  align-items: center;
  margin-top: 10px;
`;

const subtitleStyle = css`
  color: #55512e;
  font-size: 16px;
  margin-bottom: 10px;
`;

const dateStyle = css`
  color: #55512e;
  font-size: 14px;
  text-align: right;
  font-family: 'Supply', sans-serif;
  font-weight: 400;
`;

const cornerPlusStyle = css`
  position: absolute;
  color: #edf3bd;
  font-size: 40px;
  font-weight: 100;
  line-height: 1;
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
