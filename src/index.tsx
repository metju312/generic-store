import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Layout from "./modules/layout/components/Layout/Layout";
import AuthProvider from "./modules/auth/providers/AuthProvider";
import UsersList from "./modules/user/components/UsersList/UsersList";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Layout>
        <>
          <UsersList/>
          <App/>
        </>
      </Layout>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
