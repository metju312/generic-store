import React, {ReactElement} from 'react';
import TopBar from "../TopBar/TopBar";
import styled from "styled-components";
import { renderRoutes } from "react-router-config";
import routes from "../../../../configs/routes.config";
import {Route} from "react-router-dom";

const StyledLayout = styled.div`
  background: red;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Layout = () => {
  const routeComponents = routes.map(({path, element}, key) => {
    return (
      <Route path={path} element={
        <React.Suspense fallback={<>...</>}>
          {element}
        </React.Suspense>
      } key={key} />
    )};

  return (
    <StyledLayout>
      <TopBar />
      {routeComponents}
    </StyledLayout>
  );
};

export default Layout;
