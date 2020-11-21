import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  font-family: 'Roboto', sans-serif;

  }
  body html #root {
    height: 100%;
  }

`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
export const NavNav = styled(Container)`
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const NavHeader = styled.header`
  background: #14222b;
  padding: 15px;
  margin-bottom: 30px;
`;

export const LogoImage = styled.img`
  height: 100%;
  max-height: 43px;

  @media (max-width: 416px) {
    display: none;
  }

  @media (max-width: 768px) {
    max-height: 20px;
  }
`;

export const NavUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  gap: 20px;
`;

export const NavLi = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  gap: 20px;
  a {
    color: #fff;
    text-decoration: none;
  }
`;
