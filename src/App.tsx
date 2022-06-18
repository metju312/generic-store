import React from 'react';
import styleThemeConfig from "./configs/style-theme.config";
import {BrowserRouter} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";


import StyleThemeProvider from "./modules/common/providers/StyleThemeProvider";
import Layout from "./modules/layout/components/Layout/Layout";
import AuthProvider from "./modules/auth/providers/AuthProvider";

import "@fontsource/inter";

const HomePage = React.lazy(() => import("./modules/products/pages/HomePage"));

const ProductsPage = React.lazy(() => import("./modules/products/pages/ProductsPage"));
const AboutPage = React.lazy(() => import("./modules/common/pages/AboutPage"));
const ContactPage = React.lazy(() => import("./modules/common/pages/ContactPage"));
const UsersList = React.lazy(() => import("./modules/users/pages/UsersList"));

const LoginPage = React.lazy(() => import("./modules/auth/pages/LoginPage"));
const RegisterPage = React.lazy(() => import("./modules/auth/pages/RegisterPage"));
const CartPage = React.lazy(() => import("./modules/products/pages/CartPage"));

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
                </React.Suspense>}
              />
              <Route path="products" element={
                <React.Suspense fallback={<>...</>}>
                  <ProductsPage />
                </React.Suspense>}
              />
              <Route path="about" element={
                <React.Suspense fallback={<>...</>}>
                  <AboutPage />
                </React.Suspense>}
              />
              <Route path="contact" element={
                <React.Suspense fallback={<>...</>}>
                  <ContactPage />
                </React.Suspense>}
              />
              <Route path="users" element={
                <React.Suspense fallback={<>...</>}>
                  <UsersList />
                </React.Suspense>}
              />
              <Route path="login" element={
                <React.Suspense fallback={<>...</>}>
                  <LoginPage />
                </React.Suspense>}
              />
              <Route path="register" element={
                <React.Suspense fallback={<>...</>}>
                  <RegisterPage />
                </React.Suspense>}
              />
              <Route path="cart" element={
                <React.Suspense fallback={<>...</>}>
                  <CartPage />
                </React.Suspense>}
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </StyleThemeProvider>
  );
}

export default App;
