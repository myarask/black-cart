import React from "react";

// TODO: Modify the grid settings based on media query, so that
// desktop, tablet, and mobile are fluid
const ProductGrid = (props: any) => (
  <main
    style={{ display: "grid", gridTemplateColumns: "100px auto 400px" }}
    {...props}
  />
);

export { ProductGrid };
