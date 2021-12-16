import React, {ReactElement} from 'react';
import StyleThemeContext, {StyleThemeContextType} from "../context/StyleThemeContext";

interface StyleThemeProvider {
  config: StyleThemeContextType
  children: ReactElement
}

function StyleThemeProvider({config, children}: StyleThemeProvider) {
  return (
    <StyleThemeContext.Provider value={config}>{children}</StyleThemeContext.Provider>
  );
}

export default StyleThemeProvider;