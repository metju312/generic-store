import React from 'react';
import TopBar from "../TopBar/TopBar";
import styled from "styled-components";
import useStyleTheme from "../../../common/hooks/useStyleTheme";
import Footer from "../Footer/Footer";
import BreadcrumbsBar from "../BreadcrumbsBar/BreadcrumbsBar";

const StyledLayout = styled.div`
  background: ${props => props.theme.content?.background};
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Layout = (props) => {
  const theme = useStyleTheme();

  return (
    <StyledLayout theme={theme}>
      <TopBar />
      <BreadcrumbsBar/>
      {props.children}
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
