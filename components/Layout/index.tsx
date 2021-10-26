import React from "react";
import Spacer from "../Spacer";
import Nav from "./Nav";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Nav />
      <Spacer />
      <main>{children}</main>
    </>
  );
};

export default Layout;
