/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ProfileCard = ({ type, title, subtitle, date, children }) => {
  return (
    <div css={profileCardContainer}>
      <span css={topLeftIcon}>+</span>
      <span css={topRightIcon}>+</span>
      <span css={bottomLeftIcon}>+</span>
      <span css={bottomRightIcon}>+</span>

      <div css={contentBoxStyle}>
        <div>
          <div css={headerStyle}>{type}</div>
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
    </div>
  );
};

const profileCardContainer = css`
  position: relative;
  background-color: #edf3bd;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  margin: 40px auto;
`;

const contentBoxStyle = css`
  background-color: #2a2a2a;
  min-height: 400px;
  padding: 40px 30px;
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
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const subtitleStyle = css`
  color: #ccc;
  font-size: 16px;
  margin-bottom: 16px;
`;

const dateStyle = css`
  color: #aaa;
  font-size: 14px;
  text-align: right;
`;

const cornerPlusStyle = css`
  position: absolute;
  color: #edf3bd;
  font-size: 40px;
  font-weight: 300;
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
