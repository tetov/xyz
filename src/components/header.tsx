import { Link } from "gatsby";
import * as React from "react";
import querySiteMetadata from "src/hooks/query-site-metadata";

export type HeaderProp = {
  subHeading?: JSX.Element | string;
};

const Header: React.FC<HeaderProp> = ({ subHeading }) => (
  <header className="text-center md:justify-between pt-12 mb-16 md:mb-12">
    <Link to="/">
      <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight">
        {querySiteMetadata().title}
      </h1>
    </Link>{" "}
    {subHeading && (
      <h2 className="mt-4 w-2/3 text-2xl md:text-4xl font-light inline-block leading-relaxed">
        {subHeading}
      </h2>
    )}
  </header>
);

export default Header;
