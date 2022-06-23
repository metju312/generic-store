import React from 'react';
import styled, {DefaultTheme} from 'styled-components';
import useStyleTheme from "../../../common/hooks/useStyleTheme";
import {useNavigate} from "react-router-dom";
import Typography from "../../../common/typography/Typography";
import useNavigation from "../../../common/utils/routing/useNavigation";

function Footer() {
  const theme: DefaultTheme = useStyleTheme();
  const { navigateTo } = useNavigation();

  const textColor = theme.footer?.text?.color as string;

  const drawMenuLink = (label: string, path: string) => {
    return (
      <StyledMenuLink onClick={() => navigateTo(path)}>
        <Typography variant="textSmNormal" color={textColor}>
          {label}
        </Typography>
      </StyledMenuLink>
    )
  }

  return (
    <FooterContainerWrapper theme={theme}>
      <FooterContainer theme={theme}>
        <LinksGroup>
          {drawMenuLink('Strona główna', '/')}
          {drawMenuLink('Galeria', '/store')}
          {drawMenuLink('O mnie', '/about')}
          {drawMenuLink('Kontakt', '/contact')}
        </LinksGroup>
      </FooterContainer>
    </FooterContainerWrapper>
  );
}

const FooterContainerWrapper = styled.div`
  width: 100%;
  background: ${props => props.theme.footer?.background};
  height: ${props => props.theme.footer?.height}px;
  color: ${props => props.theme.footer?.text?.color};
`;

const FooterContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  max-width: ${props => props.theme.footer?.maxWidth}px;
  padding-left: ${props => props.theme.footer?.sidePaddings}px;
  padding-right: ${props => props.theme.footer?.sidePaddings}px;
`;

const LinksGroup = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    margin-right: 32px;
  }
`;

const StyledMenuLink = styled.div`
  cursor: pointer;
`;

export default Footer;