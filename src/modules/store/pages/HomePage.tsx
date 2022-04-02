import React from 'react';
import styled from "styled-components";
import useStyleTheme from "../../common/hooks/useStyleTheme";
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const theme = useStyleTheme();

  return (
    <HomePageContent theme={theme}>
      <DescriptionPanel theme={theme}>
        <p>{t('name')}</p>
      </DescriptionPanel>
      <ProductPanel theme={theme}>
        product
        product
        product
      </ProductPanel>
    </HomePageContent>
  );
};

const HomePageContent = styled.div`
  height: calc(100% - ${props => props.theme.topBar?.height}px);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
`;

const DescriptionPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${props => props.theme.content?.sidePaddings}px;
  background: ${props => props.theme.content?.palette?.dark};
  flex-grow: 1;
`;

const ProductPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: ${props => props.theme.content?.sidePaddings}px;
  flex-grow: 1;
  background-image: url('/assets/images/product.webp');
  background-size: 100%;
  background-repeat: no-repeat;
`;

export default HomePage;
