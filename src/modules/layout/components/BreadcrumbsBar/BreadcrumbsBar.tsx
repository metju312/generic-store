import React from 'react';
import styled, {DefaultTheme} from "styled-components";
import useStyleTheme from "../../../common/hooks/useStyleTheme";


const StyledBreadcrumbsBar = styled.div`
  background: ${props => props.theme.breadcrumbsBar?.background};
  padding-left: ${props => props.theme.breadcrumbsBar?.sidePaddings}px;
  padding-right: ${props => props.theme.breadcrumbsBar?.sidePaddings}px;
  height: ${props => props.theme.breadcrumbsBar?.height}px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: ${props => props.theme.breadcrumbsBar?.text?.fontSize}px;
  line-height: 1.2;
  text-transform: capitalize;
`;

const BreadcrumbsBar = () => {
  const theme: DefaultTheme = useStyleTheme();

  return (
    <StyledBreadcrumbsBar theme={theme}>Strona główna / Galeria / </StyledBreadcrumbsBar>
  );
};

export default BreadcrumbsBar;
