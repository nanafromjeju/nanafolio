import { css } from '@emotion/react';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div css={layout}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

const layout = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default Layout;
