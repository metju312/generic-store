import React from 'react';
import styled from "styled-components";
import useStyleTheme from "../../common/hooks/useStyleTheme";
import { useTranslation } from 'react-i18next';
import twitterIcon from "../../common/icons/twitter.svg";
import instagramIcon from "../../common/icons/instagram.svg";
import facebookIcon from "../../common/icons/facebook.svg";
import {StyledSvg} from "../../common/icons/StyledSvg";
import useNavigation from "../../common/utils/routing/useNavigation";

const HomePage = () => {
  const theme = useStyleTheme();
  const { t } = useTranslation();
  const { navigateTo } = useNavigation();

  const textColor = theme.topBar?.text?.color as string;

  return (
    <HomePageContent theme={theme}>
      <ProductPanelContainer>
        <ProductPanel />
      </ProductPanelContainer>
      <SocialIconsContainerWrapper>
        <SocialIconsContainer theme={theme}>
          <StyledSvg width={20} height={20} color={textColor} src={twitterIcon} onClick={() => navigateTo('/twitter')} title="Twitter"/>
          <StyledSvg width={20} height={20} color={textColor} src={instagramIcon} onClick={() => navigateTo('/instagram')} title="Instagram"/>
          <StyledSvg width={20} height={20} color={textColor} src={facebookIcon} onClick={() => navigateTo('/facebook')} title="Facebook"/>
        </SocialIconsContainer>
      </SocialIconsContainerWrapper>
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

const SocialIconsContainerWrapper = styled.div`
  position: absolute;
  top:calc(50vh - 54px);;
  left:0;
  right:0;
  bottom:0;
`;

const SocialIconsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.content?.maxWidth}px;
  padding-left: ${props => props.theme.content?.sidePaddings}px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  
  & > * {
    margin-bottom: 16px;
  }
`;

export default HomePage;
