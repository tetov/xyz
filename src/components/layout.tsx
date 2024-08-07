import React from "react";
import Footer from "src/components/footer";
import type { NavBarProp } from "src/components/nav-bar";
import NavBar from "src/components/nav-bar";

type LayoutProps = React.PropsWithChildren<
  NavBarProp & {
    footerChildren?: JSX.Element | JSX.Element[];
  }
>;

const Layout = ({ children, footerChildren, pathname }: LayoutProps) => (
  <div className="global-wrapper min-h-screen bg-light-bg dark:bg-dark-bg print:bg-light-bg text-light-text dark:text-dark-text print:text-light-text">
    <NavBar className="print:hidden" pathname={pathname} />
    <main className="w-full md:w-3/4 mx-auto px-5">{children}</main>
    <Footer>{footerChildren}</Footer>
  </div>
);

export default Layout;
