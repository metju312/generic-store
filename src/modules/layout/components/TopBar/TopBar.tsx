import React from 'react';
import styled from 'styled-components';
import useStyleTheme from "../../../common/hooks/useStyleTheme";

const StyledTopBar = styled.div`
  background: ${props => props.theme.topBar.background};;
`;

function TopBar() {
  const theme = useStyleTheme();
  console.log('theme', theme);

  return (
    <StyledTopBar theme={theme}>
      <div>topbar</div>
    </StyledTopBar>
  );
}

export default TopBar;