import * as React from "react";
import "../css/layout.css";
import NavBar from "./nav";
import IconGroup from "./iconGroup";

const Layout = ({ children, maxWidthOverride }) => {
  const customMaxWidth = maxWidthOverride || "var(--size-content)";

  return (
    <>
      <NavBar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: customMaxWidth,
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
