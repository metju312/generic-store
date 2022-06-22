import React from 'react';
import styled from "styled-components";
import useStyleTheme from "../../common/hooks/useStyleTheme";
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const theme = useStyleTheme();

  return (
    <HomePageContent theme={theme}>
      <ProductPanelContainer>
        <ProductPanel />
      </ProductPanelContainer>
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

const ProductPanelContainer = styled.div`
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin: auto;
  width: 600px;
  height: 451.35px;
`;

const ProductPanel = styled.div`
  height: 100%;
  width: 100%;
  object-fit: contain;
  background-image: url('/assets/images/picture1.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
          drop-shadow(63px 48px 22px rgba(0, 0, 0, 0.01))
          drop-shadow(40px 30px 20px rgba(0, 0, 0, 0.08))
          drop-shadow(23px 17px 17px rgba(0, 0, 0, 0.28))
          drop-shadow(10px 8px 13px rgba(0, 0, 0, 0.47))
          drop-shadow(3px 2px 7px rgba(0, 0, 0, 0.54));
`;

export default HomePage;
