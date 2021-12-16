import React from 'react';
import {Route} from "../modules/common/models/routes.model";

const HomePage = React.lazy(() => import("../modules/shop/components/Home/HomePage"));
const UsersList = React.lazy(() => import("../modules/user/components/UsersList/UsersList"));

const routes = [
  {
    path: '/',
    exact: true,
    element: props => HomePage
  },
  {
    path: '/users',
    element: props => UsersList
  }
];

export default routes;