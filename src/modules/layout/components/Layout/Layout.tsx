import React, {ReactElement} from 'react';
import TopBar from "../TopBar/TopBar";
import styled from "styled-components";

const StyledLayout = styled.div`
  background: red;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Layout = (props) => {
  return (
    <StyledLayout>
      <TopBar />
      {props.children}
    </StyledLayout>
  );
};

export default Layout;
