/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";

import "../css/layout.css";
import NavBar from "./nav";
import IconGroup from "./iconGroup";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          <IconGroup />
        </footer>
      </div>
    </>
  );
};

export default Layout;
