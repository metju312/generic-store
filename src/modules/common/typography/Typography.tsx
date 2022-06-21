import React, {ReactChild} from "react";
import useStyleTheme from "../hooks/useStyleTheme";
import styled from "styled-components";
import {TextStyles} from "../models/styled";

interface IProps {
  variant: keyof TextStyles,
  children: ReactChild,
  color?: string
}

function Typography({variant, children, color}: IProps) {
  const theme = useStyleTheme();

  return <StyledTypography theme={theme} variant={variant} color={color}>{children}</StyledTypography>
}

const StyledTypography = styled.div<{variant: string}>`
  font-family: ${props => props.theme.textStyles?.[props.variant]?.fontFamily};
  font-size: ${props => props.theme.textStyles?.[props.variant]?.fontSize};
  color: ${props => props.color};
`;

export default Typography;