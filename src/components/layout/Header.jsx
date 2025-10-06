import React from 'react';
import { css } from '@emotion/react';

const Header = () => {
  return (
    <div css={headerContainer}>
      <div css={headerContent}>
        <div css={headerLogo}>nanafolio</div>

        <ul css={headerMenu}>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  );
};

const headerContainer = css`
  width: 100%;
  background-color: transparent;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 100;
`;

const headerContent = css`
  width: 100%;
  padding: 10px 20px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const headerLogo = css`
  cursor: pointer;
  color: #edf3bd;
  font-family: 'Supply', sans-serif;
  font-size: 20px;
  letter-spacing: -1px;
`;

const headerMenu = css`
  display: flex;
  list-style: none;
  gap: 20px;
  cursor: pointer;

  li {
    color: #edf3bd;
    font-family: 'Supply', sans-serif;
    font-size: 13px;
  }
`;

export default Header;
