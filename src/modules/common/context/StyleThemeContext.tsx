import {createContext} from "react";

export interface StyleThemeContextType {
  topBar?: {
    background?: string
  }
}

const StyleThemeContext = createContext<StyleThemeContextType>({} as StyleThemeContextType);

export default StyleThemeContext;
