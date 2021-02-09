import React from "react";

const JumboButton = (props: any) => (
  <button
    style={{
      width: "100%",
      height: "50px",
      background: "#69FF46",
      textTransform: "uppercase",
      fontWeight: "bold",
      border: "none",
    }}
    {...props}
  />
);

export { JumboButton };
