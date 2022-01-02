import React from 'react';
import TopBar from "../TopBar/TopBar";
import styled from "styled-components";
import useStyleTheme from "../../../common/hooks/useStyleTheme";

const StyledLayout = styled.div`
  background: ${props => props.theme.content.background};
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Layout = (props) => {
  const theme = useStyleTheme();

  return (
    <StyledLayout theme={theme}>
      <TopBar />
      {props.children}
    </StyledLayout>
  );
};

export default Layout;
