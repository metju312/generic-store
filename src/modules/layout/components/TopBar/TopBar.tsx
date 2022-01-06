import React, {useCallback} from 'react';
import styled, {DefaultTheme} from 'styled-components';
import useStyleTheme from "../../../common/hooks/useStyleTheme";
import {Link, useNavigate} from "react-router-dom";
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
  font-size: ${props => props.theme.topBar?.text?.fontSize};
`;

const TopBarGroup = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    margin-right: 20px;
  }
`;

const LogoIconWrapper = styled.div`
  width: 100px;
  cursor: pointer;
`;

const CartIconWrapper = styled.div`
  width: 100px;
  cursor: pointer;
`;

const MenuLink = styled.div`
  cursor: pointer;
  color: #2d333a;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  
`;

function TopBar() {
  const theme: DefaultTheme = useStyleTheme();
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path)
  };

  return (
    <TopBarContent theme={theme}>
      <TopBarGroup>
        <MenuLink onClick={() => navigateTo('/store')}>Sklep</MenuLink>
        <MenuLink onClick={() => navigateTo('/about')}>O mnie</MenuLink>
        <MenuLink onClick={() => navigateTo('/contact')}>Kontakt</MenuLink>
        <MenuLink onClick={() => navigateTo('/users')}>Użytkownicy</MenuLink>
      </TopBarGroup>
      <LogoIconWrapper>
        <LogoIcon onClick={() => navigateTo('/')} />
      </LogoIconWrapper>
      <TopBarGroup>
        <MenuLink onClick={() => navigateTo('/login')}>Logowanie</MenuLink>
        <MenuLink onClick={() => navigateTo('/register')}>Rejestracja</MenuLink>
        <CartIconWrapper>
          <CartIcon onClick={() => navigateTo('/cart')} title="Koszyk" />
        </CartIconWrapper>
      </TopBarGroup>
    </TopBarContent>
  );
}

export default TopBar;