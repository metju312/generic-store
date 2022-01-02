import React from 'react';
import StyleThemeProvider from "./modules/common/providers/StyleThemeProvider";
import Layout from "./modules/layout/components/Layout/Layout";
import AuthProvider from "./modules/auth/providers/AuthProvider";
import styleThemeConfig from "./configs/style-theme.config";
import {BrowserRouter} from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";

const HomePage = React.lazy(() => import("./modules/shop/components/Home/HomePage"));
const UsersList = React.lazy(() => import("./modules/user/components/UsersList/UsersList"));

function App() {
  return (
    <StyleThemeProvider config={styleThemeConfig}>
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={
                <React.Suspense fallback={<>...</>}>
                  <HomePage />
                </React.Suspense>
              } />
              <Route path="users" element={
                <React.Suspense fallback={<>...</>}>
                  <UsersList />
                </React.Suspense>
              } />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </StyleThemeProvider>
  );
}

export default App;
