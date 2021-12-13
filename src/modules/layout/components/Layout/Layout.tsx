import React from 'react';
import TopBar from "../TopBar/TopBar";

const Layout = (props: any) => {

  return (
    <>
      <TopBar />
      {props.children}
    </>
  );
};

export default Layout;
