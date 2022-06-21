import styled from "styled-components";
import SVG from "react-inlinesvg";

interface IProps {
  color: string;
  width: number
  height: number
}

export const StyledSvg = styled(SVG)<IProps>`
  cursor: pointer;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  & path {
    fill: ${({ color }) => color};
  }
`;