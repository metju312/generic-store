import React, {ReactElement} from 'react';
import StyleThemeContext from "../context/StyleThemeContext";
import {DefaultTheme} from "styled-components";

interface StyleThemeProvider {
  config: DefaultTheme
  children: ReactElement
}

function StyleThemeProvider({config, children}: StyleThemeProvider) {
  return (
    <StyleThemeContext.Provider value={config}>{children}</StyleThemeContext.Provider>
  );
}

export default StyleThemeProvider;