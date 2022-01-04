import React from 'react';
import styled from "styled-components";
import useStyleTheme from "../../common/hooks/useStyleTheme";

const HomePageContent = styled.div`
  background: #39625d;
  height: calc(100% - ${props => props.theme.topBar?.height})px;
`;

const HomePage = () => {
  const theme = useStyleTheme();

  return (
    <HomePageContent theme={theme}>
      HomePage
    </HomePageContent>
  );
};

export default HomePage;