import React, {ReactChild} from "react";
import useStyleTheme from "../hooks/useStyleTheme";
import styled from "styled-components";

enum Variants {
  displayXsBold = 'displayXsBold',
  textMdNormal = 'textMdNormal',
}

interface IProps {
  variant: 'displayXsBold' | 'textMdNormal',
  children: ReactChild
}

function Typography({variant, children}: IProps) {
  const theme = useStyleTheme();

  return <StyledTypography theme={theme} variant={variant}>{children}</StyledTypography>
}

const StyledTypography = styled.div<{variant: string}>`
  //color: ${props => props.theme.textStyles?.displayXsBold?.fontSize};
  font-family: ${props => props.theme.textStyles?.[props.variant]?.fontFamily};
  font-size: ${props => props.theme.textStyles?.[props.variant]?.fontSize};
`;

export default Typography;