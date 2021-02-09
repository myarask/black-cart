import React from "react";

const SizeButton = ({ active, ...rest }: any) => (
  <button
    style={{
      width: "50px",
      height: "50px",
      margin: "5px",
      borderColor: active ? "black" : undefined,
    }}
    {...rest}
  />
);

export { SizeButton };
