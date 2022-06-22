import React from 'react';
import styled, {DefaultTheme} from 'styled-components';
import useStyleTheme from "../../../common/hooks/useStyleTheme";
import {useNavigate} from "react-router-dom";
import cartIcon from '../../../products/icons/cart.svg';
import favoriteIcon from '../../../products/icons/favorite.svg';
import logoSvg from '../../../../configs/logo/logo.svg';
import Typography from "../../../common/typography/Typography";
import {StyledSvg} from "../../../common/icons/StyledSvg";

function TopBar() {
  const theme: DefaultTheme = useStyleTheme();
  const navigate = useNavigate();

  const textColor = theme.topBar?.text?.color as string;

  const navigateTo = (path) => {
    navigate(path)
  };

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
    <StyledTopBar theme={theme}>
      <TopBarContainer theme={theme}>
        <TopBarGroupLeft>
          <StyledSvg width={208.73} height={32} color={textColor} src={logoSvg} onClick={() => navigateTo('/')} title="Strona główna"/>
        </TopBarGroupLeft>
        <TopBarGroupCenter>
          {drawMenuLink('Galeria', '/store')}
          {drawMenuLink('O mnie', '/about')}
          {drawMenuLink('Kontakt', '/contact')}
        </TopBarGroupCenter>
        <TopBarGroupRight>
          <CartIconWrapper>
            <StyledSvg width={18} height={21} color={textColor} src={cartIcon} onClick={() => navigateTo('/cart')} title="Koszyk"/>
            <StyledSvg width={20} height={18.35} color={textColor} src={favoriteIcon} onClick={() => navigateTo('/favorite')} title="Ulubione"/>
          </CartIconWrapper>
        </TopBarGroupRight>
      </TopBarContainer>
    </StyledTopBar>
  );
}

const StyledTopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  color: ${props => props.theme.topBar?.text?.color};
  font-family: ${props => props.theme.topBar?.text?.fontFamily};
  font-size: ${props => props.theme.topBar?.text?.fontSize}px;
`;

const TopBarContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.theme.topBar?.height}px;
  max-width: ${props => props.theme.topBar?.maxWidth}px;
  padding-left: ${props => props.theme.topBar?.sidePaddings}px;
  padding-right: ${props => props.theme.topBar?.sidePaddings}px;
`;

const TopBarGroupLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0;
  & > * {
    margin-right: 20px;
  }
`;

const TopBarGroupRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-grow: 1;
  flex-basis: 0;
  & > * {
    margin-left: 20px;
  }
`;

const TopBarGroupCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex-basis: 0;
  & > * {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const CartIconWrapper = styled.div`
  > * {
    margin-left: 12px;
  }
`;

const StyledMenuLink = styled.div`
  cursor: pointer;
`;

export default TopBar;
