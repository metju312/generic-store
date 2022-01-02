import React, {useCallback} from 'react';
import styled from 'styled-components';
import useStyleTheme from "../../../common/hooks/useStyleTheme";
import {Link, useNavigate} from "react-router-dom";
import { ReactComponent as LogoIcon } from '../../../../icons/logo.svg';
import {StyleThemeContextType} from "../../../common/context/StyleThemeContext";
import { ReactComponent as CartIcon } from '../../../../modules/store/icons/cart.svg';

// https://styled-components.com/docs/api#typescript - otypowanie styled-componentów
const TopBarContent = styled.div<StyleThemeContextType>`
  background: ${props => props.theme.topBar.background};
  height: ${props => props.theme.topBar.height}px;
  padding-left: ${props => props.theme.topBar.sidePaddings}px;
  padding-right: ${props => props.theme.topBar.sidePaddings}px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.card.borderColor};
  ${props => props.theme.topBar.text}
`;

const TopBarGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const LogoIconWrapper = styled.div`
  width: 100px;
  cursor: pointer;
`;

const CartIconWrapper = styled.div`
  width: 100px;
  cursor: pointer;
`;

function TopBar() {
  const theme: StyleThemeContextType = useStyleTheme();
  const navigate = useNavigate();

  const handleOnLogoIconClick = useCallback(() => navigate('/'), []);
  const handleOnCartIconClick = useCallback(() => navigate('/cart'), []);

  return (
    <TopBarContent theme={theme}>
      <TopBarGroup>
        <Link to="/store">Sklep</Link>
        <Link to="/about">O mnie</Link>
        <Link to="/contact">Kontakt</Link>
        <Link to="/users">Użytkownicy</Link>
      </TopBarGroup>
      <LogoIconWrapper>
        <LogoIcon onClick={handleOnLogoIconClick} />
      </LogoIconWrapper>
      <TopBarGroup>
        <Link to="/login">Logowanie</Link>
        <Link to="/register">Rejestracja</Link>
        <CartIconWrapper>
          <CartIcon onClick={handleOnCartIconClick} title="Koszyk" />
        </CartIconWrapper>
      </TopBarGroup>
    </TopBarContent>
  );
}

export default TopBar;