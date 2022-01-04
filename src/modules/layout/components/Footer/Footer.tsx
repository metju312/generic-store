import React from 'react';
import styled, {DefaultTheme} from 'styled-components';
import useStyleTheme from "../../../common/hooks/useStyleTheme";
import {useNavigate} from "react-router-dom";

const FooterContent = styled.div`
  background: ${props => props.theme.footer?.background};
  height: ${props => props.theme.footer?.height}px;
  color: ${props => props.theme.footer?.text?.color};
`;

function Footer() {
  const theme: DefaultTheme = useStyleTheme();
  const navigate = useNavigate();

  return (
    <FooterContent theme={theme}>
      footer
    </FooterContent>
  );
}

export default Footer;