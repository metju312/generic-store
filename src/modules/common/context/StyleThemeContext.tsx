import {createContext} from "react";

export interface StyleThemeContextType {
  topBar?: {
    background?: string
    padding?: string
    text?: Text
  },
  content?: {
    background?: string
    padding?: string
    text?: Text
    heading?: Text
  },
  footer?: {
    background?: string
    padding?: string,
    text?: Text
  },
  card?: {
    borderColor?: string
  }
}

interface Text {
  color?: string
  'font-family'?: string
  'font-size'?: string
}

const StyleThemeContext = createContext<StyleThemeContextType>({} as StyleThemeContextType);

export default StyleThemeContext;
