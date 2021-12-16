import React from 'react';
import StyleThemeProvider from "./modules/common/providers/StyleThemeProvider";
import Layout from "./modules/layout/components/Layout/Layout";
import AuthProvider from "./modules/auth/providers/AuthProvider";
import styleThemeConfig from "./configs/style-theme.config";
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <StyleThemeProvider config={styleThemeConfig}>
      <AuthProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </AuthProvider>
    </StyleThemeProvider>
  );
}

export default App;
