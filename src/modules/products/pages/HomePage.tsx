import React from 'react';
import styled from "styled-components";
import useStyleTheme from "../../common/hooks/useStyleTheme";
import { useTranslation } from 'react-i18next';
import twitterIcon from "../../common/icons/twitter.svg";
import instagramIcon from "../../common/icons/instagram.svg";
import facebookIcon from "../../common/icons/facebook.svg";
import circleIcon from "../../common/icons/circle.svg";
import circleFilledIcon from "../../common/icons/circle-filled.svg";
import {StyledSvg} from "../../common/icons/StyledSvg";
import useNavigation from "../../common/utils/routing/useNavigation";
import Typography from "../../common/typography/Typography";

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
      <TitlesContainerWrapper theme={theme}>
        <TitlesContainer theme={theme}>
          <TopLeftTitle>
            <Typography variant='displayXsBold' color={textColor}>
              EWA JARZĄBEK
            </Typography>
          </TopLeftTitle>
          <BottomRightTitle>
            <Typography variant='displayXsBold' color={textColor}>
              BIESZCZADZKA JESIEŃ
            </Typography>
          </BottomRightTitle>
        </TitlesContainer>
      </TitlesContainerWrapper>
      <CenterIconsContainerWrapper theme={theme}>
        <CenterIconsContainer theme={theme}>
          <SocialIcons>
            <StyledSvg width={20} height={20} color={textColor} src={twitterIcon} onClick={() => navigateTo('/twitter')} title="Twitter"/>
            <StyledSvg width={20} height={20} color={textColor} src={instagramIcon} onClick={() => navigateTo('/instagram')} title="Instagram"/>
            <StyledSvg width={20} height={20} color={textColor} src={facebookIcon} onClick={() => navigateTo('/facebook')} title="Facebook"/>
          </SocialIcons>
          <CarouselIcons>
            <StyledSvg width={12} height={12} src={circleIcon} onClick={() => ({})}/>
            <StyledSvg width={12} height={12} src={circleIcon} onClick={() => ({})}/>
            <StyledSvg width={12} height={12} src={circleFilledIcon} onClick={() => ({})}/>
            <StyledSvg width={12} height={12} src={circleIcon} onClick={() => ({})}/>
          </CarouselIcons>
        </CenterIconsContainer>
      </CenterIconsContainerWrapper>
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
  cursor: pointer;
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

const CenterIconsContainerWrapper = styled.div`
  position: absolute;
  top:calc(50vh - 54px);;
  left:0;
  right:0;
  bottom:0;
  
  width: 100%;
`;

const CenterIconsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  max-width: ${props => props.theme.topBar?.maxWidth}px;
  padding-left: ${props => props.theme.topBar?.sidePaddings}px;
  padding-right: ${props => props.theme.topBar?.sidePaddings}px;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  
  & > * {
    margin-bottom: 16px;
  }
`;

const CarouselIcons = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  
  & > * {
    margin-bottom: 16px;
  }
`;

const TitlesContainerWrapper = styled.div`
  position: absolute;
  top: calc(50vh);
  left:0;
  right:0;
  bottom:0;
  
  width: 100%;
`;

const TitlesContainer = styled.div`
  position: absolute;
  top: -230px;
  left:0;
  right:0;
  bottom:0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  max-width: 1240px;
  height: 460px;
  padding-left: ${props => props.theme.topBar?.sidePaddings}px;
  padding-right: ${props => props.theme.topBar?.sidePaddings}px;
`;

const TopLeftTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  max-width: 200px;
`;

const BottomRightTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: flex-end;
  max-width: 200px;
`;


export default HomePage;
