import React from 'react';
import styled from "styled-components";
import useStyleTheme from "../../common/hooks/useStyleTheme";
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const theme = useStyleTheme();

  return (
    <HomePageContent theme={theme}>
      <ProductPanel />
    </HomePageContent>
  );
};

const HomePageContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  background: linear-gradient(138.52deg, #FFA000 13.57%, #A82F30 72.75%);
`;

const DescriptionPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${props => props.theme.content?.sidePaddings}px;
  background: ${props => props.theme.content?.palette?.dark};
  flex-grow: 1;
`;

const ProductPanel = styled.div`
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin: auto;
  background-image: url('/assets/images/picture1.jpeg');
  background-repeat: no-repeat;
  min-height: 400px;
  min-width: 400px;
  max-height: 400px;
  max-width: 400px;
`;

export default HomePage;
