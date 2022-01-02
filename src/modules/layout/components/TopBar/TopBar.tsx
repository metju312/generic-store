import React from 'react';
import styled from 'styled-components';
import useStyleTheme from "../../../common/hooks/useStyleTheme";
import {Link} from "react-router-dom";

const StyledTopBar = styled.div`
  background: ${props => props.theme.topBar.background};
  padding: ${props => props.theme.topBar.padding};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  ${props => props.theme.topBar.text}
`;

function TopBar() {
  const theme = useStyleTheme();

  return (
    <StyledTopBar theme={theme}>
      <div>
        <Link to="/store">Sklep</Link>
        <Link to="/about">O mnie</Link>
        <Link to="/contact">Kontakt</Link>
        <Link to="/users">Użytkownicy</Link>
      </div>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div>
        <Link to="/login">Logowanie</Link>
        <Link to="/register">Rejestracja</Link>
        <Link to="/cart">Koszyk</Link>
      </div>
    </StyledTopBar>
  );
}

export default TopBar;