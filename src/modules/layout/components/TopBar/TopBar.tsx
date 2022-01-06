import React from 'react';
import styled, {DefaultTheme} from 'styled-components';
import useStyleTheme from "../../../common/hooks/useStyleTheme";
import {useNavigate} from "react-router-dom";
import { ReactComponent as LogoIcon } from '../../../../icons/logo.svg';
import { ReactComponent as CartIcon } from '../../../../modules/store/icons/cart.svg';

const TopBarContent = styled.div`
  background: ${props => props.theme.topBar?.background};
  height: ${props => props.theme.topBar?.height}px;
  padding-left: ${props => props.theme.topBar?.sidePaddings}px;
  padding-right: ${props => props.theme.topBar?.sidePaddings}px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.card?.borderColor};
  color: ${props => props.theme.topBar?.text?.color};
  font-family: ${props => props.theme.topBar?.text?.fontFamily};
  font-size: ${props => props.theme.topBar?.text?.fontSize}px;
`;

const TopBarGroupLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > * {
    margin-right: 20px;
  }
`;
const TopBarGroupRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > * {
    margin-left: 20px;
  }
`;

const LogoIconWrapper = styled.div`
  width: 110px;
  cursor: pointer;
`;

const CartIconWrapper = styled.div`
  cursor: pointer;
`;

const MenuLink = styled.div`
  cursor: pointer;
  color: #2d333a;
  font-weight: 600;
  text-transform: uppercase;
`;

function TopBar() {
  const theme: DefaultTheme = useStyleTheme();
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path)
  };

  return (
    <TopBarContent theme={theme}>
      <TopBarGroupLeft>
        <MenuLink onClick={() => navigateTo('/store')}>Sklep</MenuLink>
        <MenuLink onClick={() => navigateTo('/about')}>O mnie</MenuLink>
        <MenuLink onClick={() => navigateTo('/contact')}>Kontakt</MenuLink>
        <MenuLink onClick={() => navigateTo('/users')}>Użytkownicy</MenuLink>
      </TopBarGroupLeft>
      <LogoIconWrapper>
        <LogoIcon onClick={() => navigateTo('/')} />
      </LogoIconWrapper>
      <TopBarGroupRight>
        <MenuLink onClick={() => navigateTo('/login')}>Logowanie</MenuLink>
        <MenuLink onClick={() => navigateTo('/register')}>Rejestracja</MenuLink>
        <CartIconWrapper>
          <CartIcon onClick={() => navigateTo('/cart')} title="Koszyk" />
        </CartIconWrapper>
      </TopBarGroupRight>
    </TopBarContent>
  );
}

export default TopBar;